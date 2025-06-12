import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { useState } from 'react'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };    const products = [
    {
      id: 1,
      name: 'Crème de Visage',
      description: 'Formule exclusive à double action antiseptique',
      image: './products/visage/visage1.png',
      category: 'face'
    },
    {
      id: 2,
      name: 'Gel Douche Gommant',
      description: 'Soin clarifiant aux extraits de carotte',
      image: './Fond/geldouchegommant.png',
      category: 'body'
    },
    {
      id: 3,
      name: 'Lait de beauté',
      description: 'Pour la bonne santé de la peau',
      image: './products/visage/visage2.png',
      category: 'face'
    },
  ]

  return (
    <div>
      {/* Hero Section with Carousel */}
      <Carousel />

      {/* Products Section */}
      <section className="section bg-nivea-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-nivea-dark">Nos Produits</h2>
            <p className="text-nivea-dark max-w-2xl mx-auto">
              Des produits de qualité pour prendre soin de votre peau au quotidien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => openModal(product.image)}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to={`/products#${product.category}`}
                    className="text-nivea-blue hover:text-nivea-light-blue"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-nivea-dark">À propos de nous</h2>
              <p className="text-nivea-dark mb-4">
                Depuis plus de 5 ans, nous nous engageons à créer des produits
                de soin de qualité pour toute la famille.
              </p>
              <p className="text-nivea-dark mb-6">
                Notre mission est de vous offrir des solutions efficaces et
                accessibles pour prendre soin de votre peau au quotidien.
              </p>
              <Link
                to="/about"
                className="btn btn-primary"
              >
                En savoir plus
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="./logo/acos.png"
                alt="À propos"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
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
  )
}

export default Home