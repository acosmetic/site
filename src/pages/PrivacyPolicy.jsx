<<<<<<< HEAD
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-nivea-dark text-center">Politique de Confidentialité</h1>

          <div className="prose prose-lg max-w-none text-nivea-dark">
            <p className="italic text-sm mb-6 text-center">Dernière mise à jour : 12 Mai 2025</p>

            <p className="font-semibold mb-4">A-COSMETIC ("nous", "notre" ou "nos") s'engage à protéger la vie privée des visiteurs de notre site web (le "Site"). Cette Politique de Confidentialité décrit comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">1. Collecte d'Informations Personnelles</h2>
            <p>Nous pouvons collecter des informations personnelles vous concernant lorsque vous interagissez avec notre Site, notamment lorsque vous :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Utilisez notre formulaire de contact (Nom, Email, Sujet, Message).</li>
              <li>Naviguez sur notre Site (Informations collectées automatiquement, voir section "Cookies").</li>
              <li>Nous contactez directement par téléphone ou email.</li>
            </ul>
            <p>Les informations que nous collectons peuvent inclure votre nom, votre adresse email, votre numéro de téléphone (si fourni) et toute autre information que vous choisissez de nous communiquer.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">2. Utilisation de Vos Informations</h2>
            <p>Nous utilisons les informations collectées pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes et questions soumises via le formulaire de contact ou d'autres moyens.</li>
              <li>Améliorer notre Site et nos services.</li>
              <li>Communiquer avec vous concernant nos produits et services (si vous y consentez).</li>
              <li>Respecter nos obligations légales.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">3. Partage de Vos Informations</h2>
            <p>Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations avec :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Des prestataires de services tiers qui nous aident à exploiter notre Site ou à mener nos activités (par exemple, Formspree pour la gestion des formulaires de contact), à condition qu'ils acceptent de garder ces informations confidentielles.</li>
              <li>Les autorités légales si la loi l'exige ou pour protéger nos droits.</li>
            </ul>
            <p>Note: Le formulaire de contact utilise le service Formspree. Leur propre politique de confidentialité s'applique à la gestion des données soumises via le formulaire.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">4. Cookies et Technologies Similaires</h2>
            <p>Notre Site peut utiliser des cookies (petits fichiers texte stockés sur votre appareil) pour améliorer votre expérience utilisateur, analyser l'utilisation du Site et faciliter certaines fonctionnalités. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter votre capacité à utiliser certaines parties du Site.</p>
            {/* Ajouter plus de détails si des outils d'analyse spécifiques (Google Analytics, etc.) sont utilisés */} 

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">5. Sécurité des Données</h2>
            <p>Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée à 100%.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">6. Vos Droits</h2>
            <p>Selon la législation applicable, vous pouvez avoir le droit d'accéder, de corriger, de supprimer ou de limiter l'utilisation de vos informations personnelles. Pour exercer ces droits, veuillez nous contacter aux coordonnées fournies ci-dessous.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">7. Modifications de cette Politique</h2>
            <p>Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. La date de la "Dernière mise à jour" en haut de cette page indiquera quand les dernières révisions ont été effectuées. Nous vous encourageons à consulter régulièrement cette page.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">8. Contact</h2>
            <p>Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter via les informations fournies sur notre page Contact.</p>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
=======
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg mx-auto"
        >
          <h1 className="text-4xl font-bold text-nivea-dark">Politique de confidentialité</h1>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">1. Collecte d'informations</h2>
            <p>
              Nous collectons des informations lorsque vous visitez notre site, passez une commande 
              ou remplissez un formulaire. Les informations collectées incluent votre nom, adresse 
              email et numéro de téléphone.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">2. Utilisation des informations</h2>
            <p>
              Les informations que nous collectons sont utilisées pour :
            </p>
            <ul>
              <li>Personnaliser votre expérience</li>
              <li>Améliorer notre site web</li>
              <li>Améliorer notre service client</li>
              <li>Traiter vos transactions</li>
              <li>Vous contacter par email</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">3. Protection des informations</h2>
            <p>
              Nous mettons en œuvre diverses mesures de sécurité pour préserver la sécurité de vos 
              informations personnelles. Nous utilisons un cryptage pour protéger les informations 
              sensibles transmises en ligne.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">4. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de 
              petits fichiers qu'un site ou son prestataire de services transfère sur le disque 
              dur de votre ordinateur via votre navigateur web.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">5. Divulgation à des tiers</h2>
            <p>
              Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles 
              identifiables à des tiers. Cela ne comprend pas les tierces parties de confiance qui 
              nous aident à exploiter notre site web ou à mener nos activités.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-nivea-dark">6. Consentement</h2>
            <p>
              En utilisant notre site, vous consentez à notre politique de confidentialité.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
