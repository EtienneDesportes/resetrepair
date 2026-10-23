---
type: PageLayout
title: Faire un Devis
sections:
  - type: GenericSection
    subtitle: ''
    text: |
      <div style="text-align: left;">

      <h3 style="display: flex; align-items: center; gap: 0.7rem; margin: 0 0 0.6rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" style="flex-shrink: 0;"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M6.5 12.5l3.5 3.5 7.5-8" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><strong style="margin: 0;">Devis gratuit</strong></h3>

      <p style="margin: 0 0 2.2rem;">Devis gratuit pour une panne immédiatement identifiable. Si un diagnostic approfondi est nécessaire pour en déterminer l'origine, un tarif de 30 € s'applique.</p>

      <h3 style="display: flex; align-items: center; gap: 0.7rem; margin: 0 0 0.6rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" style="flex-shrink: 0;"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M6.5 12.5l3.5 3.5 7.5-8" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><strong style="margin: 0;">Garantie 6 mois</strong></h3>

      <p style="margin: 0 0 2.2rem;">Pas de mauvaises surprises ! Nos réparations sont garanties 6 mois.</p>

      <h3 style="display: flex; align-items: center; gap: 0.7rem; margin: 0 0 0.6rem;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" style="flex-shrink: 0;"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M6.5 12.5l3.5 3.5 7.5-8" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg><strong style="margin: 0;">Réponse sous 24h</strong></h3>

      <p style="margin: 0;">Nous analysons votre demande rapidement et vous proposons une solution adaptée.</p>

      </div>
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
          placeholder: Ex Ma table de mixage Tascam Model 2400 ne démarre plus !
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
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-4
          - pl-4
          - pb-4
          - pr-4
        alignItems: center
      text:
        textAlign: left
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 24
      url: /images/resetlab-background-modern(1).svg
slug: faireundevis
isDraft: false
seo:
  metaTitle: Devis Gratuit - Réparation Électronique Strasbourg
  metaDescription: >-
    Devis gratuit en 24h. Réparation garantie 6 mois.
    MacBook, PC, Console, Smartphone, Tablette.
  socialImage: /images/header image.webp
  type: Seo
  addTitleSuffix: true
---

