import { motion } from 'motion/react';
import { TrendingUp, DollarSign, PiggyBank, Target } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Maximisation des Revenus',
    description: 'Nous optimisons vos tarifs et votre taux d\'occupation pour augmenter vos revenus.',
  },
  {
    icon: PiggyBank,
    title: 'Réduction des Charges',
    description: 'Pas de dépenses inutiles. Nous négocions et optimisons toutes vos charges.',
  },
  {
    icon: DollarSign,
    title: 'Rentabilité Nette Optimisée',
    description: 'Chaque euro compte. Nous maximisons ce qui vous reste en poche.',
  },
  {
    icon: Target,
    title: 'Vision Long Terme',
    description: 'Nous pensons comme un propriétaire : pérennité et valorisation de votre bien.',
  },
];

export function Profitability() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl mb-6 text-white">
            Voici vos revenus.{' '}
            <span className="text-emerald-400">Garantis et optimisés.</span>
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Vous ne perdez plus d'argent avec une gestion approximative. 
            Vous maximisez chaque euro possible avec notre méthode rodée.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 mx-auto border border-white/20">
                <benefit.icon size={36} />
              </div>
              <h3 className="text-xl mb-3 font-semibold">{benefit.title}</h3>
              <p className="opacity-90 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl mb-2">✓</div>
              <h4 className="text-lg mb-2 font-semibold">Optimisation des Charges</h4>
              <p className="text-sm opacity-90">Électricité, gaz, eau, taxes : tout est négocié</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">✓</div>
              <h4 className="text-lg mb-2 font-semibold">Zéro Dépense Inutile</h4>
              <p className="text-sm opacity-90">Chaque prestation est justifiée et contrôlée</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl mb-2">✓</div>
              <h4 className="text-lg mb-2 font-semibold">Vision Propriétaire</h4>
              <p className="text-sm opacity-90">Nous pensons investissement, pas juste gestion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-emerald-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Échanger sur votre bien
          </button>
        </motion.div>
      </div>
    </section>
  );
}