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
      subtitle:
        textAlign: left
    media:
      type: ImageBlock
      url: /images/820-2330.jpg
      altText: Image alt text placeholder
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
      opacity: 10
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
  - type: FeaturedItemsSection
    items:
      - type: FeaturedItem
        title: ''
        subtitle: ''
        image:
          type: ImageBlock
          url: /images/envoigratuit-69c13db7.svg
          altText: Cotton Knit Throws
          elementId: ''
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-light-fg-dark
        text: "<span style=\"color: #11295c\"\_>\n\n<p style='text-align: justify;'>Après confirmation du devis, une étiquette d’envoi avec assurance vous sera envoyée. Il ne vous reste plus qu’à coller l’étiquette sur votre colis et de le déposer en bureau de poste. </p>\n</span>\n\n"
      - type: FeaturedItem
        title: ''
        subtitle: ''
        image:
          type: ImageBlock
          url: /images/réparation-32a3e815.svg
          altText: Faux Fur Throw
          elementId: ''
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-light-fg-dark
        styles:
          self:
            padding:
              - pt-0
              - pl-0
              - pb-0
              - pr-0
            textAlign: left
            borderRadius: none
            flexDirection: col
            justifyContent: center
        text: >+
          <span style="color: #11295c">

          <p style='text-align: justify;'>On confirme la réception de votre
          MacBook et on le répare. S'il n'est pas réparable, seuls les frais de
          retour sont à votre charge.</p>

          </span>

      - type: FeaturedItem
        title: ''
        subtitle: ''
        image:
          type: ImageBlock
          url: /images/réparation-multimètre-soudure-microscope(1)(1).jpg
          altText: Chunky Cotton Knit Throw
          elementId: ''
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-light-fg-dark
        text: >+
          <span style="color: #11295c">

          <p style='text-align: justify;'>Vous réglez uniquement le devis si la
          réparation est finalisée avec succès. On vous renvoie gratuitement
          votre machine en colis assuré.</p>

          </span>

    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-8
          - pb-8
          - pr-8
        justifyContent: flex-start
      subtitle:
        textAlign: center
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 10
      url: /images/simple-pcb-layout_lml7zo.webp
slug: reparation
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
