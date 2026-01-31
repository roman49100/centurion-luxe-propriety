import { motion } from 'motion/react';
import { Star, BarChart3, Headphones, TrendingUp } from 'lucide-react';

const premiumServices = [
  {
    icon: Star,
    title: 'Maintenance Renforcée',
    description: 'Réparations prioritaires et améliorations proactives pour maintenir des standards premium.',
  },
  {
    icon: BarChart3,
    title: 'Reporting Avancé',
    description: 'Analyses détaillées et insights sur les performances et revenus de votre propriété.',
  },
  {
    icon: Headphones,
    title: 'Support Propriétaire Personnalisé',
    description: 'Gestionnaire de compte dédié pour toutes vos questions et demandes spéciales.',
  },
  {
    icon: TrendingUp,
    title: 'Optimisation de Performance',
    description: 'Stratégie de prix et marketing pour maximiser le potentiel de revenus locatifs.',
  },
];

export function PremiumServices() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Services <span className="text-emerald-400">Premium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Options supplémentaires pour améliorer votre expérience de gestion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500/30 transition-colors">
                <service.icon className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">Intéressé par les services premium ?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-all text-lg"
          >
            Discuter de votre projet
          </button>
        </motion.div>
      </div>
    </section>
  );
}