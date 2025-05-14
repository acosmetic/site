import { motion } from 'framer-motion'

const About = () => {
  const values = [
    {
      title: 'Qualité',
      description: 'Nous nous engageons à offrir des produits de la plus haute qualité.',
      icon: '✨',
    },
    {
      title: 'Innovation',
      description: 'Nous développons constamment de nouvelles formules pour répondre aux besoins de votre peau.',
      icon: '🔬',
    },
    {
      title: 'Durabilité',
      description: 'Nous nous efforçons de réduire notre impact environnemental à chaque étape.',
      icon: '🌱',
    },
    {
      title: 'Accessibilité',
      description: 'Nous croyons que les soins de qualité devraient être accessibles à tous.',
      icon: '🤝',
    },
  ]

  return (
    <div className="section bg-white">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-nivea-dark">À propos de nous</h1>
          <p className="text-nivea-dark max-w-3xl mx-auto">
            Depuis plus de 10 ans, nous nous engageons à créer des produits de soin
            de qualité pour toute la famille.
          </p>
        </motion.div>

        {/* History Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-nivea-dark">Notre histoire</h2>
            <p className="text-nivea-dark mb-4">
              Fondée en 2019, notre entreprise a commencé avec une simple crème
              hydratante qui a révolutionné les soins de la peau. Depuis lors,
              nous n'avons cessé d'innover et de développer de nouveaux produits
              pour répondre aux besoins changeants de nos clients.
            </p>
            <p className="text-nivea-dark">
              Aujourd'hui, nous sommes présents sur tout le territoire ivoirien et continuons
              à nous engager en faveur de la qualité, de l'innovation et du
              développement durable.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/history-image.jpg"
              alt="Notre histoire"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-nivea-dark">Nos valeurs</h2>
            <p className="text-nivea-dark max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et décisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-nivea-dark">{value.title}</h3>
                <p className="text-nivea-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-nivea-dark">Notre équipe</h2>
            <p className="text-nivea-dark max-w-2xl mx-auto">
              Une équipe passionnée dédiée à l'innovation et à l'excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={`/team/member-${member}.jpg`}
                  alt={`Membre de l'équipe ${member}`}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-nivea-dark">Nom du membre</h3>
                <p className="text-nivea-dark">Poste</p>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default About