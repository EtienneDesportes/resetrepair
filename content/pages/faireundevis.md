---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: >
      **DEVIS GRATUIT**



      Nous
       ne facturons pas de devis. Payer pour un premier diagnostic n'a pas de 
      sens d'après nous. Vous payez uniquement si votre machine est à nouveau 

      en état de marche.


      **REPARATION AVEC SATISFACTION GARANTIE**


      Vous réglez uniquement le devis si la réparation est réalisée avec succès.
      Pas de mauvaises surprises. Les tarifs vont **de 80 à 450€ TTC**, selon la
      panne et l’âge de votre machine. La facturation se fait toujours après
      réparation.


      **ENVOI ET RETOUR INCLUS**



      Vous
       recevez une étiquette d'envoi, avec assurance incluse. Votre colis bien
       sécurisé, il ne vous reste plus qu’à coller l’étiquette et le déposer 
      en point relais. Vous pouvez aussi déposer votre machine à notre 

      atelier. 


      **GARANTIE 6 MOIS**


      Notre
       expertise nous permet de vous garantir nos interventions pendant 6 
      mois. Nous avons les outils et composants pour assurer une réparation de
       haute qualité.
    actions: []
    media:
      type: HTMLBlock
      html: |
        <form name="contact-devis" method="POST" data-netlify="true" class="contact-form-container">
          <input type="hidden" name="form-name" value="contact-devis" />
          
          <div class="form-group">
            <input type="text" name="name" placeholder="Votre nom et prénom" required />
          </div>
          
          <div class="form-group">
            <input type="email" name="email" placeholder="Votre email" required />
          </div>
          
          <div class="form-group">
            <input type="tel" name="telephone" placeholder="Un numéro pour vous joindre" />
          </div>
          
          <div class="form-group">
            <label for="message">Quel est votre problème ? Merci de préciser le modèle et l'année de votre appareil</label>
            <textarea id="message" name="message" placeholder="Votre message" rows="5"></textarea>
          </div>
          
          <button type="submit" class="submit-button">
            Envoyer
          </button>
        </form>

        <style>
          .contact-form-container {
            padding: 40px;
            border: 1px solid #000;
            border-radius: 20px;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .form-group { display: flex; flex-direction: column; gap: 5px; }
          .form-group input, .form-group textarea {
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            width: 100%;
          }
          .submit-button {
            padding: 12px 24px;
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            align-self: flex-start;
          }
        </style>
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
      text:
        textAlign: justify
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
