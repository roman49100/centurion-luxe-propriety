import { motion } from 'motion/react';
import { Building2, Home, Briefcase, Hotel, Store, Users, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useEffect } from 'react';

const allProperties = [
  // Résidentiel
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
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    title: 'Bien Urbain Premium',
    description: 'Optimisation locative et suivi quotidien',
    icon: Home,
    type: 'residential'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjB2aWV3JTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzY5NzkzOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Penthouse de Luxe',
    description: 'Service premium sur-mesure',
    icon: Home,
    type: 'residential'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    title: 'Villa Contemporaine',
    description: 'Gestion complète et entretien',
    icon: Home,
    type: 'residential'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    title: 'Loft Industriel',
    description: 'Gestion locative courte durée',
    icon: Home,
    type: 'residential'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Duplex Moderne',
    description: 'Conciergerie et optimisation',
    icon: Home,
    type: 'residential'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Studio Premium',
    description: 'Gestion automatisée',
    icon: Home,
    type: 'residential'
  },
  
  // Professionnel
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Bureau Professionnel',
    description: 'Gestion opérationnelle complète',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    title: 'Espace de Coworking',
    description: 'Gestion et relation client',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
    title: 'Open Space Corporate',
    description: 'Gestion administrative et technique',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: 'Immeuble de Bureaux',
    description: 'Gestion multi-locataires',
    icon: Building2,
    type: 'professional'
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    title: 'Salle de Réunion Premium',
    description: 'Location flexible et services',
    icon: Users,
    type: 'professional'
  },
  {
    id: 14,
    image: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80',
    title: 'Bureau Privé',
    description: 'Gestion clé en main',
    icon: Briefcase,
    type: 'professional'
  },
  {
    id: 15,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80',
    title: 'Local Commercial',
    description: 'Gestion locative professionnelle',
    icon: Store,
    type: 'professional'
  },
  {
    id: 16,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    title: 'Centre d\'Affaires',
    description: 'Services intégrés et conciergerie',
    icon: Building2,
    type: 'professional'
  },
  {
    id: 17,
    image: 'https://images.unsplash.com/photo-1758800601486-75c3865cc9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBkZXNrJTIwY2l0eSUyMHZpZXclMjB3aW5kb3dzfGVufDF8fHx8MTc2OTc5NDQzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Showroom',
    description: 'Gestion événementielle',
    icon: Store,
    type: 'professional'
  },
  {
    id: 18,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',
    title: 'Studio de Production',
    description: 'Gestion technique et logistique',
    icon: Briefcase,
    type: 'professional'
  },
  
  // Hybride / Hospitality
  {
    id: 19,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    title: 'Résidence Hôtelière',
    description: 'Gestion hôtelière complète',
    icon: Hotel,
    type: 'residential'
  },
  {
    id: 20,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    title: 'Appartement Court Séjour',
    description: 'Gestion opérationnelle professionnelle',
    icon: Home,
    type: 'residential'
  },
];

export function PropertyExamplesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 size={16} />
              Portfolio Complet
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-gray-900 font-light">
              Exemples de Biens &{' '}
              <span className="font-semibold text-emerald-500">Standards de Gestion</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Voici les standards de biens et de gestion que nous appliquons à chaque actif confié.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Du résidentiel haut de gamme aux espaces professionnels, chaque bien bénéficie du même niveau d'excellence opérationnelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium">
                Résidentiel Premium
              </div>
              <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                Espaces Professionnels
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium">
                Gestion Multi-Sites
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {allProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                    
                    {/* Type badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        property.type === 'professional' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-emerald-500 text-white'
                      }`}>
                        {property.type === 'professional' ? 'Pro' : 'Résidentiel'}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-3 left-3">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <property.icon className="text-emerald-600" size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {property.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <div className="bg-white rounded-3xl p-12 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Votre bien mérite cette{' '}
                <span className="font-semibold text-emerald-500">excellence</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Quel que soit le type de propriété, nous appliquons les mêmes standards de qualité et de professionnalisme.
              </p>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 300);
                }}
                className="inline-block bg-emerald-500 text-white px-10 py-5 rounded-full text-lg hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold cursor-pointer"
              >
                Échanger sur votre bien
              </button>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500 max-w-3xl mx-auto italic">
              Ces exemples illustrent les types de biens et les standards de gestion appliqués par Centurion Luxe Propriety. 
              Chaque propriété est unique et bénéficie d'un accompagnement personnalisé adapté à ses spécificités.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}