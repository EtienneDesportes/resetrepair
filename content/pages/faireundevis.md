---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: |
      ## DEVIS GRATUIT & RÉPARATION GARANTIE

      **Diagnostic gratuit** - Vous payez uniquement si votre machine est réparée avec succès.

      **Tarifs transparents** - De 80 à 450€ TTC selon la panne et l'âge de votre machine.

      **Envoi et retour inclus** - Étiquette d'envoi avec assurance fournie. Dépôt en point relais ou à notre atelier.

      **Garantie 6 mois** - Réparation de haute qualité garantie.
    actions: []
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-10
          - pl-5
          - pb-5
          - pr-5
      text:
        textAlign: left
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: repeat
      opacity: 100
      url: /images/noise.png
  - type: GenericSection
    subtitle: ''
    text: |
      <form 
        name="contact" 
        method="POST" 
        netlify 
        action="/thank-you.html"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <p>
          <input 
            type="text" 
            name="name" 
            placeholder="Votre nom et prénom" 
            required
            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px;"
          />
        </p>
        
        <p>
          <input 
            type="email" 
            name="email" 
            placeholder="Votre email" 
            required
            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px;"
          />
        </p>
        
        <p>
          <input 
            type="tel" 
            name="telephone" 
            placeholder="Un numéro pour vous joindre"
            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px;"
          />
        </p>
        
        <p>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">
            Quel est votre problème ? Merci de préciser le modèle et l'année de votre appareil
          </label>
          <textarea 
            name="message" 
            placeholder="Votre message" 
            rows="5"
            required
            style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 16px; margin-bottom: 15px; resize: vertical;"
          ></textarea>
        </p>
        
        <p>
          <button 
            type="submit"
            style="width: 100%; padding: 14px 24px; background: #3b82f6; color: white; border: none; border-radius: 6px; font-size: 16px; font-weight: 600; cursor: pointer;"
          >
            Envoyer →
          </button>
        </p>
      </form>
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-10
          - pl-5
          - pb-20
          - pr-5
      text:
        textAlign: left
slug: faireundevis
isDraft: false
seo:
  metaTitle: Réparation Électronique Strasbourg Schiltigheim
  metaDescription: >-
    Réparation Micro Soudure MacBook PC Portable Console Apple Audio Tablette
    Smartphone Carte Mère 
  socialImage: /images/header image.webp
  type: Seo
  addTitleSuffix: false
---
