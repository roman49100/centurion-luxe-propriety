import { motion } from 'motion/react';
import { Shield, Smile, Package, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Fiabilité',
    description: 'Comptez sur nous pour un service constant et professionnel qui ne vous décevra jamais.',
  },
  {
    icon: Smile,
    title: 'Simplicité',
    description: 'Nous gérons toute la complexité pour que vous puissiez profiter d\'une propriété sans tracas.',
  },
  {
    icon: Package,
    title: 'Service Complet',
    description: 'Tout ce dont vous avez besoin sous un même toit. Pas besoin de coordonner plusieurs prestataires.',
  },
  {
    icon: Heart,
    title: 'Tranquillité d\'Esprit',
    description: 'Conçu pour les propriétaires qui veulent zéro tracas et un maximum de retour sur investissement.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Pourquoi Nous <span className="text-emerald-500">Choisir</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes plus qu'un service – nous sommes votre partenaire de confiance pour la réussite de votre propriété
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <reason.icon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl mb-4">
            Prêt à Transformer Votre Expérience Locative ?
          </h3>
          <p className="text-xl mb-8 text-emerald-50">
            Rejoignez des centaines de propriétaires qui nous font confiance pour leurs investissements
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg"
          >
            Étudier votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
}