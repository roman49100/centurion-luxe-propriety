import { motion } from 'motion/react';
import { Calendar, Users, Home, TrendingUp, Settings, CheckCircle2, AlertCircle } from 'lucide-react';

const timeline = [
  {
    day: 'Jour 1-3',
    title: 'Prise en main complète',
    icon: Home,
    actions: [
      { who: 'Responsable Opérations', what: 'Visite du bien et audit complet' },
      { who: 'Équipe Photo', what: 'Shooting professionnel (40+ photos)' },
      { who: 'Responsable Commercial', what: 'Signature du mandat et remise des clés' },
    ],
    result: 'Votre bien est sous notre contrôle opérationnel',
  },
  {
    day: 'Jour 4-7',
    title: 'Mise en ligne & activation',
    icon: Settings,
    actions: [
      { who: 'Marketing & Leads', what: 'Création annonces Airbnb + Booking.com' },
      { who: 'Responsable Opérations', what: 'Installation équipements (serrure connectée, stock linge)' },
      { who: 'Équipe Commerciale', what: 'Calibrage tarifaire et stratégie pricing' },
    ],
    result: 'Votre bien est en ligne et prêt à recevoir',
  },
  {
    day: 'Jour 8-15',
    title: 'Premières réservations',
    icon: Calendar,
    actions: [
      { who: 'Closeuse', what: 'Gestion des demandes et confirmations' },
      { who: 'Responsable Opérations', what: 'Coordination du premier check-in' },
      { who: 'Équipe Nettoyage', what: 'Premier ménage post-séjour et validation' },
    ],
    result: 'Les premiers revenus arrivent sur votre compte',
  },
  {
    day: 'Jour 16-30',
    title: 'Optimisation & rodage',
    icon: TrendingUp,
    actions: [
      { who: 'Marketing & Leads', what: 'Ajustement annonces selon premiers retours' },
      { who: 'Responsable Commercial', what: 'Analyse de performance et recommandations' },
      { who: 'Responsable Opérations', what: 'Rapport d\'incident et plan d\'action préventif' },
    ],
    result: 'Votre bien atteint son rythme de croisière',
  },
];

export function First30Days() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar size={16} />
            Vos 30 Premiers Jours
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Voici exactement ce qui se passe{' '}
            <span className="text-emerald-500">après votre signature</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pas de flou. Pas d'attente. Chaque action, chaque responsable, chaque résultat. 
            Vous savez toujours qui fait quoi, et quand.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {timeline.map((phase, index) => (
            <motion.div
              key={phase.day}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-[31px] top-[80px] w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-emerald-500 to-emerald-300 hidden md:block" />
              )}

              <div className="bg-gray-50 rounded-2xl p-8 md:pl-24 relative border-2 border-gray-100 hover:border-emerald-500 transition-all group">
                {/* Icon Badge */}
                <div className="absolute left-8 top-8 w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <phase.icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <div className="md:pl-0">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-2">
                      {phase.day}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 mb-6">
                    {phase.actions.map((action, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Users className="text-emerald-500 mt-1 flex-shrink-0" size={18} />
                        <div>
                          <span className="font-semibold text-gray-900">{action.who}</span>
                          <span className="text-gray-600"> → {action.what}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="bg-white rounded-xl p-4 border border-emerald-200">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-500 mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mb-1">
                          Résultat
                        </div>
                        <div className="text-gray-900 font-medium">{phase.result}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - What happens if problems */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Et si un problème survient ?</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Chaque problème est assigné en moins de 2h. Chaque incident est résolu dans les 24h. 
                  Vous êtes informé, pas impliqué.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-emerald-400 font-bold text-2xl mb-2">&lt;2h</div>
                <div className="text-gray-300 text-sm">Attribution du problème à un responsable</div>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-emerald-400 font-bold text-2xl mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Ligne d'urgence opérationnelle</div>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="text-emerald-400 font-bold text-2xl mb-2">100%</div>
                <div className="text-gray-300 text-sm">Traçabilité et reporting</div>
              </div>
            </div>

            <p className="text-center text-gray-400 italic">
              Vous ne gérez pas les problèmes. Vous recevez les rapports de résolution.
            </p>
          </div>
        </motion.div>

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
            className="bg-emerald-500 text-white px-10 py-4 rounded-full hover:bg-emerald-600 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Lancer le processus maintenant
          </button>
        </motion.div>
      </div>
    </section>
  );
}
