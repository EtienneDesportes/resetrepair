---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: Réparation rapide et garantie
    text: >
      **Devis gratuit - Tarif de 80 à 450€ TTC**


      Pas de frais de diagnostic. Vous payez uniquement si votre appareil est
      réparé avec succès.


      **Envoi gratuit - Garantie 6 mois**


      Étiquette d'envoi avec assurance fournie. Nos réparations sont garanties 6
      mois.


      **Réponse sous 24h**


      Nous analysons votre demande rapidement et vous proposons une solution
      adaptée.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: name
          hideLabel: true
          placeholder: Nom et prénom
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: email
          hideLabel: true
          placeholder: Adresse email
          isRequired: true
          width: full
        - type: TextFormControl
          name: telephone
          label: telephone
          hideLabel: true
          placeholder: Téléphone (optionnel)
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: message
          label: Décrivez votre problème (modèle et année de l'appareil si possible)
          hideLabel: false
          placeholder: Ex MacBook Pro 2019 ne s'allume plus apres chute
          width: full
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
            - pb-20
            - pl-16
            - pr-16
          borderColor: border-primary
          borderStyle: solid
          borderWidth: 2
          borderRadius: large
          justifyContent: flex-start
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-4
          - pb-16
          - pr-4
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
  metaTitle: Devis Gratuit - Réparation Électronique Strasbourg
  metaDescription: >-
    Devis gratuit en 24h. Réparation garantie 6 mois. Tarif de 80 à 450€ TTC. 
    MacBook, PC, Console, Smartphone, Tablette. Envoi gratuit inclus.
  socialImage: /images/header image.webp
  type: Seo
  addTitleSuffix: false
---
