---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: >
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start;">
        <div>
          <h3 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1rem;">DEVIS GRATUIT & RÉPARATION GARANTIE</h3>
          
          <p style="margin-bottom: 1.5rem;">
            <strong>Diagnostic gratuit</strong> - Vous payez uniquement si votre machine est réparée avec succès.
          </p>
          
          <p style="margin-bottom: 1.5rem;">
            <strong>Tarifs transparents</strong> - De 80 à 450€ TTC selon la panne et l'âge de votre machine.
          </p>
          
          <p style="margin-bottom: 1.5rem;">
            <strong>Envoi et retour inclus</strong> - Étiquette d'envoi avec assurance fournie. Dépôt en point relais ou à notre atelier.
          </p>
          
          <p style="margin-bottom: 1.5rem;">
            <strong>Garantie 6 mois</strong> - Réparation de haute qualité garantie.
          </p>
        </div>
        
        <div>
          <form 
            name="contact" 
            method="POST" 
            netlify 
            action="/thank-you.html"
            netlify-honeypot="bot-field"
            style="background: #f9fafb; padding: 2rem; border-radius: 0.5rem; border: 1px solid #e5e7eb;"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            
            <div style="margin-bottom: 1.5rem;">
              <input 
                type="text" 
                name="name" 
                placeholder="Votre nom et prénom" 
                required
                style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
              />
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <input 
                type="email" 
                name="email" 
                placeholder="Votre email" 
                required
                style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
              />
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <input 
                type="tel" 
                name="telephone" 
                placeholder="Un numéro pour vous joindre"
                style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem;"
              />
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">
                Quel est votre problème ? Merci de préciser le modèle et l'année de votre appareil
              </label>
              <textarea 
                name="message" 
                placeholder="Votre message" 
                rows="4"
                required
                style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; resize: vertical;"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              style="width: 100%; padding: 0.875rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.2s;"
              onmouseover="this.style.background='#2563eb'"
              onmouseout="this.style.background='#3b82f6'"
            >
              Envoyer →
            </button>
          </form>
        </div>
      </div>
    actions: []
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-20
          - pl-5
          - pb-20
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
