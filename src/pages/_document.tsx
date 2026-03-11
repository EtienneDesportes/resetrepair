import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Preconnect to Google Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/inter-v20-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-v20-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/roboto-slab-v36-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Schema.org LocalBusiness Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.resetlab.fr/#organization",
              "name": "Reset Lab",
              "image": "https://www.resetlab.fr/images/logo-reset-lab.jpg",
              "description": "Expert en réparation électronique à Schiltigheim. Spécialiste micro-soudure sur Console, Macbook, Carte-Mère, PC, Audio, etc...",
              "url": "https://www.resetlab.fr",
              "telephone": "+33678235040",
              "priceRange": "€",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "21 rue du Soleil",
                "addressLocality": "Schiltigheim",
                "postalCode": "67300",
                "addressRegion": "Grand Est",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.607532",
                "longitude": "7.756656"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Schiltigheim"
                },
                {
                  "@type": "City",
                  "name": "Strasbourg"
                },
                {
                  "@type": "City",
                  "name": "Bischheim"
                },
                {
                  "@type": "City",
                  "name": "Hoenheim"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de réparation",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Réparation par micro-soudure",
                      "description": "Réparation carte mère MacBook, consoles, PC, Enceinte, Audio par micro-soudure"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Réparation console de jeux",
                      "description": "Réparation PlayStation, Xbox, Nintendo Switch"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Réparation ordinateurs",
                      "description": "Réparation MacBook, PC portables, cartes mères"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Defer Google Analytics to after page load for better performance */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  var s = document.createElement('script');
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-FBBN11WEK6';
                  s.async = true;
                  document.head.appendChild(s);
                  s.onload = function() {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-FBBN11WEK6');
                  };
                }, 100);
              });
            `,
          }}
        />
      </body>
    </Html>
  );
}
