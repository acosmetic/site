import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Produits',
      links: [
        { name: 'Soins du visage', path: '/products#face' },
        { name: 'Soins du corps', path: '/products#body' },
      ],
    },
    {
      title: 'À propos',
      links: [
        { name: 'Notre histoire', path: '/about#history' },
        { name: 'Nos valeurs', path: '/about#values' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-nivea-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social */}
          <div className="space-y-4">
            <img src="./logo/icone2.png" alt="A-COSMETIC Logo" className="h-12 w-auto" />
            <p className="text-gray-300">
              Des soins de la peau de qualité depuis plus de 5 ans.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100092003598461" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/acosmetic_sarl/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 A-COSMETIC. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/terms-of-use"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Conditions d'utilisation
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer