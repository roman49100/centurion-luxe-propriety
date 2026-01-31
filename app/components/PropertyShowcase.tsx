import { motion } from 'motion/react';
import { ArrowRight, Building2, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

const showcaseProperties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    title: 'Appartement Haut de Gamme',
    description: 'Gestion locative complète',
    icon: Home,
    type: 'residential'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    title: 'Résidence Moderne',
    description: 'Conciergerie clé en main',
    icon: Building2,
    type: 'residential'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Bureau Professionnel',
    description: 'Gestion opérationnelle complète',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    title: 'Bien Urbain Premium',
    description: 'Optimisation locative et suivi quotidien',
    icon: Home,
    type: 'residential'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    title: 'Espace de Coworking',
    description: 'Gestion et relation client',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1502672260066-6bc176c62d85?w=800&q=80',
    title: 'Actif Professionnel',
    description: 'Gestion opérationnelle et relation client',
    icon: Briefcase,
    type: 'professional'
  },
];

export function PropertyShowcase() {
  return (
    <section className="py-32 bg-white">
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
            <Building2 size={16} />
            Notre Expertise
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900 font-light">
            Exemples de Biens &{' '}
            <span className="font-semibold text-emerald-500">Standards de Gestion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les types de biens que nous accompagnons au quotidien, avec le même niveau d'excellence et d'attention aux détails.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {showcaseProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  
                  {/* Type badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      property.type === 'professional' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {property.type === 'professional' ? 'Professionnel' : 'Résidentiel'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <property.icon className="text-emerald-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {property.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {property.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/exemples-biens"
            className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
          >
            Voir Tous les Exemples
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 max-w-3xl mx-auto italic">
            Ces biens représentent les standards de gestion et d'accompagnement appliqués par notre équipe. 
            Chaque propriété bénéficie du même niveau d'excellence opérationnelle et de suivi personnalisé.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
