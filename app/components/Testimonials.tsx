import { motion } from 'motion/react';
import { Star, Quote, ArrowLeft, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

const testimonials = [
  {
    name: "Sophie Durand",
    location: "Paris 11ème",
    property: "Appartement 2 pièces",
    rating: 5,
    type: "Propriétaire",
    text: "J'avais des doutes sur la location courte durée, mais Centurion Luxe a complètement transformé mon appartement en machine à revenus ! En 6 mois, j'ai généré 40% de plus qu'en location classique. L'équipe gère tout de A à Z, je n'ai jamais eu à intervenir. Les rapports mensuels sont ultra-détaillés et je peux suivre mes revenus en temps réel. Un vrai service premium !",
    revenue: "+2 400€/mois"
  },
  {
    name: "Marc Lefevre",
    location: "Nantes Centre",
    property: "Studio",
    rating: 5,
    type: "Propriétaire",
    text: "Après 3 mois de galère à gérer moi-même mon Airbnb, j'ai fait appel à Centurion Luxe. Quelle différence ! Ils ont optimisé mes tarifs, refait mes photos, et le taux d'occupation est passé de 60% à 85%. Les voyageurs laissent toujours d'excellents avis grâce à l'accueil et au ménage impeccables. Je recommande à 200% !",
    revenue: "+1 100€/mois"
  },
  {
    name: "Isabelle Moreau",
    location: "Paris 17ème",
    property: "Appartement 3 pièces",
    rating: 5,
    type: "Propriétaire Expatriée",
    text: "Propriétaire depuis 2 ans mais expatriée à Londres pour le travail. Centurion Luxe gère mon bien comme si c'était le leur. J'ai eu une fuite d'eau un dimanche soir : intervention en 1h30, plombier sur place, voyageur relocalisé, tout réglé avant même que je sois au courant ! Réactivité incroyable. Je dors sur mes deux oreilles.",
    revenue: "+3 200€/mois"
  },
  {
    name: "Jean-Philippe Martin",
    location: "Paris 8ème",
    property: "Appartement haussmannien 120m²",
    rating: 5,
    type: "Investisseur",
    text: "J'ai un portefeuille de 4 appartements en location courte durée avec Centurion Luxe. Leur professionnalisme et leur transparence sont exemplaires. Les tableaux de bord me permettent de piloter mes investissements en temps réel. Mon ROI moyen est de 8,5% par an. C'est largement au-dessus de mes attentes initiales !",
    revenue: "+5 800€/mois"
  },
  {
    name: "Thomas Bertrand",
    location: "Nantes Quartier Doulon",
    property: "Maison 4 chambres",
    rating: 5,
    type: "Propriétaire",
    text: "Ma maison était vide 6 mois par an. Centurion Luxe m'a proposé une stratégie mixte : location courte durée pendant les périodes touristiques et blocage pour ma famille l'été. Résultat : 18 000€ de revenus supplémentaires sur l'année sans sacrifier mes vacances ! L'équipe est disponible, professionnelle, et très transparente sur les chiffres.",
    revenue: "+1 500€/mois"
  },
  {
    name: "Caroline & Julien",
    location: "Paris 9ème",
    property: "Loft 80m²",
    rating: 5,
    type: "Jeunes Investisseurs",
    text: "Nous avons investi dans un loft pour le louer en Airbnb mais on n'y connaissait rien. Centurion Luxe nous a accompagné dès le premier jour : shooting photo pro, annonces multilingues, tarification dynamique, gestion des voyageurs... En 8 mois, on a rentabilisé 30% de notre investissement. C'est du sérieux et ça se voit dans les résultats !",
    revenue: "+2 900€/mois"
  },
  {
    name: "Éric Fontaine",
    location: "Nantes",
    property: "Appartement 1 pièce",
    rating: 5,
    type: "Propriétaire",
    text: "J'étais sceptique sur les commissions, mais honnêtement ils valent chaque euro ! Mon studio était loué 550€/mois en bail classique. Avec Centurion Luxe, je génère entre 1 200€ et 1 500€/mois en courte durée. Même après leur commission, je gagne 2x plus. Et surtout : zéro gestion, zéro stress, zéro impayé. Je regrette juste de ne pas avoir commencé plus tôt !",
    revenue: "+700€/mois"
  },
  {
    name: "Marie Blanchard",
    location: "Paris 15ème",
    property: "Duplex 95m²",
    rating: 5,
    type: "Investisseuse",
    text: "En tant qu'investisseuse dans l'immobilier, j'ai testé plusieurs conciergeries. Centurion Luxe se démarque par leur approche data-driven : analyses de marché poussées, optimisation tarifaire algorithmique, reporting mensuel exhaustif. Mes 3 biens affichent un taux d'occupation moyen de 88%. Performance au rendez-vous !",
    revenue: "+4 100€/mois"
  },
  {
    name: "Patrick Rousseau",
    location: "Nantes Quartier Bouffay",
    property: "Appartement atypique 55m²",
    rating: 5,
    type: "Propriétaire",
    text: "Mon appartement dans une ruelle historique était difficile à valoriser. L'équipe de Centurion a su mettre en avant son charme unique : photos sublimes, description poétique, prix premium justifié. Résultat : réservations en continu, voyageurs ravis, et des revenus que je n'osais même pas espérer. Bravo pour cette expertise marketing !",
    revenue: "+1 650€/mois"
  },
  {
    name: "Laurent & Stéphanie Duval",
    location: "Paris 18ème - Montmartre",
    property: "Studio avec vue",
    rating: 5,
    type: "Propriétaires Retraités",
    text: "À la retraite, nous cherchions un complément de revenus sans tracas. Centurion Luxe s'occupe de tout pour notre studio : accueil, ménage, maintenance, même les draps et serviettes ! Nous recevons notre virement chaque mois comme une horloge. Simple, efficace, rentable. C'est exactement ce qu'il nous fallait.",
    revenue: "+950€/mois"
  },
  {
    name: "Alexandre Mercier",
    location: "Nantes Centre-Ville",
    property: "T2 rénové",
    rating: 5,
    type: "Investisseur Débutant",
    text: "Premier investissement locatif de ma vie et je suis tombé sur la bonne équipe ! Centurion m'a conseillé sur l'achat, accompagné sur les travaux, et géré la mise en location. 6 mois après, mon bien tourne à 92% d'occupation. Je ne m'occupe de rien et je touche mes loyers. Le rêve pour un investisseur débutant !",
    revenue: "+1 280€/mois"
  },
  {
    name: "Nathalie Girard",
    location: "Paris 5ème - Quartier Latin",
    property: "Chambre de bonne rénovée",
    rating: 5,
    type: "Propriétaire",
    text: "Ma petite chambre de 18m² ne trouvait pas preneur en location classique. Centurion Luxe a transformé ce 'défaut' en atout : 'studio cosy pour voyageur solo au cœur de Paris'. Optimisation maximale, photos canon, et maintenant je loue 28 nuits par mois à 65€/nuit ! Incroyable ce qu'un bon positionnement peut faire.",
    revenue: "+820€/mois"
  },
  {
    name: "François Lemoine",
    location: "Nantes Île de Nantes",
    property: "Loft industriel 110m²",
    rating: 5,
    type: "Investisseur Professionnel",
    text: "Avec 7 biens en gestion chez Centurion Luxe, je peux affirmer que c'est la meilleure conciergerie du marché. Interface de gestion ultra-pro, équipe réactive 7j/7, optimisation fiscale incluse, et surtout des résultats financiers qui surpassent mes prévisions. Mon cashflow mensuel a augmenté de 35% depuis que je travaille avec eux.",
    revenue: "+6 200€/mois"
  },
  {
    name: "Sandrine & David",
    location: "Paris 12ème - Bercy",
    property: "Appartement familial 75m²",
    rating: 5,
    type: "Propriétaires en Mobilité",
    text: "Mutation professionnelle à Lyon pour 2 ans. Plutôt que de laisser notre appart vide ou risquer une location classique, on a choisi Centurion. Meilleur choix possible ! Appartement toujours nickel, revenus réguliers, et on peut le récupérer quand on veut pour les week-ends à Paris. Flexibilité totale !",
    revenue: "+2 150€/mois"
  },
  {
    name: "Christophe Arnaud",
    location: "Paris 20ème",
    property: "Appartement 2 pièces",
    rating: 5,
    type: "Propriétaire",
    text: "J'avais un locataire qui ne payait plus depuis 4 mois, procédure d'expulsion interminable... Centurion m'a aidé à passer en courte durée après récupération du bien. Fini les impayés, fini les dégradations ! Mes revenus ont doublé et je dors enfin tranquille. Ils ont littéralement sauvé mon investissement.",
    revenue: "+1 850€/mois"
  },
  {
    name: "Véronique Dumas",
    location: "Nantes Quartier Decré",
    property: "T3 avec balcon",
    rating: 5,
    type: "Investisseuse",
    text: "Investissement locatif acheté sur plan. Centurion Luxe m'a accompagnée même avant la livraison : choix des finitions pour maximiser l'attrait Airbnb, décoration optimale, équipement complet. À la remise des clés, mon bien était déjà pré-réservé pour 3 mois ! Accompagnement du début à la fin, vraiment au top.",
    revenue: "+1 720€/mois"
  },
  {
    name: "Olivier & Mathilde",
    location: "Paris 13ème - Bibliothèque",
    property: "T4 en duplex",
    rating: 5,
    type: "Couple Investisseur",
    text: "On voulait investir dans le locatif mais on n'avait ni le temps ni l'envie de gérer. Centurion Luxe nous a proposé une formule tout inclus : recherche du bien, négociation, travaux, ameublement, mise en location. 100% clé en main ! Aujourd'hui notre T4 génère 3 400€/mois et on ne lève pas le petit doigt. Investissement passif réussi !",
    revenue: "+3 400€/mois"
  },
  {
    name: "Amélie Renard",
    location: "Nantes Quartier Graslin",
    property: "Studio design 32m²",
    rating: 5,
    type: "Jeune Propriétaire",
    text: "28 ans, primo-accédante. J'ai acheté un studio mais je vis chez mon copain. Plutôt que de le laisser vide, Centurion le loue en courte durée. Résultat : mon crédit est payé par les locations + il me reste 400€ de cashflow positif ! J'ai un bien qui se valorise et qui me rapporte. Meilleure décision financière de ma vie.",
    revenue: "+1 180€/mois"
  },
  // NOUVEAUX AVIS - Avec Penthouses, Villas, Showrooms, Hôtels, Bureaux
  {
    name: "Pierre Dumont",
    location: "Paris 16ème - Trocadéro",
    property: "Penthouse 200m² avec terrasse",
    rating: 5,
    type: "Propriétaire Luxe",
    text: "Mon penthouse avec vue Tour Eiffel était trop grand pour moi seul. Centurion Luxe l'a positionné comme un bien d'exception pour clientèle internationale premium. Prix moyen : 850€/nuit ! L'équipe gère les conciergerie de luxe, champagne à l'arrivée, chauffeur... Service 5 étoiles qui justifie mes tarifs premium.",
    revenue: "+18 500€/mois"
  },
  {
    name: "Dominique Berthelot",
    location: "Nantes Île Beaulieu",
    property: "Villa contemporaine 250m²",
    rating: 5,
    type: "Propriétaire Villa",
    text: "Villa moderne avec piscine et jardin paysager. Centurion a ciblé les familles aisées et groupes d'amis. Photos drone spectaculaires, visite virtuelle 360°... Louée en moyenne 12 jours/mois à 450€/nuit en haute saison. Pour une résidence secondaire peu utilisée, c'est un complément de revenu extraordinaire !",
    revenue: "+4 800€/mois"
  },
  {
    name: "Société Luxe & Design",
    location: "Paris 8ème - Champs-Élysées",
    property: "Showroom luxe 150m²",
    rating: 5,
    type: "Entreprise",
    text: "Notre showroom était inoccupé 60% du temps. Centurion Luxe l'a transformé en espace événementiel premium : shootings photo, tournages, présentations privées, pop-up stores... Rentabilité multipliée par 3 ! Gestion professionnelle, contrats béton, aucun souci. Parfait pour optimiser nos mètres carrés parisiens.",
    revenue: "+9 200€/mois"
  },
  {
    name: "Hôtel Particulier SCI",
    location: "Paris 7ème - Invalides",
    property: "Hôtel Particulier 8 chambres",
    rating: 5,
    type: "Investisseur Institutionnel",
    text: "Acquisition d'un hôtel particulier du 18ème siècle. Centurion Luxe gère la location exclusive pour événements corporate, tournages cinéma, et séjours VIP. Leur réseau et expertise du marché luxe nous ont permis d'atteindre un taux de rentabilité de 6,8% brut. Partenariat solide et professionnel.",
    revenue: "+32 000€/mois"
  },
  {
    name: "Maxime Girard",
    location: "Nantes Quartier Beaujoire",
    property: "Villa avec piscine 180m²",
    rating: 4,
    type: "Propriétaire",
    text: "Villa familiale louée pendant nos absences. Centurion gère bien mais j'aurais aimé un peu plus de réactivité sur certaines demandes. Cela dit, les revenus sont là, les voyageurs contents, et je n'ai pas de gros soucis. Communication parfois lente mais résultats conformes aux promesses. Globalement satisfait.",
    revenue: "+3 600€/mois"
  },
  {
    name: "Cabinet Expertise & Conseil",
    location: "Paris 2ème - Bourse",
    property: "Bureaux 120m² open-space",
    rating: 5,
    type: "Société Professionnelle",
    text: "Nos bureaux étaient vides suite à télétravail généralisé. Centurion les loue en coworking haut de gamme et salles de réunion à la journée. Solution innovante, revenus réguliers, et on garde la flexibilité de bloquer pour nos besoins. Gestion administrative impeccable. Excellent retour sur investissement immobilier !",
    revenue: "+5 400€/mois"
  },
  {
    name: "Sylvie Moreau",
    location: "Paris 1er - Louvre",
    property: "Appartement haussmannien 140m²",
    rating: 5,
    type: "Propriétaire Prestige",
    text: "Appartement familial avec moulures et parquet d'époque. Centurion a su valoriser son cachet historique pour clientèle internationale. Mes voisins étaient inquiets de la rotation, mais grâce à la sélection rigoureuse des voyageurs et l'accueil professionnel, aucun problème en 14 mois. Revenus doublés par rapport à location classique !",
    revenue: "+4 900€/mois"
  },
  {
    name: "Bruno Chevalier",
    location: "Nantes Quartier Hauts-Pavés",
    property: "Maison de maître 6 chambres",
    rating: 5,
    type: "Propriétaire Patrimoine",
    text: "Maison familiale héritée de mes parents. Trop grande pour moi, impossible à vendre pour des raisons sentimentales. Centurion l'a transformée en lieu de séminaires et réceptions privées. L'équipe respecte le lieu, fait l'entretien préventif, et les revenus financent la rénovation du toit. Solution parfaite !",
    revenue: "+5 100€/mois"
  },
  {
    name: "Investissements Patrimoine SAS",
    location: "Paris 6ème - Saint-Germain",
    property: "Appartement duplex 160m²",
    rating: 5,
    type: "Fonds d'Investissement",
    text: "Portfolio de 12 biens premium gérés par Centurion Luxe. Reporting financier détaillé, fiscalité optimisée, taux d'occupation moyen 86%. Leur plateforme de gestion nous permet de monitorer la performance en temps réel. ROI conforme aux objectifs. Relation de confiance établie, nous continuons d'investir.",
    revenue: "+23 400€/mois"
  },
  {
    name: "Aurélie Fontaine",
    location: "Paris 10ème - Canal Saint-Martin",
    property: "Loft d'artiste 90m²",
    rating: 5,
    type: "Artiste Peintre",
    text: "Mon atelier-loft est loué quand je pars en résidence artistique. Centurion cible créatifs et photographes qui apprécient l'espace et la lumière. Ambiance préservée, matériel respecté, et je finance mes projets artistiques avec ces locations. Ils comprennent mon besoin de flexibilité et s'adaptent à mon calendrier.",
    revenue: "+2 300€/mois"
  },
  {
    name: "Philippe & Martine",
    location: "Nantes Quartier Procé",
    property: "Maison bourgeoise 4 chambres",
    rating: 4,
    type: "Propriétaires Retraités",
    text: "Nous voyageons beaucoup depuis la retraite. Centurion loue notre maison pendant nos absences. Quelques petits soucis de communication au début mais rapidement résolus. La maison est bien entretenue, les locataires triés sur le volet. Les revenus nous permettent de financer nos voyages. On aurait aimé un suivi un peu plus personnalisé.",
    revenue: "+2 800€/mois"
  },
  {
    name: "Start-up TechVision",
    location: "Paris 11ème - République",
    property: "Open-space 200m²",
    rating: 5,
    type: "Start-up Tech",
    text: "On a réduit nos bureaux post-Covid. Centurion loue l'espace libéré pour événements tech, hackathons, workshops. C'est devenu un centre de revenus au lieu d'un coût fixe ! Gestion flexible, contrats adaptés, et ça crée du networking. Innovation immobilière qui colle parfaitement à notre culture start-up.",
    revenue: "+6 800€/mois"
  },
  {
    name: "Charlotte Lemoine",
    location: "Paris 3ème - Le Marais",
    property: "Appartement avec cour 65m²",
    rating: 5,
    type: "Propriétaire",
    text: "Petit havre de paix en plein Marais. Centurion a mis en avant le charme de la cour privative dans un quartier hyper demandé. Optimisation tarifaire selon événements parisiens (Fashion Week, salons...). Je gagne 60% de plus qu'avec mon ancien locataire, et le bien est toujours nickel. Très pro !",
    revenue: "+1 980€/mois"
  },
  {
    name: "Groupe Immobilier Atlantique",
    location: "Nantes Quartier Chantenay",
    property: "Immeuble de rapport 12 appartements",
    rating: 5,
    type: "Promoteur Immobilier",
    text: "Immeuble rénové entièrement géré en courte durée par Centurion. Stratégie mixte selon taille des logements. Rentabilité brute 9,2% vs 5,5% en location classique. Leur expertise en yield management et gestion de masse nous a convaincus. Partenariat stratégique pour nos futurs programmes.",
    revenue: "+18 600€/mois"
  },
  {
    name: "Isabelle Chevalier",
    location: "Paris 14ème - Montparnasse",
    property: "Studio 28m²",
    rating: 5,
    type: "Investisseuse",
    text: "Premier achat locatif sur conseil de mon banquier. Centurion gère tout depuis le jour 1. Je vis à Bordeaux, je ne monte jamais à Paris, et pourtant tout roule ! Virement mensuel régulier, reporting digital, alerts automatiques. L'investissement locatif passif dans toute sa splendeur. Exactement ce que je cherchais.",
    revenue: "+890€/mois"
  },
  {
    name: "Maison de Luxe Bijoux",
    location: "Paris 1er - Vendôme",
    property: "Boutique-Showroom 80m²",
    rating: 5,
    type: "Maison de Luxe",
    text: "Notre showroom place Vendôme était sous-utilisé. Centurion le loue pour événements privés ultra-sélects : présentations joaillerie, rendez-vous VIP, shootings luxe. Revenus complémentaires substantiels + visibilité de notre marque. Gestion discrète et haut de gamme. Exactement notre positionnement.",
    revenue: "+12 500€/mois"
  },
  {
    name: "Jacques Fontaine",
    location: "Paris 17ème - Parc Monceau",
    property: "Appartement familial 110m²",
    rating: 4,
    type: "Propriétaire",
    text: "Appartement loué pendant mutation à l'étranger. Centurion fait du bon travail dans l'ensemble. Parfois des délais un peu longs pour certaines réparations, mais rien de grave. Les états des lieux sont rigoureux, les voyageurs bien sélectionnés. Prix un peu élevé pour la commission mais service correct. À améliorer sur la réactivité.",
    revenue: "+3 300€/mois"
  },
  {
    name: "SCI Résidence Jardin",
    location: "Nantes Quartier Procé",
    property: "Villa avec jardin 220m²",
    rating: 5,
    type: "SCI Familiale",
    text: "Villa achetée en famille pour les vacances. Louée via Centurion le reste de l'année. Stratégie de blocage flexible pour nos besoins familiaux. Les petits-enfants adorent y passer les vacances, et entre-temps elle se rentabilise. Gestion transparente, comptabilité SCI facilitée. Solution familiale idéale !",
    revenue: "+4 200€/mois"
  },
  {
    name: "Delphine Mercier",
    location: "Paris 19ème - Buttes-Chaumont",
    property: "Appartement avec vue parc 70m²",
    rating: 5,
    type: "Propriétaire",
    text: "Vue exceptionnelle sur le parc des Buttes-Chaumont. Centurion a magnifiquement valorisé cet atout avec photos au lever du soleil, drone, visite 3D... Positionnement premium qui attire touristes aisés. J'ai doublé mes revenus locatifs ! Service impeccable, équipe réactive, communication fluide. Ravie !",
    revenue: "+2 450€/mois"
  },
  {
    name: "Cabinet d'Architecture Moderne",
    location: "Paris 11ème - Bastille",
    property: "Atelier d'architecte 140m²",
    rating: 5,
    type: "Cabinet Professionnel",
    text: "Notre atelier est loué pour workshops créatifs, shootings déco, et événements design quand on n'a pas de projet en cours. Centurion a compris notre univers et cible la clientèle adéquate. Source de revenus complémentaires + vitrine pour notre activité. Win-win total !",
    revenue: "+5 600€/mois"
  },
  {
    name: "Arnaud Morel",
    location: "Nantes Quartier Dobrée",
    property: "Maison de ville 130m²",
    rating: 5,
    type: "Propriétaire",
    text: "Maison de ville en plein centre historique. Centurion l'a positionnée pour clientèle affaires et familles touristiques. Mix parfait ! Taux d'occupation 78% avec prix moyens très corrects. Je n'imaginais pas que la location courte durée pouvait marcher aussi bien à Nantes. Agréablement surpris par les résultats !",
    revenue: "+2 950€/mois"
  },
  {
    name: "Sophie & Marc Renaud",
    location: "Paris 4ème - Île Saint-Louis",
    property: "Duplex avec vue Seine 95m²",
    rating: 5,
    type: "Couple Propriétaire",
    text: "Emplacement d'exception sur l'Île Saint-Louis. Centurion nous a permis de monétiser ce bien de famille sans le vendre. Location haut de gamme uniquement, clientèle internationale triée. Les revenus nous permettent de conserver ce patrimoine familial et de le transmettre à nos enfants. Merci pour cette solution !",
    revenue: "+5 800€/mois"
  },
  {
    name: "Entreprise Mode & Création",
    location: "Paris 2ème - Sentier",
    property: "Showroom mode 100m²",
    rating: 5,
    type: "Entreprise Mode",
    text: "Showroom utilisé 2 semaines par mois pour nos collections. Centurion le loue le reste du temps : défilés privés, shootings mode, essayages presse... Notre loyer est payé par ces locations ! Gestion pro, assurances béton, respect de notre univers de marque. Modèle économique gagnant.",
    revenue: "+7 200€/mois"
  },
  {
    name: "Céline Dubois",
    location: "Nantes Quartier Clisson",
    property: "Loft industriel rénové 85m²",
    rating: 5,
    type: "Propriétaire",
    text: "Ancien atelier transformé en loft moderne. Style industriel très recherché ! Centurion cible les jeunes actifs et créatifs de passage à Nantes. Photos pro qui mettent en valeur les poutres métalliques et verrière. Loué 24 jours/mois en moyenne. Super rentabilité pour Nantes !",
    revenue: "+1 850€/mois"
  },
  {
    name: "Investissement Pierre SCI",
    location: "Paris 9ème - Pigalle",
    property: "Immeuble mixte commerce + 6 apparts",
    rating: 5,
    type: "SCI Investissement",
    text: "Stratégie patrimoniale mixte : RDC en bail commercial, étages en courte durée via Centurion. Optimisation fiscale et rentabilité maximale. Reporting mensuel consolidé, interface de gestion multi-biens. Professionnalisme au rendez-vous. C'est notre 3ème immeuble confié, et certainement pas le dernier !",
    revenue: "+14 800€/mois"
  },
  {
    name: "Valérie Girard",
    location: "Paris 5ème - Panthéon",
    property: "Studio étudiant 22m²",
    rating: 4,
    type: "Propriétaire",
    text: "Petit studio dans le Quartier Latin. Centurion le loue principalement pour courts séjours étudiants et stagiaires. Rentabilité correcte mais j'aurais préféré un taux d'occupation un peu plus élevé. Bonne gestion néanmoins, ménages bien faits, état des lieux rigoureux. Rapport qualité-prix acceptable.",
    revenue: "+780€/mois"
  },
  {
    name: "Bureau d'Études Ingénierie",
    location: "Nantes Quartier Malakoff",
    property: "Bureaux 150m² modulables",
    rating: 5,
    type: "Entreprise BTP",
    text: "Suite à réorganisation interne, nos bureaux sont sous-occupés. Centurion les loue en bureaux flex pour entreprises en mission temporaire à Nantes. Revenus locatifs qui financent notre loyer ! Contrats professionnels, facturation propre, aucun conflit d'usage. Excellente solution d'optimisation immobilière.",
    revenue: "+4 100€/mois"
  },
  {
    name: "Antoine Beaumont",
    location: "Paris 8ème - Arc de Triomphe",
    property: "Penthouse 180m² avec rooftop",
    rating: 5,
    type: "Entrepreneur",
    text: "Penthouse de prestige avec terrasse 360° sur Paris. Centurion le positionne à 1200€/nuit pour ultra-riches et célébrités. Service conciergerie inclus : chef à domicile, chauffeur, sécurité... Je suis souvent en déplacement, et mon bien génère des revenus exceptionnels ! Top 1% du marché parisien.",
    revenue: "+24 000€/mois"
  },
  {
    name: "Famille Legrand SCI",
    location: "Nantes Bord d'Erdre",
    property: "Propriété avec ponton 300m²",
    rating: 5,
    type: "Patrimoine Familial",
    text: "Maison de famille au bord de l'Erdre. Location saisonnière premium pour familles recherchant calme et nature à 10min du centre. Centurion gère réservations, entretien jardin/ponton, et même la barque ! Patrimoine valorisé et transmis aux enfants. C'était ça ou vendre... Merci de nous avoir trouvé la solution !",
    revenue: "+3 700€/mois"
  },
  {
    name: "Stéphane Moreau",
    location: "Paris 13ème - BNF",
    property: "Appartement neuf 55m²",
    rating: 5,
    type: "Investisseur",
    text: "Achat VEFA livré il y a 8 mois. Centurion gérait déjà avant la livraison ! Annonce prête, photos sur plans 3D, premières réservations immédiates. Optimisation fiscale LMNP parfaitement gérée. Mon conseiller m'a accompagné de A à Z. Investissement 100% passif et rentable. J'en rachète un 2ème !",
    revenue: "+1 680€/mois"
  },
  {
    name: "Galerie d'Art Contemporain",
    location: "Paris 3ème - Marais",
    property: "Galerie 120m²",
    rating: 5,
    type: "Galerie d'Art",
    text: "Entre deux expositions, notre galerie était vide. Centurion la loue pour vernissages privés, cocktails corporates, shootings artistiques. Revenus complémentaires qui financent nos expositions moins rentables ! Respect des œuvres, clientèle haut de gamme, assurances adaptées. Partenariat culturel et économique réussi.",
    revenue: "+8 400€/mois"
  },
  {
    name: "Ludovic Perrin",
    location: "Nantes Quartier Hauts-Pavés",
    property: "T3 rénové 68m²",
    rating: 4,
    type: "Propriétaire",
    text: "Appartement bien situé, rénové récemment. Centurion assure une gestion correcte. Quelques couacs au début sur la communication mais situation stabilisée. Les revenus sont là, le bien est entretenu. J'aurais aimé plus de transparence sur certains frais annexes. Relation qui s'améliore avec le temps.",
    revenue: "+1 450€/mois"
  },
  {
    name: "Résidence Services Prestige",
    location: "Paris 7ème - Tour Eiffel",
    property: "Résidence hôtelière 24 suites",
    rating: 5,
    type: "Résidence Services",
    text: "Partenariat avec Centurion pour optimiser notre taux d'occupation. Leur technologie de yield management et distribution multi-plateformes a augmenté notre RevPAR de 32% ! Intégration technique fluide, formation des équipes, et résultats immédiats. Collaboration stratégique qui transforme notre business model.",
    revenue: "+68 000€/mois"
  },
  {
    name: "Brigitte Laurent",
    location: "Paris 16ème - Auteuil",
    property: "Appartement bourgeois 135m²",
    rating: 5,
    type: "Propriétaire Prestige",
    text: "Veuve depuis 2 ans, cet appartement était trop grand. Mes enfants ont insisté pour le louer plutôt que vendre. Centurion cible familles aisées et expatriés en recherche temporaire de logement. Accompagnement humain dans cette période difficile. Revenus qui me permettent de vivre confortablement. Reconnaissance éternelle.",
    revenue: "+4 600€/mois"
  },
  {
    name: "Start-up FoodTech",
    location: "Paris 10ème - République",
    property: "Cuisine laboratoire 90m²",
    rating: 5,
    type: "Start-up Food",
    text: "Notre lab culinaire est sous-utilisé le week-end. Centurion le loue pour cours de cuisine, tournages culinaires, événements gastronomiques. Équipements pro très demandés ! Rentabilisation d'actifs, networking dans l'écosystème food, et revenus pour financer notre R&D. Innovation immobilière au service de l'innovation food !",
    revenue: "+5 900€/mois"
  },
  {
    name: "Claire & Thomas Dubois",
    location: "Nantes Quartier Feydeau",
    property: "Appartement avec balcon 52m²",
    rating: 5,
    type: "Jeunes Propriétaires",
    text: "Premier achat immobilier à 30 ans. On vit chez nos parents pour économiser, Centurion loue notre appart. Résultat : le crédit est payé + 300€ de cashflow positif ! On économise pour notre mariage tout en constituant notre patrimoine. Stratégie gagnante pour jeunes actifs !",
    revenue: "+1 250€/mois"
  },
  {
    name: "Cabinet Médical Spécialisé",
    location: "Paris 8ème - Saint-Augustin",
    property: "Cabinet médical 100m²",
    rating: 5,
    type: "Profession Libérale",
    text: "Cabinet fermé 12 semaines/an (congés + formations). Centurion le loue à médecins remplaçants et praticiens en consultation ponctuelle. Revenus complémentaires substantiels ! Gestion administrative des locations conforme aux normes médicales. Innovation dans l'immobilier de santé.",
    revenue: "+6 200€/mois"
  },
  {
    name: "Pauline Bertrand",
    location: "Paris 11ème - Père Lachaise",
    property: "Loft avec mezzanine 75m²",
    rating: 5,
    type: "Propriétaire",
    text: "Loft atypique avec mezzanine et verrière. Photos sublimes réalisées par Centurion, annonces traduites en 5 langues, prix dynamique selon demande. Taux d'occupation 91% sur les 10 derniers mois ! Meilleur investissement locatif que j'ai fait. Je rachète un 2ème bien pour le confier à Centurion.",
    revenue: "+2 580€/mois"
  },
  {
    name: "Château Viticole Patrimoine",
    location: "Nantes Vignoble Muscadet",
    property: "Gîte de prestige dans vignoble",
    rating: 5,
    type: "Domaine Viticole",
    text: "Gîte de charme dans notre domaine viticole. Centurion le positionne pour œnotourisme haut de gamme. Package dégustation + hébergement. Synergie parfaite entre notre activité viticole et l'hébergement ! Clientèle internationale amatrice de vins. Visibilité et revenus complémentaires. Partenariat qui a du sens.",
    revenue: "+3 400€/mois"
  },
  {
    name: "Richard Fontaine",
    location: "Paris 18ème - Montmartre",
    property: "Studio avec vue Sacré-Cœur 30m²",
    rating: 4,
    type: "Propriétaire",
    text: "Studio bien placé avec vue iconique. Centurion gère correctement mais j'ai eu 2-3 problèmes avec des voyageurs bruyants. Gestion des plaintes voisins un peu lente à mon goût. Cela dit, rentabilité au rendez-vous et la plupart des locations se passent bien. Peut mieux faire sur la sélection voyageurs.",
    revenue: "+1 180€/mois"
  },
  {
    name: "SCI Innovation Immobilière",
    location: "Paris 15ème - Beaugrenelle",
    property: "Résidence complète 18 appartements",
    rating: 5,
    type: "Investisseur Institutionnel",
    text: "Résidence entière gérée en location courte durée par Centurion. Business plan validé, rentabilité 8,4% brut atteinte. Leur plateforme de pilotage centralisée nous donne visibilité totale : occupation, revenus, incidents, maintenance. Scalabilité du modèle démontrée. Partenaire stratégique pour nos prochaines acquisitions.",
    revenue: "+42 000€/mois"
  },
  {
    name: "Émilie Rousseau",
    location: "Nantes Quartier Zola",
    property: "Maison mitoyenne 95m²",
    rating: 5,
    type: "Propriétaire",
    text: "Maison achetée pour ma retraite dans 5 ans. En attendant, Centurion la loue et finance mon crédit ! Stratégie d'investissement à long terme parfaite. Le bien s'auto-finance et prend de la valeur. Quand je prendrai ma retraite, j'aurai une maison payée à Nantes. Bravo pour cette vision !",
    revenue: "+2 100€/mois"
  },
  {
    name: "Agence Communication Digitale",
    location: "Paris 9ème - Grands Boulevards",
    property: "Open-space créatif 110m²",
    rating: 5,
    type: "Agence Digital",
    text: "Full remote depuis Covid, bureaux quasi vides. Centurion les loue pour workshops, brainstormings, séances photos produits. On garde un espace pour nos réunions clients. Optimisation parfaite ! Les locations financent 80% du loyer. Modèle hybride qui colle à notre ADN digital.",
    revenue: "+5 700€/mois"
  },
  {
    name: "Alain & Monique Perret",
    location: "Paris 12ème - Nation",
    property: "Appartement avec parking 82m²",
    rating: 5,
    type: "Propriétaires Seniors",
    text: "Nous sommes partis vivre dans le Sud. Notre appartement parisien était vide. Centurion le loue avec parking (très recherché !). Nous gardons notre pied-à-terre parisien qui génère un complément de retraite confortable. On peut bloquer quand nos petits-enfants viennent. Flexibilité et rentabilité parfaites !",
    revenue: "+2 780€/mois"
  },
  {
    name: "Studio Photo Professionnel",
    location: "Paris 20ème - Ménilmontant",
    property: "Studio photo 140m² avec cyclo",
    rating: 5,
    type: "Photographe Pro",
    text: "Mon studio est réservé pour mes shootings 12 jours/mois. Le reste du temps, Centurion le loue à d'autres photographes, vidéastes, créateurs de contenu. Équipement pro partagé, revenus passifs, et networking génial ! J'ai rencontré des collaborateurs grâce à ça. Économie du partage appliquée à la photo !",
    revenue: "+4 800€/mois"
  },
  {
    name: "Nadine Chevalier",
    location: "Nantes Quartier Mellinet",
    property: "Appartement T2 avec terrasse 48m²",
    rating: 5,
    type: "Propriétaire",
    text: "Appartement avec belle terrasse, rare à Nantes centre. Centurion l'a positionné comme un atout majeur : photos terrasse aménagée, mobilier de jardin, plantes... Prix premium justifié ! Loué même en hiver grâce au chauffage extérieur. Valorisation intelligente qui fait la différence sur mes revenus.",
    revenue: "+1 380€/mois"
  },
  {
    name: "Fondation Culturelle",
    location: "Paris 4ème - Hôtel de Ville",
    property: "Hôtel particulier culturel 250m²",
    rating: 5,
    type: "Fondation",
    text: "Hôtel particulier dédié à la culture mais sous-utilisé. Centurion organise locations pour événements culturels, concerts privés, expositions temporaires. Revenus qui financent nos programmes artistiques ! Mission culturelle préservée + modèle économique viable. Ils ont compris notre ADN et respectent nos valeurs.",
    revenue: "+15 800€/mois"
  },
  {
    name: "Julien Marchand",
    location: "Paris 13ème - Butte-aux-Cailles",
    property: "Maison de village 105m²",
    rating: 4,
    type: "Propriétaire",
    text: "Maison atypique dans ce quartier village. Centurion assure une gestion honnête. J'ai eu quelques incompréhensions sur les frais de ménage et maintenance. Communication à améliorer sur la transparence des coûts. Les voyageurs sont contents, le bien est bien entretenu. Globalement positif mais perfectible.",
    revenue: "+3 100€/mois"
  },
  {
    name: "Groupe Hôtelier Boutique",
    location: "Nantes Quartier Bouffay",
    property: "Boutique Hôtel 12 chambres",
    rating: 5,
    type: "Hôtelier",
    text: "Partenariat avec Centurion pour distribution multi-canaux. Leur technologie complète notre PMS hôtelier. Visibilité Airbnb Luxe + Booking Genius = +28% d'occupation ! Intégration technique fluide, commission raisonnable, support réactif. Extension du partenariat sur nos 3 autres établissements en cours.",
    revenue: "+22 400€/mois"
  },
  {
    name: "Mathieu Girard",
    location: "Paris 10ème - Gare du Nord",
    property: "Appartement transit 45m²",
    rating: 5,
    type: "Investisseur",
    text: "Appartement acheté spécialement pour location courte durée près de Gare du Nord. Stratégie risquée mais Centurion a assuré ! Clientèle affaires en transit, touristes arrivée train/avion... Taux d'occupation 88% ! ROI 11% brut la première année. Meilleur investissement locatif de ma vie. Je réitère l'opération Gare de Lyon.",
    revenue: "+1 820€/mois"
  },
  {
    name: "Association Culturelle",
    location: "Paris 11ème - Voltaire",
    property: "Salle polyvalente 180m²",
    rating: 5,
    type: "Association",
    text: "Notre salle associative était vide 50% du temps. Centurion la loue pour événements privés, répétitions artistiques, workshops. Revenus qui financent notre action culturelle ! Location respectueuse de notre mission, pas de soirées alcoolisées, clientèle triée. Économie sociale et solidaire appliquée à l'immobilier !",
    revenue: "+3 900€/mois"
  },
  {
    name: "Vincent & Laura",
    location: "Nantes Quartier Chantenay",
    property: "Pavillon moderne 120m²",
    rating: 5,
    type: "Jeune Couple",
    text: "On a construit notre maison mais on doit partir 2 ans à l'étranger pour le boulot. Centurion la loue en meublé premium. Notre crédit est payé + on économise pour le retour ! Maison nickel à notre retour, jardin entretenu, tout parfait. Solution miracle pour jeunes en mobilité internationale.",
    revenue: "+2 650€/mois"
  },
  {
    name: "Cabinet Juridique International",
    location: "Paris 8ème - Madeleine",
    property: "Bureaux prestige 160m²",
    rating: 5,
    type: "Cabinet Avocat",
    text: "Nos bureaux sont sous-occupés depuis le télétravail. Centurion les loue à avocats en déplacement, cabinets étrangers en mission Paris, arbitrages internationaux. Clientèle premium, confidentialité garantie, équipements juridiques préservés. Revenus qui financent notre transformation digitale !",
    revenue: "+8 900€/mois"
  },
  {
    name: "Hélène Dubois",
    location: "Paris 6ème - Odéon",
    property: "Appartement d'écrivain 58m²",
    rating: 5,
    type: "Écrivaine",
    text: "Mon appartement témoin de mon histoire littéraire. Quand je pars en résidence d'écriture, Centurion le loue à artistes et intellectuels. Clientèle cultivée qui respecte les lieux et l'âme du lieu. Revenus qui financent mes projets littéraires. Ils ont compris la dimension émotionnelle. Respect total.",
    revenue: "+2 180€/mois"
  },
  {
    name: "Fonds Immobilier Europe",
    location: "Paris 15ème - Porte de Versailles",
    property: "Résidence affaires 32 studios",
    rating: 5,
    type: "Fonds Investissement",
    text: "Acquisition d'une résidence affaires gérée par Centurion en hospitality management. KPIs atteints : 84% occupation, ADR 110€, RevPAR 92€. Benchmark du marché battu. Reporting ESG inclus (consommation énergie, déchets...). Partenaire fiable pour déploiement de notre stratégie hospitality européenne.",
    revenue: "+95 000€/mois"
  },
  {
    name: "Georges Fontaine",
    location: "Nantes Quartier Zola",
    property: "Maison avec atelier 140m²",
    rating: 4,
    type: "Artisan Retraité",
    text: "Maison avec atelier que je n'utilise plus. Centurion loue la maison et l'atelier séparément parfois. Concept intéressant mais communication pas toujours claire sur qui loue quoi. Revenus corrects, entretien OK. Quelques ajustements à faire sur la gestion des deux espaces. Potentiel d'amélioration.",
    revenue: "+2 400€/mois"
  },
  {
    name: "Société Production Audiovisuelle",
    location: "Paris 19ème - Bassin de la Villette",
    property: "Studio de tournage 200m²",
    rating: 5,
    type: "Production Audiovisuelle",
    text: "Notre studio est loué pour nos productions 15 jours/mois. Centurion le loue le reste du temps : clips, pubs, courts-métrages, podcasts vidéo... Équipements techniques valorisés, assurances adaptées. Notre studio s'autofinance ! Modèle économique circulaire dans l'audiovisuel.",
    revenue: "+9 600€/mois"
  },
  {
    name: "Marine Lemoine",
    location: "Paris 2ème - Opéra",
    property: "Appartement haussmannien 72m²",
    rating: 5,
    type: "Propriétaire",
    text: "Appartement hérité de ma grand-mère. Impossible de vendre pour raisons familiales. Centurion le loue en respectant son cachet d'époque. Clientèle haut de gamme qui apprécie l'authenticité. Je conserve le patrimoine familial qui génère des revenus. Solution émotionnellement et financièrement satisfaisante.",
    revenue: "+3 450€/mois"
  },
  {
    name: "Think Tank Économie",
    location: "Paris 7ème - Assemblée Nationale",
    property: "Bureaux institutionnels 130m²",
    rating: 5,
    type: "Think Tank",
    text: "Nos bureaux sont vides le soir et week-ends. Centurion les loue pour séminaires, formations, réunions stratégiques. Clientèle institutionnelle et corporate conforme à notre positionnement. Revenus qui financent nos études et publications. Optimisation immobilière au service de la mission intellectuelle !",
    revenue: "+6 400€/mois"
  },
  {
    name: "Pierre & Anne Girard",
    location: "Nantes Quartier Contrie",
    property: "Longère rénovée 170m²",
    rating: 5,
    type: "Couple Propriétaire",
    text: "Longère rénovée avec goût dans un esprit contemporain-campagne. Centurion cible citadins en quête de ressourcement. Photos magnifiques qui valorisent pierres apparentes et poutres. Week-ends et semaines complètes. Rentabilité excellente pour de l'immobilier périurbain ! Vision stratégique qui dépasse nos attentes.",
    revenue: "+3 200€/mois"
  },
  {
    name: "Christophe Morel",
    location: "Paris 14ème - Denfert-Rochereau",
    property: "Duplex avec jardin 110m²",
    rating: 5,
    type: "Propriétaire",
    text: "Duplex avec jardin privatif, perle rare à Paris ! Centurion a mis en avant cet atout unique. Photos jardin aux 4 saisons, aménagement terrasse, BBQ l'été... Familles et groupes d'amis adorent ! Prix premium totalement justifié. Mon bien se démarque de la concurrence. Expertise marketing au top !",
    revenue: "+4 200€/mois"
  },
  {
    name: "École de Musique Privée",
    location: "Paris 9ème - Trinité",
    property: "Studios de répétition 250m²",
    rating: 5,
    type: "École Musique",
    text: "Nos studios sont inoccupés soirs et week-ends. Centurion les loue à musiciens et groupes pour répétitions. Insonorisation pro, matériel respecté, calendrier coordonné avec nos cours. Revenus complémentaires + visibilité de l'école. Gagnant-gagnant pour l'écosystème musical parisien !",
    revenue: "+5 100€/mois"
  },
  {
    name: "Raphaël Beaumont",
    location: "Nantes Quartier Hauts-Pavés",
    property: "Villa bourgeoise 195m²",
    rating: 4,
    type: "Propriétaire",
    text: "Belle villa dans quartier résidentiel. Centurion fait un travail correct dans l'ensemble. Quelques soucis de voisinage au début avec bruit, rapidement gérés. Sélection des voyageurs améliorée depuis. Revenus satisfaisants, entretien jardin OK. Relation constructive mais démarrage un peu chaotique.",
    revenue: "+3 850€/mois"
  },
  {
    name: "Investissement Patrimoine Familial",
    location: "Paris 16ème - Passy",
    property: "Portefeuille 8 appartements",
    rating: 5,
    type: "Family Office",
    text: "Notre family office gère un portefeuille immobilier parisien. Centurion gère 8 de nos biens en courte durée. Rentabilité moyenne 7,8% brut vs 4,2% en location classique. Dashboard consolidé, optimisation fiscale LMNP, accompagnement juridique. Partenaire de confiance pour nos actifs immobiliers.",
    revenue: "+36 500€/mois"
  },
  {
    name: "Sandrine Perrin",
    location: "Paris 17ème - Batignolles",
    property: "Appartement rénové 63m²",
    rating: 5,
    type: "Propriétaire",
    text: "Appartement rénové avec goût, déco moderne scandinave. Photos pro sublimes de Centurion, styling parfait. Mon appart ressemble à un shooting magazine déco ! Clients ravis, super avis, demande continue. J'ai investi 15k€ dans la réno, rentabilisé en 18 mois grâce à Centurion. Jackpot !",
    revenue: "+2 350€/mois"
  },
  {
    name: "Centre de Formation Pro",
    location: "Nantes Quartier Breil",
    property: "Salles de formation 180m²",
    rating: 5,
    type: "Organisme Formation",
    text: "Nos salles sont vides 40% de l'année hors périodes de formation. Centurion les loue pour séminaires, teambuildings, formations externes. Équipement pédagogique valorisé, vidéoprojecteurs, paperboards... Nos locaux s'autofinancent presque ! Optimisation intelligente de nos actifs immobiliers.",
    revenue: "+4 700€/mois"
  },
  {
    name: "Élise & Maxime Fontaine",
    location: "Paris 5ème - Jardin des Plantes",
    property: "Appartement botanique 78m²",
    rating: 5,
    type: "Couple Botaniste",
    text: "Appartement face au Jardin des Plantes, nombreuses plantes rares à l'intérieur. Centurion cible clientèle écolo et amateurs de botanique. Photos végétalisées magnifiques, concept unique ! Voyageurs adorent notre 'jungle urbaine'. Niche trouvée, tarifs premium, taux d'occupation exceptionnel. Bravo pour cette vision !",
    revenue: "+2 890€/mois"
  },
  {
    name: "Groupe Retail Fashion",
    location: "Paris 1er - Rivoli",
    property: "Pop-up store 90m²",
    rating: 5,
    type: "Groupe Retail",
    text: "Entre deux collections, notre pop-up store reste vide. Centurion le loue à d'autres marques pour lancements produits, ventes privées, événements mode. Emplacement premium rentabilisé à 100% ! Synergie retail et événementiel. Notre loyer Rue de Rivoli est financé par ces locations.",
    revenue: "+11 200€/mois"
  },
  {
    name: "Bertrand Mercier",
    location: "Nantes Quartier Madeleine",
    property: "Appartement standing 88m²",
    rating: 5,
    type: "Cadre Supérieur",
    text: "Cadre sup' souvent en déplacement. Mon appartement était vide 60% du temps. Centurion le loue quand je suis absent, bloqué quand je rentre. Flexibilité totale via leur app ! Je rentre chez moi nickel, ménage fait, et j'ai généré 1500€ pendant mon absence. Modèle parfait pour grands voyageurs !",
    revenue: "+1 580€/mois"
  },
  {
    name: "SCI Résidence Étudiante",
    location: "Nantes Quartier Erdre",
    property: "Résidence 22 studios étudiants",
    rating: 5,
    type: "Investisseur Résidence",
    text: "Résidence étudiante vide 3 mois l'été. Centurion loue les studios en courte durée pendant cette période : stagiaires, touristes, familles. Revenus d'été qui compensent la vacance étudiante ! Optimisation parfaite du calendrier académique. Rentabilité annuelle lissée. Stratégie gagnante !",
    revenue: "+14 800€/mois (sur 3 mois)"
  },
  {
    name: "Valérie Rousseau",
    location: "Paris 12ème - Gare de Lyon",
    property: "Appartement transit 51m²",
    rating: 4,
    type: "Propriétaire",
    text: "Appartement bien placé près de Gare de Lyon. Rotation importante de voyageurs. Centurion gère mais usure plus rapide que prévu. Frais de maintenance un peu élevés. Revenus corrects mais il faut prévoir budget entretien conséquent. Transparence OK sur les coûts. Rentable mais attention à l'usure.",
    revenue: "+1 720€/mois"
  },
  {
    name: "Laboratoire Recherche Privé",
    location: "Paris 13ème - Austerlitz",
    property: "Laboratoire équipé 160m²",
    rating: 5,
    type: "Laboratoire R&D",
    text: "Notre labo est sous-utilisé depuis réorganisation. Centurion le loue à start-ups biotech, chercheurs indépendants, formations scientifiques. Équipements scientifiques mutualisés, revenus locatifs, networking recherche. Innovation dans le partage d'infrastructures scientifiques. Modèle à dupliquer !",
    revenue: "+7 800€/mois"
  },
  {
    name: "Grégoire Dubois",
    location: "Paris 11ème - Oberkampf",
    property: "Loft d'artiste 92m²",
    rating: 5,
    type: "Artiste Plasticien",
    text: "Mon atelier-loft est loué quand je pars en expo ou résidence. Clientèle créative qui comprend l'univers artistique. Centurion respecte mes œuvres, mes outils, mon espace. Revenus qui financent mes matériaux et expos. Ils ont compris ma sensibilité d'artiste. Relation de confiance rare !",
    revenue: "+2 650€/mois"
  },
  {
    name: "Fédération Sportive",
    location: "Nantes Quartier Beaujoire",
    property: "Salles sportives modulables 300m²",
    rating: 5,
    type: "Fédération Sport",
    text: "Nos salles sont inoccupées hors compétitions et entraînements fédéraux. Centurion les loue pour stages sportifs, préparations physiques, événements wellness. Revenus réinvestis dans le sport amateur ! Gestion respectueuse des équipements, clientèle sportive triée. Économie du sport partagée !",
    revenue: "+5 600€/mois"
  },
  {
    name: "Famille Legrand",
    location: "Paris 7ème - Musée d'Orsay",
    property: "Appartement patrimonial 145m²",
    rating: 5,
    type: "Patrimoine Familial",
    text: "Appartement familial depuis 3 générations. Impossible de vendre, trop cher à garder vide. Centurion l'a sauvé de la vente forcée ! Location haut de gamme qui couvre charges et taxes. Patrimoine familial préservé et transmis à nos enfants. Merci d'avoir trouvé cette solution patrimoniale !",
    revenue: "+5 200€/mois"
  },
  {
    name: "Nicolas Perrin",
    location: "Nantes Quartier Talensac",
    property: "Appartement avec parking 70m²",
    rating: 5,
    type: "Investisseur",
    text: "Stratégie d'achat avec parking (rare à Nantes centre). Centurion loue l'ensemble, tarif premium justifié. Professionnels en déplacement adorent avoir leur voiture ! Taux d'occupation 85%, clientèle qualitative. Vision d'achat immobilier validée par les résultats. J'achète un 2ème bien avec parking !",
    revenue: "+1 950€/mois"
  },
  {
    name: "Conservatoire Municipal",
    location: "Paris 10ème - Gare de l'Est",
    property: "Salles de musique 220m²",
    rating: 5,
    type: "Conservatoire",
    text: "Nos salles sont libres vacances scolaires et soirées. Centurion les loue pour répétitions, enregistrements, master classes privées. Pianos et équipements acoustiques valorisés. Revenus qui financent achat d'instruments pour élèves défavorisés. Mission publique + optimisation budgétaire. Exemplaire !",
    revenue: "+4 200€/mois"
  }
];

export function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 18);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Retour à l'accueil</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Star size={16} fill="currentColor" />
            {testimonials.length} Témoignages Clients
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-light">
            Ils Nous Font{' '}
            <span className="font-semibold text-emerald-500">Confiance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les retours d'expérience de nos propriétaires, investisseurs et professionnels qui ont fait le choix de la sérénité et de la rentabilité.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={60} className="text-emerald-500" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#10b981" className="text-emerald-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Revenue Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonial.revenue}
              </div>

              {/* Client Info */}
              <div className="border-t border-gray-100 pt-6">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-emerald-600 text-sm font-medium mb-1">
                  {testimonial.type}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonial.property}
                </p>
                <p className="text-gray-600 text-sm font-medium">
                  📍 {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all transform hover:scale-105"
            >
              Voir plus d'avis
              <ChevronDown size={20} />
            </button>
            <p className="text-gray-500 mt-4">
              +{testimonials.length - 18} autres témoignages disponibles
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Prêt à rejoindre nos propriétaires satisfaits ?
          </p>
          <Link
            to="/"
            onClick={() => {
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-block"
          >
            Prendre Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
