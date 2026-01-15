---
type: PageLayout
title: Comment ça marche ?
sections:
  - type: GenericSection
    subtitle: ''
    text: >+
      <span style="color: #11295c">


      Quand une machine tombe en panne, il faut dans un premier temps utiliser
      son esprit de déduction et d'observation pour identifier les
      **composants** défectueux. On se retrouve donc dans la peau d'un détective
      en quelque sorte. Toutes traces visibles **d'oxydation** (traces
      bleues/vertes) sont des indices en plus, il ne faut donc jamais désoxyder
      une carte mère avant la réparation, cela brouille les pistes ! Si aucune
      trace n'est présente, équipé d'un **multimère**, il faut analyser comment
      le circuit se comporte en l'état actuel et comparer avec les valeurs
      retrouvées sur le **schéma du circuit**. Sur une carte-mère de macbook, on
      peut par exemple vérifier si le circuit injecte bien assez de **voltage**
      pour démarrer le onewirecircuit ? La ligne électrique **PP3V42\_G3H**
      est-elle bien présente ? Résistance, fusible, condensateur, il ne faut
      rien rater. À l'aide d'une **alimentation de labo**, on peut injecter du
      voltage dans certaines parties du circuit afin d'en trouver les
      **courts-circuits** potentiels. On peut ainsi réparer une carte-mère sans
      la changer entièrement !


      </span>

    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
        padding:
          - pt-5
          - pl-5
          - pb-5
          - pr-5
      subtitle:
        textAlign: left
      text:
        textAlign: justify
    media:
      type: ImageBlock
      url: /images/820-2330.jpg
      altText: Carte Mère MacBook
      elementId: ''
      styles:
        self:
          borderRadius: medium
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: contain
      backgroundPosition: center
      backgroundRepeat: repeat
      opacity: 5
      url: /images/simple-pcb-layout_lml7zo.webp
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: >
      ### **La réparation est uniquement facturée si elle est réalisée avec
      succès !**


      **La carte mère est réparable :**

      Vous réglez en ligne par CB le montant indiqué sur le devis. L’envoi et
      retour par colis sont assurés et gratuits.


      **La carte mère n’est pas réparable :**

      Vous serez informé par e-mail. Le retour est facturé 30€ TTC si vous ne
      pouvez pas récupérer votre appareil à l'atelier.
    actions: []
    colors: bg-neutral-fg-dark
    backgroundImage:
      type: BackgroundImage
      url: /images/noise.png
      altText: Placeholder image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: repeat
      opacity: 100
    styles:
      self:
        padding:
          - pt-10
          - pl-10
          - pb-10
          - pr-10
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: justify
      subtitle:
        textAlign: center
    media:
      type: ImageBlock
      url: /images/réparation-carte-mère.jpg
      altText: Micro Soudure Strasbourg
      elementId: ''
      styles:
        self:
          borderRadius: medium
slug: reparation
seo:
  metaTitle: Réparation Électronique Strasbourg Schiltigheim
  metaDescription: >-
    Réparation Micro Soudure MacBook PC Portable Console Apple Audio Tablette
    Smartphone Carte Mère 
  socialImage: /images/réparation-micro-soudure.jpg
  type: Seo
  addTitleSuffix: false
---
