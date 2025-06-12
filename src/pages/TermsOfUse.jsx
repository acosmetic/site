<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { motion } from 'framer-motion'
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041

const TermsOfUse = () => {
  return (
    <div className="section bg-white">
<<<<<<< HEAD
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-3xl font-bold mb-6 text-nivea-dark text-center">Conditions Générales d'Utilisation</h1>

          <div className="prose prose-lg max-w-none text-nivea-dark">
            <p className="italic text-sm mb-6 text-center">Dernière mise à jour : 12 Mai 2025</p>

            <p className="font-semibold text-red-600 mb-4">VEUILLEZ LIRE ATTENTIVEMENT CES CONDITIONS D'UTILISATION AVANT D'UTILISER CE SITE. En utilisant ce site, vous signifiez votre acceptation de ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">1. Acceptation des Conditions</h2>
            <p>Bienvenue sur le site web de A-COSMETIC (le "Site"). Ces Conditions Générales d'Utilisation ("CGU") régissent votre accès et votre utilisation du Site. En accédant ou en utilisant le Site, vous acceptez d'être lié par ces CGU et par notre Politique de Confidentialité. Si vous n'êtes pas d'accord avec une partie de ces conditions, vous ne devez pas utiliser le Site.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">2. Utilisation du Site</h2>
            <p>Le Site et son contenu (textes, images, logos, etc.) sont la propriété de A-COSMETIC ou de ses concédants de licence et sont protégés par les lois sur le droit d'auteur et la propriété intellectuelle. Vous êtes autorisé à utiliser le Site à des fins personnelles et non commerciales. Toute autre utilisation, y compris la reproduction, la modification, la distribution ou la republication, sans l'autorisation écrite préalable de A-COSMETIC, est strictement interdite.</p>
            <p>Vous vous engagez à ne pas utiliser le Site pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Toute activité illégale ou frauduleuse.</li>
              <li>Transmettre tout matériel nuisible, menaçant, diffamatoire, obscène ou autrement répréhensible.</li>
              <li>Interférer avec le fonctionnement du Site ou des serveurs connectés.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">3. Produits et Commandes</h2>
            <p>Les informations sur les produits présentées sur le Site sont fournies à titre indicatif. Nous nous efforçons d'assurer l'exactitude des descriptions et des prix, mais des erreurs peuvent survenir. A-COSMETIC se réserve le droit de corriger toute erreur et de modifier les informations sur les produits à tout moment sans préavis.</p>
            <p>Les commandes de produits sont soumises aux conditions spécifiques de vente qui vous seront communiquées lors du processus de commande (par téléphone ou autre moyen indiqué).</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">4. Liens vers des Tiers</h2>
            <p>Le Site peut contenir des liens vers des sites web de tiers. Ces liens sont fournis pour votre commodité uniquement. A-COSMETIC n'a aucun contrôle sur le contenu de ces sites tiers et n'assume aucune responsabilité quant à leur contenu, leur exactitude ou les pratiques de confidentialité.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">5. Limitation de Responsabilité</h2>
            <p>Le Site est fourni "tel quel" et "selon disponibilité". A-COSMETIC ne garantit pas que le Site sera ininterrompu, exempt d'erreurs ou de virus. Dans toute la mesure permise par la loi applicable, A-COSMETIC décline toute responsabilité pour tout dommage direct, indirect, accessoire, consécutif ou spécial résultant de votre utilisation ou de votre incapacité à utiliser le Site.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">6. Modifications des CGU</h2>
            <p>A-COSMETIC se réserve le droit de modifier ces CGU à tout moment. Les modifications prendront effet dès leur publication sur le Site. Votre utilisation continue du Site après la publication des modifications constitue votre acceptation des nouvelles CGU. Nous vous encourageons à consulter régulièrement cette page.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">7. Droit Applicable</h2>
            <p>Ces CGU sont régies et interprétées conformément aux lois de la Côte d'Ivoire. Tout litige relatif à ces CGU sera soumis à la compétence exclusive des tribunaux d'Abidjan.</p>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-nivea-dark">8. Contact</h2>
            <p>Si vous avez des questions concernant ces Conditions Générales d'Utilisation, veuillez nous contacter via les informations fournies sur notre page Contact.</p>

            <p className="mt-8 font-semibold">Merci d'utiliser le site A-COSMETIC.</p>
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          </div>
        </motion.div>
      </div>
    </div>
<<<<<<< HEAD
  );
};

export default TermsOfUse;
=======
  )
}

export default TermsOfUse
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
