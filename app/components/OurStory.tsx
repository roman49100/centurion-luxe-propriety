import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function OurStory() {
  return (
    <section id="notre-histoire" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Qui sommes-nous ?
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 font-light">
            Notre <span className="font-semibold text-emerald-500">Histoire</span>
          </h2>
        </motion.div>

        {/* Contenu principal */}
        <div className="max-w-5xl mx-auto">
          {/* Grande image hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-96 rounded-3xl overflow-hidden mb-20 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"
              alt="Immobilier de luxe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-2xl md:text-3xl font-light">
                Une nouvelle génération de conciergerie immobilière
              </p>
            </div>
          </motion.div>

          {/* Texte en colonnes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-700 text-lg leading-relaxed"
          >
            <p className="text-xl md:text-2xl text-gray-900 font-light border-l-4 border-emerald-500 pl-6">
              Nous sommes deux chefs d'entreprise issus d'une famille ancrée dans l'immobilier.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p>
                  Depuis toujours, nous avons grandi avec cette culture : la gestion de biens, la relation propriétaire-locataire, et surtout l'exigence de faire les choses correctement.
                </p>
                <p>
                  Avant de lancer Centurion Luxe Propriety, nous avons créé et développé une conciergerie à Paris, orientée clients professionnels et investisseurs.
                </p>
                <p>
                  Cette première expérience nous a permis de comprendre ce que recherchent vraiment les propriétaires aujourd'hui : <strong className="text-emerald-600">de la clarté, de la réactivité et une gestion sans stress</strong>.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Avec le temps, on s'est rendu compte que beaucoup de services se contentaient du minimum. Nous, on voulait aller plus loin.
                </p>
                <p>
                  Proposer une gestion complète, pensée pour optimiser le quotidien des propriétaires, mais aussi la rentabilité de leurs biens, tout en gardant un niveau de service haut de gamme.
                </p>
                <p>
                  Un projet construit sur l'expérience du terrain, une vision entrepreneuriale moderne et une vraie volonté de faire mieux que l'existant.
                </p>
              </div>
            </div>

            {/* Phrase centrale */}
            <p className="text-3xl md:text-4xl text-center text-gray-900 font-light my-12">
              C'est comme ça qu'est né <span className="font-semibold text-emerald-500">Centurion Luxe Propriety</span>.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p>
                  Aujourd'hui, nous accompagnons nos clients de A à Z, avec une approche simple : <strong className="text-emerald-600">tout gérer pour qu'ils n'aient rien à gérer</strong>.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Chaque bien est suivi avec sérieux, chaque décision est prise dans l'intérêt du propriétaire, et chaque détail compte.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 text-white p-10 rounded-3xl mt-12"
            >
              <p className="text-2xl md:text-3xl font-light text-center">
                Une nouvelle génération de conciergerie :<br />
                <span className="text-emerald-400 font-semibold">plus structurée, plus efficace, et tournée vers l'excellence.</span>
              </p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => {
                const element = document.getElementById('team');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 text-white px-12 py-5 rounded-full text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
            >
              Rencontrer Notre Équipe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}