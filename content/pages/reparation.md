---
type: PageLayout
title: Comment ça marche ?
sections:
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
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    media:
      type: ImageBlock
      url: /images/réparation-carte-mère.jpg
      altText: Image alt text placeholder
      elementId: ''
      styles:
        self:
          borderRadius: medium
  - type: GenericSection
    title:
      type: TitleBlock
      text: Generic section with a video
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: Section with a video subtitle
    text: >
      <span style="color: #11295c">


      \## Le diagnostic


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
    media:
      type: VideoBlock
      title: Title of the video
      url: /images/placeholder-video.mp4
      autoplay: true
      loop: true
      muted: true
      controls: false
      aspectRatio: '16:9'
      styles:
        self:
          padding:
            - pt-2
            - pb-2
            - pl-2
            - pr-2
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
slug: reparation
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
