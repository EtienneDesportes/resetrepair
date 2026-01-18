<section style="display: flex; flex-wrap: wrap; gap: 40px; padding: 40px 20px; max-width: 1200px; margin: 0 auto; font-family: sans-serif;">

    <div style="flex: 1; min-width: 300px;">
        <h1 style="color: #333; margin-bottom: 20px;">Faire un devis gratuit</h1>
        <p style="font-size: 1.1em; line-height: 1.6; color: #555;">
            Vous rencontrez un problème avec votre appareil ? Remplissez notre formulaire de demande de devis en quelques clics. 
            Nos techniciens experts analyseront votre demande et vous répondront avec une estimation précise sous 24h.
        </p>
        <ul style="list-style: none; padding: 0; margin-top: 20px;">
            <li style="margin-bottom: 10px;">✅ <strong>Réponse rapide :</strong> Estimation sous 24h ouvrées.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Pièces de qualité :</strong> Nous utilisons des composants certifiés.</li>
            <li style="margin-bottom: 10px;">✅ <strong>Garantie :</strong> Toutes nos réparations sont garanties.</li>
        </ul>
    </div>

    <div style="flex: 1; min-width: 300px; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        
        <form name="contact-form" method="POST" data-netlify="true" action="/thank-you.html">
            
            <input type="hidden" name="form-name" value="contact-form" />

            <div style="margin-bottom: 20px;">
                <label for="name" style="display: block; font-weight: bold; margin-bottom: 8px;">Nom & Prénom</label>
                <input type="text" id="name" name="name" placeholder="Votre nom complet" required 
                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 20px;">
                <label for="email" style="display: block; font-weight: bold; margin-bottom: 8px;">Adresse Email</label>
                <input type="email" id="email" name="email" placeholder="votre@email.com" required 
                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 20px;">
                <label for="device" style="display: block; font-weight: bold; margin-bottom: 8px;">Modèle de l'appareil</label>
                <input type="text" id="device" name="device" placeholder="ex: iPhone 13, MacBook Air..." required 
                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;">
            </div>

            <div style="margin-bottom: 25px;">
                <label for="message" style="display: block; font-weight: bold; margin-bottom: 8px;">Description de la panne</label>
                <textarea id="message" name="message" rows="5" placeholder="Expliquez-nous le problème..." required 
                    style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box;"></textarea>
            </div>

            <button type="submit" style="width: 100%; padding: 15px; background-color: #007bff; color: white; font-weight: bold; border: none; border-radius: 6px; cursor: pointer; font-size: 16px;">
                Envoyer ma demande de devis
            </button>
        </form>
    </div>

</section>
