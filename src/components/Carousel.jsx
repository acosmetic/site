import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const slides = [
    {
      id: 1,
      image: '/Fond/visage.svg',
    },
    {
      id: 2,
      image: '/Fond/corps.svg',
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % slides.length
    )
  }

  return (
    <>
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <div className="absolute inset-0">
              <img
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
              <div className="text-center max-w-2xl px-4">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
                  {slides[currentIndex].title}
                </h2>
                <p className="text-sm sm:text-xl mb-4 sm:mb-8">
                  {slides[currentIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-white bg-opacity-30 p-1 sm:p-2 rounded-full text-white z-20 hover:bg-opacity-50 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-white bg-opacity-30 p-1 sm:p-2 rounded-full text-white z-20 hover:bg-opacity-50 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white scale-110' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Bouton Découvrir nos produits pour mobile */}
      <div className="md:hidden w-full flex justify-center py-4 bg-white">
        <Link
          to="/products"
          className="btn btn-primary inline-block text-sm"
        >
          Découvrir nos produits
        </Link>
      </div>
    </>
  )
}

export default Carousel