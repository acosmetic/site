import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/products' },
    { name: 'À propos', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
<<<<<<< HEAD
          <Link to="/" className="flex items-center">
            <img
              src="/a-cosmetic/logo/acos1.png"
              alt="Acos Logo"
              className="h-12 w-auto hidden md:block"
            />
=======
          <Link to="/" className="flex items-center">            <img              src="/logo/acos.png"
              alt="Acos Logo"
              className="h-12 w-auto hidden md:block"
            />
            <img
              src="./logo/acos.png"
              alt="Acos Logo"
              className="h-10 w-auto md:hidden"
            />
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-nivea-dark hover:text-nivea-blue transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-nivea-dark focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
=======
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
<<<<<<< HEAD

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl py-6 px-6 mt-2 mx-2 border border-nivea-gray transition-all duration-500"
            style={{ boxShadow: '0 8px 32px 0 rgba(0,90,156,0.10)' }}
          >
            <div className="flex flex-col space-y-6">
=======
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-20 bg-white shadow-lg md:hidden"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-semibold text-nivea-dark hover:text-nivea-blue transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-nivea-gray/60 focus:outline-none focus:ring-2 focus:ring-nivea-blue"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
<<<<<<< HEAD
          </motion.div>
        )}
      </div>
=======
          </div>
        </motion.div>
      )}
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
    </motion.nav>
  )
}

export default Navbar