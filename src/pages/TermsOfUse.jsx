import { motion } from 'framer-motion'

const TermsOfUse = () => {
  return (
    <div className="section bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-nivea-dark">Conditions d'utilisation</h1>
          
          <div className="prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-nivea-dark">1. Acceptation des conditions</h2>
              <p className="mb-4">
                En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-nivea-dark">2. Utilisation du site</h2>
              <p className="mb-4">
                Ce site est destiné à un usage personnel et non commercial. Vous ne pouvez pas modifier, 
                copier, distribuer, transmettre, afficher, exécuter, reproduire, publier, licencier, 
                créer des œuvres dérivées, transférer ou vendre toute information obtenue de ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-nivea-dark">3. Propriété intellectuelle</h2>
              <p className="mb-4">
                Tout le contenu de ce site, y compris les textes, graphiques, logos, images, clips audio 
                et vidéo, est la propriété d'A-COSMETIC ou de ses fournisseurs de contenu et est protégé 
                par les lois sur les droits d'auteur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-nivea-dark">4. Limitation de responsabilité</h2>
              <p className="mb-4">
                A-COSMETIC ne sera pas responsable des dommages directs, indirects, accessoires, 
                spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-nivea-dark">5. Modifications</h2>
              <p className="mb-4">
                A-COSMETIC se réserve le droit de modifier ces conditions d'utilisation à tout moment. 
                Les modifications entreront en vigueur dès leur publication sur ce site.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfUse
