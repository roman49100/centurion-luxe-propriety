import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Comment démarrer avec Centurion Luxe Propriety ?",
    answer: "C'est très simple ! Prenez contact via notre formulaire ou par téléphone. Nous organisons une visite de votre bien pour évaluer son potentiel et définir la stratégie tarifaire optimale. Ensuite, nous créons vos annonces sur les meilleures plateformes (Airbnb, Booking.com, etc.), réalisons un shooting photo professionnel, et lançons votre bien. Vous commencez à recevoir des réservations sous 7 à 14 jours."
  },
  {
    question: "Quelle est votre zone d'intervention géographique ?",
    answer: "Nous intervenons actuellement à Paris, Nantes et Angers pour nos services complets de conciergerie. Pour les biens situés dans d'autres villes ou régions françaises, nous proposons des solutions adaptées avec notre réseau de partenaires de confiance. Contactez-nous pour vérifier la disponibilité dans votre secteur et discuter des possibilités d'extension géographique."
  },
  {
    question: "Puis-je résilier le contrat si je ne suis pas satisfait ?",
    answer: "Absolument. Nos contrats incluent une clause de résiliation souple avec un préavis de 1 mois. Aucune pénalité excessive n'est appliquée. Nous clôturons proprement les réservations en cours et vous restituons l'accès complet à vos annonces. Notre objectif est votre satisfaction, pas de vous retenir contre votre gré."
  },
  {
    question: "Que se passe-t-il en cas d'urgence (fuite, panne, etc.) pendant un séjour ?",
    answer: "Nous disposons d'une ligne d'urgence 24h/24 et 7j/7 pour toutes situations critiques pendant les séjours de vos voyageurs. Notre équipe intervient immédiatement ou coordonne l'intervention d'un artisan de notre réseau sous 2h maximum. Nous gérons la communication avec le voyageur et proposons des solutions alternatives si nécessaire (relogement, remboursement partiel, etc.)."
  },
  {
    question: "Êtes-vous assuré et certifié ?",
    answer: "Oui, nous disposons d'une assurance Responsabilité Civile Professionnelle couvrant tous nos actes de gestion. Nous travaillons également avec des assureurs spécialisés en location courte durée pour protéger votre bien contre les dégradations. Tous nos intervenants (ménage, maintenance) sont assurés et vérifiés régulièrement."
  },
  {
    question: "Comment fixez-vous les prix de mes nuitées ?",
    answer: "Nous utilisons un système de tarification dynamique intelligent qui ajuste automatiquement vos prix selon : la saisonnalité, les événements locaux, la demande en temps réel, vos concurrents directs, et le taux d'occupation souhaité. L'objectif : maximiser vos revenus en trouvant le meilleur équilibre entre prix et taux de remplissage. Vous gardez un droit de regard et pouvez définir des prix planchers."
  },
  {
    question: "Vais-je garder le contrôle de mon bien et de mon calendrier ?",
    answer: "Totalement ! Vous pouvez bloquer votre calendrier à tout moment pour usage personnel (via notre plateforme ou un simple appel). Nous vous consultons pour les décisions importantes. Vous recevez des rapports mensuels détaillés et avez accès à un espace en ligne pour suivre vos réservations, revenus, et l'état de votre bien en temps réel. Vous restez maître chez vous !"
  },
  {
    question: "Comment gérez-vous les arrivées et départs des voyageurs ?",
    answer: "Nous gérons l'intégralité du processus : accueil personnalisé ou check-in autonome avec boîte à clés sécurisée, remise des clés, présentation du logement et du quartier, vérification de l'état des lieux à l'arrivée et au départ, collecte des clés, et inspection complète après chaque séjour. Le voyageur reçoit toutes les informations nécessaires (codes WiFi, règles, contacts urgence) via notre livret d'accueil digital."
  },
  {
    question: "Qui s'occupe du ménage et du linge entre chaque voyageur ?",
    answer: "Notre équipe de ménage professionnelle intervient après chaque départ pour un nettoyage complet et approfondi (cuisine, salle de bain, sols, surfaces, etc.). Nous fournissons et gérons le linge de maison (draps, serviettes) en qualité hôtelière, ainsi que les consommables de base (savon, papier toilette, etc.). Tout est impeccable pour chaque nouvel arrivant."
  },
  {
    question: "Comment sélectionnez-vous et gérez-vous les réservations ?",
    answer: "Nous appliquons des filtres de sélection sur les plateformes : vérification d'identité obligatoire, profil complet, avis positifs d'anciens hôtes. Nous validons manuellement chaque réservation suspecte. En cas de problème pendant le séjour (nuisances, non-respect du règlement), nous intervenons immédiatement avec le voyageur et la plateforme pour protéger votre bien et votre réputation."
  },
  {
    question: "Comment puis-je suivre mes revenus et réservations au quotidien ?",
    answer: "Vous recevez un rapport mensuel détaillé (revenus, taux d'occupation, avis clients, interventions, etc.). Nous vous fournissons également un accès à votre espace propriétaire en ligne où vous pouvez consulter en temps réel : calendrier des réservations, revenus du mois, historique des voyageurs, photos d'état des lieux, et factures. Vous pouvez aussi nous joindre par téléphone, email ou WhatsApp à tout moment."
  },
  {
    question: "Y a-t-il des frais cachés ou supplémentaires ?",
    answer: "Non, transparence totale. Nos honoraires sont un pourcentage clair sur vos revenus locatifs (généralement 15-25% selon les services choisis). Les frais de ménage sont facturés aux voyageurs directement. Les éventuels frais de maintenance ou travaux sont validés avec vous au préalable avec devis détaillé. Tout est tracé et justifié, pas de mauvaise surprise."
  },
  {
    question: "Que se passe-t-il en cas de dégradations par un voyageur ?",
    answer: "Nous faisons un état des lieux photographié avant et après chaque séjour. En cas de dégradation, nous documentons tout, contactons immédiatement le voyageur et la plateforme, et lançons une demande d'indemnisation via le système de garantie de la plateforme (jusqu'à 1 000 000€ sur Airbnb). Nous suivons le dossier de A à Z et vous tenons informé à chaque étape."
  },
  {
    question: "Puis-je bloquer mon bien pour y habiter ou recevoir famille/amis ?",
    answer: "Bien sûr ! C'est votre bien. Vous pouvez le bloquer à tout moment pour usage personnel (nous recommandons un préavis de 48h pour éviter de refuser des demandes en cours de confirmation). Il vous suffit de nous prévenir et nous bloquons immédiatement le calendrier sur toutes les plateformes. Vous récupérez vos clés et profitez de votre bien en toute tranquillité."
  },
  {
    question: "Sur quelles plateformes publiez-vous mes annonces ?",
    answer: "Nous publions votre bien sur les meilleures plateformes selon votre secteur et votre cible : Airbnb (leader mondial), Booking.com (clientèle internationale premium), Abritel/VRBO (séjours plus longs), et d'autres selon le besoin. Nous synchronisons automatiquement les calendriers pour éviter les double-réservations. Une seule gestion, plusieurs canaux de réservation pour maximiser votre visibilité et vos revenus."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <HelpCircle size={16} />
            Questions Fréquentes
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-light">
            Vos Questions,{' '}
            <span className="font-semibold text-emerald-500">Nos Réponses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services de conciergerie immobilière premium. 
            Une question spécifique ? Contactez-nous directement !
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="text-emerald-500" size={24} />
                    ) : (
                      <Plus className="text-gray-400" size={24} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-10 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Une autre question ?
            </h3>
            <p className="text-emerald-50 text-lg mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-emerald-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Prendre Contact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}