import { motion } from 'motion/react';
import { CheckCircle2, Shield, Clock, TrendingUp } from 'lucide-react';

export function OurMethod() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Shield size={16} />
            Notre Méthode
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Nous savons ce que nous faisons.{' '}
            <span className="text-emerald-400">Voilà comment.</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pas de discours marketing. Juste des faits, des chiffres, et une méthode rodée sur des centaines de biens.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">171+</div>
            <div className="text-gray-400">Clients actifs</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-400">Taux d'occupation</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">&lt;2h</div>
            <div className="text-gray-400">Temps de réponse</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-400">Transparence financière</div>
          </motion.div>
        </div>

        {/* Method Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
              <CheckCircle2 className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Systèmes éprouvés</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Chaque processus est documenté, testé et optimisé. Zéro improvisation. Zéro surprise.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Checklist de mise en ligne (47 points)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Protocole d'accueil automatisé</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Procédure d'urgence 24/7</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
              <Clock className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Anticipation active</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous ne gérons pas les problèmes. Nous les évitons avant qu'ils n'arrivent.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Maintenance préventive programmée</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Détection des anomalies avant incident</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Stock de dépannage sur place</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5">
              <TrendingUp className="text-emerald-400" size={28} />
            </div>
            <h3 className="text-2xl mb-4">Optimisation continue</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Votre rentabilité n'est pas statique. Nous l'améliorons chaque mois, systématiquement.
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Ajustement tarifaire hebdomadaire</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Tests A/B sur annonces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Benchmark concurrentiel mensuel</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-8">
            <p className="text-xl md:text-2xl text-white mb-6">
              <span className="font-semibold text-emerald-400">Cette méthode n'est pas négociable.</span><br />
              C'est elle qui garantit vos résultats. C'est elle qui fait notre réputation.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 text-white px-10 py-4 rounded-full hover:bg-emerald-600 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Voir si votre bien est éligible
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
