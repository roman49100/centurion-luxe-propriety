import { motion } from 'motion/react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';

export function FinalPush() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Chaque mois d'attente vous coûte de l'argent.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pendant que vous réfléchissez, votre bien perd en rentabilité. Voici ce que vous perdez en ne passant pas à l'action.
          </p>
        </motion.div>

        {/* Cost Breakdown */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border-2 border-red-200 text-center"
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="text-red-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">500-800€</div>
            <div className="text-gray-700 font-medium mb-2">Par mois perdu</div>
            <div className="text-sm text-gray-600">
              En revenus non optimisés par mauvaise gestion tarifaire
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border-2 border-orange-200 text-center"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-orange-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">10-15h</div>
            <div className="text-gray-700 font-medium mb-2">Par semaine perdue</div>
            <div className="text-sm text-gray-600">
              En temps passé à gérer, coordonner et répondre aux urgences
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border-2 border-yellow-200 text-center"
          >
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-yellow-600" size={32} />
            </div>
            <div className="text-3xl font-bold text-yellow-600 mb-2">Stress</div>
            <div className="text-gray-700 font-medium mb-2">Permanent</div>
            <div className="text-sm text-gray-600">
              Imprévus, réclamations, problèmes techniques à gérer 24/7
            </div>
          </motion.div>
        </div>

        {/* Reality Check Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl mb-4">Faites le calcul.</h3>
              <p className="text-xl text-gray-300 mb-6">
                6 mois de gestion inefficace = <span className="text-red-400 font-bold">3 000 à 5 000€ perdus</span>
              </p>
              <p className="text-lg text-gray-400">
                C'est l'équivalent de notre commission pour une année complète de gestion optimisée.
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 mb-8">
              <p className="text-center text-lg text-emerald-400 font-semibold">
                ⏰ Le meilleur moment pour optimiser votre gestion ? C'était il y a 6 mois.<br />
                Le deuxième meilleur moment ? <span className="text-white">Aujourd'hui.</span>
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-500 text-white px-12 py-5 rounded-full hover:bg-emerald-600 transition-all text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Arrêter de perdre de l'argent maintenant
              </button>
              <p className="text-gray-400 text-sm mt-4">
                Réponse sous 48h • Étude gratuite • Sans engagement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
