import { motion } from 'framer-motion'
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
  }

  const contactInfo = [
    {
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
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
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
              >
                Envoyer le message
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact