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
            className="mt-4 text-nivea-dark"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
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
  ];

  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">Questions Fréquentes</h1>
          <p className="text-nivea-dark max-w-2xl mx-auto">
            Trouvez rapidement des réponses à vos questions les plus courantes sur nos produits et services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;