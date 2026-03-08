---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: >
      <span style="color: #11295c">

      ### **Devis gratuit**


      Pas de frais pour un premier diagnostic. Si un diagnostic approfondi est
      nécessaire, nous vous tiendrons informé.


      ### **Garantie 6 mois**


      Pas de mauvaises surprises ! Nos réparations sont garanties 6 mois.


      ### **Réponse sous 24h**


      Nous analysons votre demande rapidement et vous proposons une solution
      adaptée.

      </span>

      <style>
      #devis {
        position: relative !important;
        overflow: hidden !important;
      }
      #devis::before {
        content: '' !important;
        position: absolute !important;
        inset: 0 !important;
        background-image: url('/images/amazing-mango.svg') !important;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        opacity: 0.58 !important;
        z-index: 0 !important;
        pointer-events: none !important;
      }
      #contact-form input,
      #contact-form textarea,
      #contact-form select {
        color: #11295c !important;
        border: 1.5px solid #11295c !important;
        border-radius: 10px !important;
        background-color: transparent !important;
      }
      #contact-form input::placeholder,
      #contact-form textarea::placeholder {
        color: rgba(17,41,92,0.45) !important;
      }
      #contact-form input:focus,
      #contact-form textarea:focus {
        box-shadow: 0 0 0 3px rgba(17,41,92,0.15) !important;
      }
      #contact-form {
        border-color: #11295c !important;
      }
      </style>

    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: name
          hideLabel: true
          placeholder:  Nom et prénom
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: email
          hideLabel: true
          placeholder:  Adresse email
          isRequired: true
          width: full
        - type: TextFormControl
          name: telephone
          label: telephone
          hideLabel: true
          placeholder:  Téléphone (optionnel)
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: message
          label: Décrivez votre problème (modèle et année de l'appareil si possible)
          hideLabel: false
          placeholder: Ex MacBook Pro 2019 ne s'allume plus apres chute
          width: full
          isRequired: true
      submitButton:
        type: SubmitButtonFormControl
        label: Obtenir mon devis gratuit
        icon: arrowRight
        iconPosition: right
        style: primary
        showIcon: true
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-20
            - pb-5
            - pl-16
            - pr-16
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 2
          borderRadius: large
          justifyContent: flex-start
    elementId: devis
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-4
          - pl-4
          - pb-4
          - pr-4
      text:
        textAlign: left
    backgroundImage:
      type: BackgroundImage
      altText: réparation électronique strasbourg schiltigheim
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 58
      url: /images/resetlab-background-modern(1).svg
slug: faireundevis
isDraft: false
seo:
  metaTitle: Devis Gratuit - Réparation Électronique Strasbourg
  metaDescription: >-
    Devis gratuit en 24h. Réparation garantie 6 mois. Tarif de 80 à 450€ TTC. 
    MacBook, PC, Console, Smartphone, Tablette. Envoi gratuit inclus.
  socialImage: /images/header image.webp
  type: Seo
  addTitleSuffix: true
---
