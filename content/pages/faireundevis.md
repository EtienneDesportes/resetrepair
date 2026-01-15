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
      type: FormBlock
      fields:
        - type: TextFormControl
          name: Nom / Prénom
          label: Name
          hideLabel: true
          placeholder: Votre nom et prénom
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Votre email
          isRequired: true
          width: full
        - type: TextFormControl
          name: Téléphone (optionnel
          label: telephone
          hideLabel: true
          placeholder: Votre numéro
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: >-
            Quel est votre problème ? (Merci de préciser le modèle et l'année de
            votre appareil)
          label: >-
            Quel est votre problème ? (Merci de préciser le modèle et l'année de
            votre appareil)
          hideLabel: false
          placeholder: Votre message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Envoyer
        icon: arrowRight
        iconPosition: right
        style: primary
        showIcon: true
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-20
            - pb-20
            - pl-20
            - pr-20
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
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
  metaTitle: Réparation électronique Strasbourg Schiltigheim
  metaDescription: >-
    Réparation Micro Soudure MacBook PC Portable Console Apple Audio Tablette
    Smartphone Carte Mère 
  socialImage: /images/réparation-micro-soudure.jpg
  type: Seo
---
