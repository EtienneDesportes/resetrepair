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
          placeholder: Votre Nom et Prénom
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextFormControl
          name: Téléphone
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    colors: bg-neutral-fg-dark
slug: faireundevis
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
