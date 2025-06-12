import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Individual FAQ item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-nivea-dark focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp className="text-nivea-blue" /> : <FaChevronDown className="text-nivea-blue" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className="mt-2 text-nivea-dark overflow-hidden"
          >
            <p className="pb-2">{answer}</p>
=======
            className="mt-4 text-nivea-dark"
          >
            {answer}
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
<<<<<<< HEAD
  const faqData = [
    {
      question: "Qu'est-ce que A-COSMETIC ?",
      answer: "A-COSMETIC est une entreprise spécialisée dans les produits de soin de la peau, fondée en 2019. Nous nous engageons à offrir des produits de haute qualité, innovants, durables et accessibles pour toute la famille."
    },
    {
      question: "Où êtes-vous situés ?",
      answer: "Notre entreprise est basée à Abidjan, Côte d'Ivoire. Vous pouvez trouver notre adresse exacte sur notre page Contact."
    },
    {
      question: "Quels types de produits proposez-vous ?",
      answer: "Nous proposons une gamme variée de soins pour le visage et le corps, incluant des crèmes, laits de beauté, gels douche (traitants, gommant, mentholés, médicalisés), savons et sérums. Découvrez notre gamme complète sur la page Produits."
    },
    {
      question: "Comment puis-je commander des produits ?",
      answer: "Sur la page Produits, vous pouvez cliquer sur le bouton 'Commander' associé à chaque produit. Cela vous montrera les numéros de téléphone à contacter pour passer votre commande. Vous pouvez également nous contacter via le formulaire sur la page Contact."
    },
    {
      question: "Vos produits sont-ils adaptés aux peaux sensibles ?",
      answer: "Nous nous efforçons de créer des produits doux et efficaces. Cependant, les réactions cutanées peuvent varier. Si vous avez la peau sensible, nous vous recommandons de consulter la description du produit et, en cas de doute, de réaliser un test cutané sur une petite zone avant une utilisation complète ou de nous contacter pour plus d'informations."
    },
    {
        question: "Proposez-vous la livraison ?",
        answer: "Pour plus d'informations sur nos options de livraison, les zones desservies et les éventuels frais, veuillez nous contacter directement par téléphone ou via notre formulaire de contact."
    },
    {
      question: "Comment puis-je contacter A-COSMETIC ?",
      answer: "Vous pouvez nous contacter par téléphone aux numéros indiqués sur le site, par email à acosmetic.es@gmail.com, ou en utilisant le formulaire de contact sur notre page Contact. Nous sommes ouverts du Lundi au Samedi de 8h00 à 17h00."
    }
=======
  const faqs = [
    {
      question: "Quels sont les ingrédients utilisés dans vos produits ?",
      answer: "Nous utilisons des ingrédients naturels et de haute qualité, soigneusement sélectionnés pour leur efficacité et leur sécurité. Chaque produit contient une formulation unique adaptée à des besoins spécifiques.",
    },
    {
      question: "Vos produits sont-ils testés sur les animaux ?",
      answer: "Non, nous ne testons pas nos produits sur les animaux. Nous sommes engagés dans une démarche éthique et responsable.",
    },
    {
      question: "Comment puis-je commander vos produits ?",
      answer: "Vous pouvez commander nos produits directement via notre page Produits en cliquant sur le bouton Commander. Vous serez mis en relation avec notre service client qui vous guidera pour finaliser votre commande.",
    },
    {
      question: "Quel est le délai de livraison ?",
      answer: "Le délai de livraison varie entre 24h et 72h selon votre localisation en Côte d'Ivoire.",
    },
    {
      question: "Acceptez-vous les retours ?",
      answer: "Oui, nous acceptons les retours sous certaines conditions. Le produit doit être non ouvert et retourné dans son emballage d'origine sous 14 jours.",
    },
    {
      question: "Vos produits conviennent-ils à tous les types de peau ?",
      answer: "Nous proposons une gamme variée de produits adaptés à différents types de peau. Chaque produit est clairement étiqueté avec les indications sur le type de peau auquel il convient le mieux.",
    },
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
  ];

  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
<<<<<<< HEAD
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">Questions Fréquemment Posées (FAQ)</h1>
          <p className="text-nivea-dark max-w-2xl mx-auto">
            Trouvez ici les réponses aux questions les plus courantes sur nos produits et services.
=======
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">Questions Fréquentes</h1>
          <p className="text-nivea-dark max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions les plus courantes sur nos produits et services.
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
=======
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          ))}
        </motion.div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default FAQ;
=======
export default FAQ;
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
