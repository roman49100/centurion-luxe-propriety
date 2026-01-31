import { motion } from 'motion/react';
import { Search, Settings, TrendingUp, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Analyse du bien',
    description: 'Nous évaluons le potentiel de votre bien et définissons la stratégie optimale de location courte durée.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Mise en place de la gestion',
    description: 'Création des annonces, optimisation tarifaire, configuration des canaux de diffusion et mise en conformité.',
    icon: Settings,
  },
  {
    number: '03',
    title: 'Suivi quotidien & optimisation',
    description: 'Gestion complète des réservations, accueil des voyageurs, entretien et maintenance proactive.',
    icon: TrendingUp,
  },
  {
    number: '04',
    title: 'Reporting & tranquillité',
    description: 'Suivi financier transparent, analyses de performance et versement mensuel de vos revenus.',
    icon: FileText,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Comment <span className="text-emerald-500">ça marche</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent, de l'analyse à la rentabilité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Ligne de connexion (desktop uniquement) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-100 z-0" />
              )}

              <div className="relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all group z-10">
                {/* Numéro de l'étape */}
                <div className="text-6xl font-bold text-emerald-100 mb-4 group-hover:text-emerald-200 transition-colors">
                  {step.number}
                </div>

                {/* Icône */}
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <step.icon className="text-white" size={28} />
                </div>

                {/* Titre */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-emerald-500 text-white px-10 py-4 rounded-full hover:bg-emerald-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl"
          >
            Échanger sur votre bien
          </button>
        </motion.div>
      </div>
    </section>
  );
}
