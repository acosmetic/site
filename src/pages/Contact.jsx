import { motion } from 'framer-motion'
<<<<<<< HEAD
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

import { useState, useRef } from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm("movdjrqe")
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  // Debug: wrap handleSubmit to log
  const handleSubmitWithLog = async (e) => {
    console.log('Form submit button clicked');
    await handleSubmit(e);
    if (formRef.current && state.succeeded === false) {
      // If failed, do not show success
      return;
    }
    if (formRef.current && state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      // Reset form fields
      formRef.current.reset();
    }
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
  }

  const contactInfo = [
    {
<<<<<<< HEAD
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Adresse',
      content: (
        <a href="https://g.co/kgs/HmsY7VE" target="_blank" rel="noopener noreferrer" className="text-nivea-blue underline hover:text-nivea-light-blue">
          8VVX+4GQ, S 95, Abidjan
        </a>
      ),
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Téléphone',
      content: '+225 0503518454 / +225 0171636140',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      content: 'acosmetic.es@gmail.com',
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
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
<<<<<<< HEAD
            Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à
            nous contacter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <div key={info.title} className="flex items-start space-x-4">
                <div className="text-nivea-blue">{info.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-nivea-dark">{info.title}</h3>
                  <p className="text-nivea-dark">{info.content}</p>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-nivea-dark">Horaires d'ouverture</h3>
              <p className="text-nivea-dark">
                Lundi - Samedi: 8h00 - 17h00
                <br />
                Dimanche: Fermé
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            {showSuccess ? (
              <p className="text-green-600 text-center text-lg font-semibold">Merci pour votre message !</p>
            ) : (
            <form ref={formRef} onSubmit={handleSubmitWithLog} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-nivea-dark mb-1">
                  Nom complet
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nivea-blue text-nivea-dark placeholder-gray-400"
                  required
                />
                <ValidationError prefix="Nom" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-nivea-dark mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nivea-blue text-nivea-dark placeholder-gray-400"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-nivea-dark mb-1">
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nivea-blue text-nivea-dark placeholder-gray-400"
                  required
                />
                <ValidationError prefix="Sujet" field="subject" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nivea-dark mb-1">
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
<<<<<<< HEAD
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-nivea-blue text-nivea-dark placeholder-gray-400"
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary"
                disabled={state.submitting}
                onClick={() => console.log('Submit button pressed')}
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
              >
                Envoyer le message
              </button>
            </form>
<<<<<<< HEAD
            )}
=======
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
>>>>>>> d9679c3a17d90ef7f567d3ee229144b55775a041
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact