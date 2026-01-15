---
type: PageLayout
title: Comment ça marche ?
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: La réparation est uniquement facturée si elle est réalisée avec succès !
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: >
      **La carte mère est réparable :**

      Vous réglez en ligne par CB le montant indiqué sur le devis. L’envoi et
      retour par colis sont assurés et gratuits.


      **La carte mère n’est pas réparable :**

      Vous serez informé par e-mail. Le retour est facturé 30€ TTC si vous ne
      pouvez pas récupérer votre appareil à l'atelier.
    actions:
      - type: Button
        label: See open positions
        url: /
        icon: arrowRight
        iconPosition: right
        style: primary
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
slug: reparation
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
