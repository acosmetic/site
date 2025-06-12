import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    // Get the category from the URL hash
    const hash = window.location.hash.slice(1) // Remove the # character
    if (hash && ['face', 'body'].includes(hash)) {
      setSelectedCategory(hash)
    }
  }, [])
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false); // State for image modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image URL

  // Function to open the image modal
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  // Function to close the image modal
  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const categories = [
    { id: 'all', name: 'Tous les produits' },
    { id: 'face', name: 'Soins du visage' },
    { id: 'body', name: 'Soins du corps' },
  ]

  const products = [
    {
      id: 1,
      name: 'Crème Visage',
      description: 'Hydratation intense pour une peau éclatante',
      price: '2.500 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/visage/visage1.png',
=======
      image: './products/visage/visage1.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'face'
    },
    {
      id: 2,
      name: 'Lait de beauté',
      description: 'Nettoyage doux et hydratation',
      price: '3.000 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/visage/visage2.png',
=======
      image: './products/visage/visage2.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'face'
    },
    {
      id: 3,
      name: 'Gel douche traitant',
      description: 'Pour une peau saine et douce',
      price: '1.500 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/visage/visage3.png',
=======
      image: './products/visage/visage3.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'face'
    },
    {
      id: 4,
      name: 'Gel douche mentholé',
      description: 'Sensation de fraîcheur intense',
      price: '3.000 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/corps/corps1.png',
=======
      image: './products/corps/corps1.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'body'
    },
    {
      id: 5,
      name: 'Gel douche médicalé',
      description: 'Soin apaisant pour la peau',
      price: '1.500 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/corps/corps2.png',
=======
      image: './products/corps/corps2.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'body'
    },
    {
      id: 6,
      name: 'Savon de soins',
      description: 'Nettoyage en douceur',
      price: '1.500 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/corps/corps3.png',
=======
      image: './products/corps/corps3.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'body'
    },
    {
      id: 7,
      name: 'Gel Douche Gommant',
      description: 'Exfoliation douce et efficace',
      price: '3.000 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/Fond/geldouchegommant.png',
=======
      image: './Fond/geldouchegommant.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'body'
    },
    {
      id: 8,
      name: 'Serum de soins',
      description: 'Concentré de soins actifs',
      price: '2.500 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/visage/visage4.png',
=======
      image: './products/visage/visage4.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'face'
    },
    {
      id: 9,
      name: 'Gel Ocean',
      description: 'Sensation océanique rafraîchissante',
      price: '3.000 FCFA',
<<<<<<< HEAD
      image: '/a-cosmetic/products/corps/#.png',
=======
      image: './products/corps/corps3.png',
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
      category: 'body'
    }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  const handleOrderClick = () => {
    setShowPhoneNumbers(true)
  }

  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">Nos Produits</h1>
          <p className="text-nivea-dark max-w-2xl mx-auto">
            Découvrez notre gamme complète de produits de soin pour toute la famille.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-nivea-blue text-white'
                  : 'bg-nivea-gray text-nivea-dark hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => openModal(product.image)}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-nivea-dark">{product.name}</h3>
                <p className="text-nivea-dark mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-nivea-blue font-bold">{product.price}</span>
                  <button 
                    onClick={handleOrderClick}
                    className="btn btn-primary"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone Numbers Modal */}
        {showPhoneNumbers && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-nivea-dark">Contactez-nous pour commander</h2>
              <div className="space-y-4">
                <a 
                  href="tel:0707511564" 
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0507064019
                </a>
                <a 
                  href="tel:0747796326" 
                  className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0704363935
                </a>
              </div>
              <button
                onClick={() => setShowPhoneNumbers(false)}
                className="mt-6 w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
            onClick={closeModal} // Close modal on overlay click
          >
            <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside image container */}
              <img
                src={selectedImage}
                alt="Produit en taille réelle"
                className="block max-w-full max-h-[85vh] object-contain rounded"
              />
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 mt-[-15px] mr-[-15px] text-white bg-nivea-dark rounded-full p-1 px-3 text-2xl leading-none hover:bg-nivea-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-nivea-light-blue"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products