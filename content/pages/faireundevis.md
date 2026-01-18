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
      elementId: contact-form
      action: "/thank-you.html"
      dataNetlify: true
      fields:
        - type: TextFormControl
          name: name
          label: name
          hideLabel: true
          placeholder: Votre nom et prénom
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: email
          hideLabel: true
          placeholder: Votre email
          isRequired: true
          width: full
        - type: TextFormControl
          name: telephone
          label: telephone
          hideLabel: true
          placeholder: Un numéro pour vous joindre
          isRequired: false
          width: full
        - type: TextareaFormControl
          name: message
          label: >-
            Quel est votre problème ? Merci de préciser le modèle et l'année de
            votre appareil
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
      styles:
        self:
          padding:
            - pt-28
            - pb-20
            - pl-20
            - pr-20
          borderColor: border-dark
          border
