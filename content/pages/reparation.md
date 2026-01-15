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
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
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
