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
