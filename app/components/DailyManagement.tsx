import { motion } from 'motion/react';
import { Calendar, Shield, Users } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function DailyManagement() {
  return (
    <section id="daily-management" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
              Gestion Quotidienne,
              <br />
              <span className="text-emerald-500">Zéro Tracas</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Notre service fonctionne tous les jours pour vous offrir une tranquillité d'esprit totale. 
              Nous combinons automatisation et supervision humaine pour garantir que votre propriété 
              est toujours entre de bonnes mains.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Service Quotidien</h3>
                  <p className="text-gray-600">
                    365 jours par an, nous surveillons et gérons votre propriété sans interruption.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Tranquillité d'Esprit Totale</h3>
                  <p className="text-gray-600">
                    Dormez sur vos deux oreilles en sachant que chaque aspect de votre location est géré professionnellement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Automatisation + Touche Humaine</h3>
                  <p className="text-gray-600">
                    L'efficacité de la technologie combinée à une supervision humaine experte pour les meilleurs résultats.
                  </p>
                </div>
              </div>
            </div>

            {/* Removed button */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1635286729762-d3e53c422b43?w=1200&q=80"
                alt="Modern villa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl mb-2">24/7</div>
              <div className="text-lg">Surveillance Active</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}