---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: |
      <div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">
        
        <div style="flex: 1; min-width: 300px;">
          <p><strong>DEVIS GRATUIT</strong></p>
          <p>Nous ne facturons pas de devis. Payer pour un premier diagnostic n'a pas de sens d'après nous. Vous payez uniquement si votre machine est à nouveau en état de marche.</p>
          
          <p><strong>REPARATION AVEC SATISFACTION GARANTIE</strong></p>
          <p>Vous réglez uniquement le devis si la réparation est réalisée avec succès. Pas de mauvaises surprises. Les tarifs vont <strong>de 80 à 450€ TTC</strong>. La facturation se fait toujours après réparation.</p>
          
          <p><strong>ENVOI ET RETOUR INCLUS</strong></p>
          <p>Vous recevez une étiquette d'envoi avec assurance. Déposez votre colis en point relais ou directement à notre atelier.</p>
          
          <p><strong>GARANTIE 6 MOIS</strong></p>
          <p>Notre expertise nous permet de garantir nos interventions pendant 6 mois avec des composants de haute qualité.</p>
        </div>

        <div style="flex: 1; min-width: 300px; background: rgba(255,255,255,0.05); padding: 25px; border-radius: 12px; border: 1px solid #444;">
          <form name="contact-form" method="POST" data-netlify="true" action="/thank-you.html">
            <input type="hidden" name="form-name" value="contact-form" />
            
            <div style="margin-bottom: 15px;">
              <input type="text" name="name" placeholder="Votre nom et prénom" required style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #ccc; background: #fff; color: #000;">
            </div>
            
            <div style="margin-bottom: 15px;">
              <input type="email" name="email" placeholder="Votre email" required style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #ccc; background: #fff; color: #000;">
            </div>
            
            <div style="margin-bottom: 15px;">
              <input type="tel" name="telephone" placeholder="Numéro de téléphone" style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #ccc; background: #fff; color: #000;">
            </div>
            
            <div style="margin-bottom: 15px;">
              <label style="display: block; margin-bottom: 5px; font-size: 0.9em;">Quel est votre problème ? (Modèle et année)</label>
              <textarea name="message" rows="4" placeholder="Détaillez votre panne ici..." required style="width: 100%; padding: 12px; border-radius: 6px; border: 1px solid #ccc; background: #fff; color: #000;"></textarea>
            </div>
            
            <button type="submit" style="width: 100%; padding: 15px; background-color: #007bff; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
              Envoyer la demande →
            </button>
          </form>
        </div>
        
      </div>
    actions: []
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-10
          - pl-5
          - pb-10
          - pr-5
      text:
        textAlign: left
    backgroundImage:
      type: BackgroundImage
      altText: background
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: repeat
      opacity: 100
      url: /images/noise.png
slug: faireundevis
isDraft: false
seo:
  metaTitle: Réparation Électronique Strasbourg Schiltigheim
  metaDescription: Réparation Micro Soudure MacBook PC Portable Console Apple Audio Tablette Smartphone Carte Mère 
  socialImage: /images/header image.webp
  type: Seo
  addTitleSuffix: false
---
