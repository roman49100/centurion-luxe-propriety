import { motion } from 'motion/react';
import { Building2, Target, TrendingUp, FileCheck, Settings, Megaphone } from 'lucide-react';

const teamMembers = [
  // DIRECTION
  {
    name: 'Pacheco Roman',
    role: 'Fondateur',
    pole: 'Direction',
    description: 'Vision stratégique, développement de l\'entreprise et croissance.',
    icon: Building2,
  },
  {
    name: 'Raïs Rayan',
    role: 'Directeur',
    pole: 'Direction',
    description: 'Supervision opérationnelle et décisions stratégiques.',
    icon: Target,
  },
  // PÔLE COMMERCIAL
  {
    name: 'Pacheco Flavio',
    role: 'Responsable Commercial',
    pole: 'Pôle Commercial',
    description: 'Pilotage des closeurs, organisation commerciale, suivi performance et qualité relation client.',
    icon: TrendingUp,
  },
  {
    name: 'Simba Samira',
    role: 'Closeuse & Administratif',
    pole: 'Pôle Commercial',
    description: 'Suivi des dossiers, signatures, coordination client et gestion administrative.',
    icon: FileCheck,
  },
  // PÔLE OPÉRATIONS
  {
    name: 'Stroe Jonatoni',
    role: 'Responsable Opérations',
    pole: 'Pôle Opérations',
    description: 'Gestion des biens, coordination prestataires, gestion incidents et qualité d\'exécution.',
    icon: Settings,
  },
  // PÔLE ACQUISITION
  {
    name: 'Koedoe Layane',
    role: 'Responsable Marketing & Leads',
    pole: 'Pôle Acquisition',
    description: 'Stratégie marketing, acquisition de nouveaux biens et génération de leads qualifiés.',
    icon: Megaphone,
  },
];

export function Team() {
  // Grouper les membres par pôle
  const poles = {
    'Direction': teamMembers.filter(m => m.pole === 'Direction'),
    'Pôle Commercial': teamMembers.filter(m => m.pole === 'Pôle Commercial'),
    'Pôle Opérations': teamMembers.filter(m => m.pole === 'Pôle Opérations'),
    'Pôle Acquisition': teamMembers.filter(m => m.pole === 'Pôle Acquisition'),
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Notre <span className="text-emerald-500">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une organisation claire et professionnelle au service de votre réussite
          </p>
        </motion.div>

        {/* Direction */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-900 mb-6 text-center"
          >
            Direction
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {poles['Direction'].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <member.icon className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl mb-2 text-white">{member.name}</h3>
                  <div className="text-emerald-400 mb-4 text-sm uppercase tracking-wider font-semibold">
                    {member.role}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pôles opérationnels */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pôle Commercial */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-emerald-600 mb-6 text-center"
            >
              Pôle Commercial
            </motion.h3>
            <div className="space-y-6">
              {poles['Pôle Commercial'].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <member.icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl mb-1 text-gray-900">{member.name}</h4>
                    <div className="text-emerald-600 mb-3 text-xs uppercase tracking-wider font-semibold">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pôle Opérations */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-emerald-600 mb-6 text-center"
            >
              Pôle Opérations
            </motion.h3>
            <div className="space-y-6">
              {poles['Pôle Opérations'].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <member.icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl mb-1 text-gray-900">{member.name}</h4>
                    <div className="text-emerald-600 mb-3 text-xs uppercase tracking-wider font-semibold">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pôle Acquisition */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-semibold text-emerald-600 mb-6 text-center"
            >
              Pôle Acquisition
            </motion.h3>
            <div className="space-y-6">
              {poles['Pôle Acquisition'].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <member.icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl mb-1 text-gray-900">{member.name}</h4>
                    <div className="text-emerald-600 mb-3 text-xs uppercase tracking-wider font-semibold">
                      {member.role}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl mb-4 text-gray-900">Une équipe structurée et efficace</h3>
            <p className="text-gray-700 mb-6">
              Chaque pôle est piloté par un responsable dédié. Une organisation claire pour des résultats exceptionnels et un service irréprochable.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 text-white px-8 py-3 rounded-full hover:bg-emerald-600 transition-all"
            >
              Échanger sur votre bien
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}