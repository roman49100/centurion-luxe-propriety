import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    wrong: 'Gérer vous-même',
    right: 'Nous confier la gestion',
    wrongPoints: [
      'Temps perdu chaque semaine',
      'Stress des imprévus',
      'Revenus non optimisés',
      'Expérience client moyenne',
    ],
    rightPoints: [
      'Zéro temps investi',
      'Problèmes résolus sans vous',
      'Revenus maximisés',
      'Service 5 étoiles garanti',
    ],
  },
];

export function WhyNotManageYourself() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Pourquoi perdre du temps à{' '}
            <span className="text-red-500">gérer vous-même</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez mieux à faire que de répondre aux messages à 23h, gérer les clés et coordonner les femmes de ménage.
          </p>
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* WRONG WAY */}
            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="text-red-500" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Gestion Solo</h3>
                </div>

                <div className="space-y-4">
                  {comparisons[0].wrongPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X className="text-red-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-red-200">
                  <p className="text-sm text-gray-600 italic">
                    Résultat : vous êtes épuisé, vos revenus stagnent, et vous ne profitez pas de votre investissement.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT WAY */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Check className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold">Gestion Centurion</h3>
                </div>

                <div className="space-y-4">
                  {comparisons[0].rightPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="text-emerald-200 mt-1 flex-shrink-0" size={18} />
                      <span className="text-white">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-emerald-50 italic font-medium">
                    Résultat : vous encaissez vos revenus, vous dormez tranquille, et vous vivez votre vie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl p-10 text-white text-center">
            <h3 className="text-3xl mb-6">
              Soyons honnêtes.
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Gérer une location courte durée demande <span className="text-emerald-400 font-semibold">10-15h par semaine</span>. 
              Vous avez le temps ? Vous avez l'expertise ? Vous avez l'équipe ?
            </p>
            <p className="text-2xl text-white font-semibold mb-8">
              Nous, oui. C'est notre métier.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 text-white px-10 py-4 rounded-full hover:bg-emerald-600 transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              Arrêter de perdre du temps
            </button>
          </div>
        </motion.div>

        {/* Objections killer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-2xl mb-6 text-gray-900 text-center">Les questions que vous vous posez :</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl">💭</div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">"Et si je perds le contrôle ?"</p>
                  <p className="text-gray-600 text-sm">→ Vous recevez un rapport complet chaque mois. Vous savez tout, sans rien gérer.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl">💭</div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">"Et si mes revenus baissent ?"</p>
                  <p className="text-gray-600 text-sm">→ Notre méthode augmente vos revenus de 20-35% en moyenne. Chiffres vérifiables.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl">💭</div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">"Et si ça ne marche pas ?"</p>
                  <p className="text-gray-600 text-sm">→ Nous gérons 171+ biens actifs. La méthode fonctionne. Les résultats sont là.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-900 text-lg font-semibold mb-4">
                La vraie question n'est pas "et si ça marche pas" ?
              </p>
              <p className="text-emerald-600 text-xl font-bold">
                C'est : "Combien je perds chaque mois à ne pas le faire ?"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
