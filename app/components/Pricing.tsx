import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Nos <span className="text-emerald-500">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des formules claires et transparentes pour maximiser votre rentabilité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <TrendingUp className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">Nuitées Réservées</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notre tarification est basée sur le nombre de nuitées réservées dans votre propriété. 
              Vous ne payez que lorsque vous gagnez.
            </p>
            <div className="text-emerald-600 text-lg">Basé sur la performance</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <DollarSign className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">Frais Transparents</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pas de coûts cachés, pas de surprises. Structure tarifaire claire avec une 
              transparence totale dès le premier jour.
            </p>
            <div className="text-emerald-600 text-lg">Clarté totale</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
              <Target className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-2xl mb-3 text-gray-900">Objectifs Alignés</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Notre succès est lié au vôtre. Nous sommes motivés à maximiser 
              l'occupation et la performance de votre propriété.
            </p>
            <div className="text-emerald-600 text-lg">Approche gagnant-gagnant</div>
          </motion.div>
        </div>

        {/* Removed button section */}
      </div>
    </section>
  );
}