/**
 * Fonction Netlify déclenchée automatiquement à chaque envoi de formulaire Netlify Forms
 * (nom spécial « submission-created »).
 *
 * Pour le formulaire « bon-de-depot » uniquement :
 *   1. génère un PDF du bon de dépôt,
 *   2. l'envoie par e-mail à RESET LAB (etienne@resetlab.fr) depuis la messagerie Zoho de RESET LAB.
 *   Aucun envoi au client.
 *
 * Variables d'environnement à définir dans Netlify :
 *   ZOHO_SMTP_USER   (obligatoire) adresse Zoho utilisée pour envoyer, ex. etienne@resetlab.fr
 *   ZOHO_SMTP_PASS   (obligatoire) mot de passe d'application Zoho (pas le mot de passe du compte)
 *   ZOHO_SMTP_HOST   (facultatif)  défaut : smtppro.zoho.eu (compte Zoho Europe avec domaine personnalisé)
 *   MAIL_TO_OWNER    (facultatif)  destinataire du PDF, défaut : etienne@resetlab.fr
 */
const nodemailer = require('nodemailer');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

const FORM_NAME = 'bon-de-depot';
const COMPANY = {
    name: 'RESET LAB',
    line: 'Etienne Desportes, entrepreneur individuel - 21 rue du Soleil, 67300 Schiltigheim - SIRET 822 831 251 00035',
    contact: 'etienne@resetlab.fr - 06 78 23 50 40 - www.resetlab.fr'
};

function clean(value, max = 3000) {
    return String(value == null ? '' : value)
        .replace(/\r\n?/g, '\n')
        .replace(/\t/g, ' ')
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
        .trim()
        .slice(0, max);
}

function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function isEmail(s) {
    return /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/.test(s) && s.length <= 254;
}

function parisDate(iso) {
    const d = iso ? new Date(iso) : new Date();
    return d.toLocaleString('fr-FR', { timeZone: 'Europe/Paris', dateStyle: 'long', timeStyle: 'short' });
}

function reference(payload) {
    const d = payload.created_at ? new Date(payload.created_at) : new Date();
    const ymd = d.toLocaleDateString('sv-SE', { timeZone: 'Europe/Paris' }).replace(/-/g, '');
    const n = payload.number != null ? String(payload.number).padStart(4, '0') : String(payload.id || '').slice(-4).toUpperCase();
    return `BD-${ymd}-${n}`;
}

/** Génère le PDF (octets) à partir des données du formulaire. */
async function buildPdf(data, ref, dateText) {
    const pdf = await PDFDocument.create();
    const font = await pdf.embedFont(StandardFonts.Helvetica);
    const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
    const W = 595.28, H = 841.89, M = 50, BOTTOM = 70;
    const grey = rgb(0.4, 0.4, 0.4), dark = rgb(0.1, 0.1, 0.1), blue = rgb(0.145, 0.388, 0.922);
    let page = pdf.addPage([W, H]);
    let y = H - M;

    // Les polices standard n'acceptent que le jeu WinAnsi : tout autre caractère devient « ? »
    const safe = (text, f) =>
        [...text].map((ch) => {
            if (ch === '\n') return ch;
            try { f.encodeText(ch); return ch; } catch (e) { return '?'; }
        }).join('');

    const wrap = (text, f, size, maxW) => {
        const lines = [];
        for (const para of safe(text, f).split('\n')) {
            let line = '';
            for (let word of para.split(' ')) {
                while (f.widthOfTextAtSize(word, size) > maxW) { // mot trop long : on le coupe
                    let cut = word.length;
                    while (cut > 1 && f.widthOfTextAtSize(word.slice(0, cut), size) > maxW) cut--;
                    if (line) { lines.push(line); line = ''; }
                    lines.push(word.slice(0, cut));
                    word = word.slice(cut);
                }
                const test = line ? `${line} ${word}` : word;
                if (f.widthOfTextAtSize(test, size) <= maxW) line = test;
                else { if (line) lines.push(line); line = word; }
            }
            lines.push(line);
        }
        return lines;
    };

    const footer = (p) => {
        p.drawLine({ start: { x: M, y: 52 }, end: { x: W - M, y: 52 }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
        p.drawText(safe(COMPANY.line, font), { x: M, y: 40, size: 7.5, font, color: grey });
        p.drawText(safe(COMPANY.contact, font), { x: M, y: 30, size: 7.5, font, color: grey });
    };
    footer(page);

    const ensure = (needed) => {
        if (y - needed < BOTTOM) {
            page = pdf.addPage([W, H]);
            footer(page);
            y = H - M;
        }
    };

    // En-tête
    page.drawText('RESET LAB', { x: M, y: y - 16, size: 22, font: bold, color: dark });
    page.drawText("Diagnostic et réparation d'équipements électroniques", { x: M, y: y - 30, size: 9, font, color: grey });
    const title = 'BON DE DÉPÔT';
    page.drawText(title, { x: W - M - bold.widthOfTextAtSize(title, 16), y: y - 14, size: 16, font: bold, color: blue });
    const refTxt = `N° ${ref}`;
    page.drawText(refTxt, { x: W - M - font.widthOfTextAtSize(refTxt, 9.5), y: y - 28, size: 9.5, font, color: dark });
    const dateTxt = safe(dateText, font);
    page.drawText(dateTxt, { x: W - M - font.widthOfTextAtSize(dateTxt, 9.5), y: y - 40, size: 9.5, font, color: grey });
    y -= 52;
    page.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 1.2, color: dark });
    y -= 12;

    const section = (name) => {
        ensure(40);
        y -= 12;
        page.drawText(safe(name.toUpperCase(), bold), { x: M, y, size: 10, font: bold, color: blue });
        y -= 5;
        page.drawLine({ start: { x: M, y }, end: { x: W - M, y }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });
        y -= 14;
    };

    const row = (label, value) => {
        const labelW = 140, size = 10, lh = 14;
        const lines = wrap(value || '-', font, size, W - 2 * M - labelW);
        ensure(lh * Math.min(lines.length, 3));
        page.drawText(safe(label, bold), { x: M, y, size: 9.5, font: bold, color: grey });
        for (const ln of lines) {
            ensure(lh);
            page.drawText(ln, { x: M + labelW, y, size, font, color: dark });
            y -= lh;
        }
        y -= 2;
    };

    const block = (value) => {
        const size = 10, lh = 14;
        for (const ln of wrap(value || '-', font, size, W - 2 * M)) {
            ensure(lh);
            page.drawText(ln, { x: M, y, size, font, color: dark });
            y -= lh;
        }
        y -= 2;
    };

    section('Client');
    row('Nom', `${data.nom} ${data.prenom}`.trim());
    row('E-mail', data.email);
    row('Téléphone', data.telephone);

    section('Équipement confié');
    row("Type d'appareil", data.type_appareil);
    row('Marque', data.marque);
    row('Modèle', data.modele);

    section("Panne et état de l'appareil (déclarés par le client)");
    block(data.panne);

    section('Accessoires confiés');
    block(data.accessoires);

    section('Acceptations');
    row('CGV', 'Le client a lu et accepté les Conditions Générales de Vente et de Service (www.resetlab.fr/cgv).');
    row('Diagnostic', "Le client reconnaît que si un diagnostic approfondi est nécessaire, il est facturé 30,00 EUR (TVA non applicable, art. 293 B du CGI), et qu'il sera prévenu avant toute facturation (article 3 des CGV).");
    row('Propriété', "Le client certifie être propriétaire de l'appareil ou autorisé à le confier, et l'exactitude des informations.");

    section('Signature électronique');
    row('Signé par', data.signature);
    row('Date et heure', dateText);

    ensure(50);
    y -= 14;
    for (const ln of wrap(
        "Ce document a été généré automatiquement à partir du formulaire en ligne de RESET LAB. Il vaut fiche de prise en charge (article 2 des CGV). Les données personnelles sont traitées conformément à la politique de confidentialité du site (www.resetlab.fr/mentionslegales).",
        font, 8, W - 2 * M)) {
        ensure(11);
        page.drawText(ln, { x: M, y, size: 8, font, color: grey });
        y -= 11;
    }

    return pdf.save();
}

exports.handler = async (event) => {
    try {
        const { payload } = JSON.parse(event.body || '{}');
        if (!payload || payload.form_name !== FORM_NAME) {
            return { statusCode: 200, body: 'Formulaire ignoré' };
        }

        const user = process.env.ZOHO_SMTP_USER;
        const pass = process.env.ZOHO_SMTP_PASS;
        if (!user || !pass) {
            console.error('ZOHO_SMTP_USER ou ZOHO_SMTP_PASS manquant : aucun e-mail envoyé.');
            return { statusCode: 200, body: 'Identifiants SMTP manquants' };
        }

        const raw = payload.data || {};
        const d = {};
        for (const key of ['nom', 'prenom', 'email', 'telephone', 'type_appareil', 'marque', 'modele', 'panne', 'accessoires', 'signature']) {
            d[key] = clean(raw[key], key === 'panne' ? 3000 : 300);
        }

        const ref = reference(payload);
        const dateText = parisDate(payload.created_at);
        const pdfBytes = await buildPdf(d, ref, dateText);
        const clientName = `${d.prenom} ${d.nom}`.trim();
        const e = escapeHtml;

        const transporter = nodemailer.createTransport({
            host: process.env.ZOHO_SMTP_HOST || 'smtppro.zoho.eu',
            port: 465,
            secure: true,
            auth: { user, pass }
        });

        await transporter.sendMail({
            from: `"Reset Lab" <${user}>`,
            to: process.env.MAIL_TO_OWNER || 'etienne@resetlab.fr',
            // On peut répondre directement au client
            ...(isEmail(d.email) ? { replyTo: `"${clientName.replace(/"/g, '')}" <${d.email}>` } : {}),
            subject: `Bon de dépôt ${ref} - ${clientName} - ${d.marque} ${d.modele}`.slice(0, 200),
            html: `<p>Nouveau bon de dépôt reçu (<strong>${e(ref)}</strong>).</p>
<ul>
<li><strong>Client :</strong> ${e(clientName)} - ${e(d.email)} - ${e(d.telephone)}</li>
<li><strong>Appareil :</strong> ${e(d.type_appareil)} ${e(d.marque)} ${e(d.modele)}</li>
</ul>
<p>Le PDF complet est en pièce jointe.</p>`,
            attachments: [{ filename: `bon-de-depot-${ref}.pdf`, content: Buffer.from(pdfBytes), contentType: 'application/pdf' }]
        });

        console.log(`Bon de dépôt ${ref} envoyé par e-mail.`);
        return { statusCode: 200, body: 'OK' };
    } catch (err) {
        console.error('Erreur submission-created :', err);
        return { statusCode: 200, body: 'Erreur journalisée' };
    }
};

exports.buildPdf = buildPdf;
