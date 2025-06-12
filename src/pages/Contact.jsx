import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic here
    console.log(formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      details: ['+225 05 07 06 40 19', '+225 07 04 36 39 35'],
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['contact@acosmetic.ci'],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Adresse',
      details: ['Abidjan, Côte d\'Ivoire'],
    },
  ]

  return (
    <div className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">Contactez-nous</h1>
          <p className="text-nivea-dark max-w-2xl mx-auto">
            Des questions ? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-nivea-dark">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-nivea-dark mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nivea-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-nivea-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nivea-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-nivea-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nivea-blue"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start space-x-4"
              >
                <div className="text-nivea-blue text-2xl mt-1">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-nivea-dark mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-nivea-dark">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact