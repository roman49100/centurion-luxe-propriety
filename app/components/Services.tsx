import { motion } from 'motion/react';
import {
  Home,
  MessageCircle,
  Key,
  Sparkles,
  Wrench,
  Zap,
  FileText,
  CheckCircle,
  PiggyBank,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Gestion Locative Complète',
    description: 'Du check-in au check-out, nous gérons tout pour votre propriété.',
  },
  {
    icon: MessageCircle,
    title: 'Communication Voyageurs',
    description: 'Assistance et support 24/7 pour vos invités tout au long de leur séjour.',
  },
  {
    icon: Key,
    title: 'Gestion des Clés',
    description: 'Solutions pratiques pour un contrôle d\'accès fluide et sécurisé.',
  },
  {
    icon: Sparkles,
    title: 'Ménage & Linge',
    description: 'Coordination professionnelle du ménage et du linge frais après chaque séjour.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Réparations',
    description: 'Résolution rapide des problèmes et entretien régulier de la propriété.',
  },
  {
    icon: Zap,
    title: 'Gestion des Charges',
    description: 'Supervision complète de l\'électricité, du gaz et de l\'eau.',
  },
  {
    icon: PiggyBank,
    title: 'Optimisation des Charges',
    description: 'Réduction et optimisation des coûts d\'électricité, gaz, eau et taxes.',
  },
  {
    icon: FileText,
    title: 'Suivi Administratif',
    description: 'Taxes locales, déclarations et gestion complète de la conformité.',
  },
  {
    icon: CheckCircle,
    title: 'Assurance Qualité',
    description: 'Inspections régulières pour maintenir des standards élevés.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
            Ce Que Vous <span className="text-emerald-500">Obtenez</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pas de menu à la carte. Voici le service complet que chaque propriétaire reçoit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-500 transition-colors">
                <service.icon className="text-emerald-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}