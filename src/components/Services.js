import React from 'react';
import { 
  HomeIcon, 
  CurrencyEuroIcon, 
  DocumentTextIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: HomeIcon,
      title: "Achat & Vente",
      description: "Accompagnement personnalisé pour tous vos projets d'achat et de vente immobilière",
      features: ["Estimation gratuite", "Négociation", "Suivi complet"]
    },
    {
      icon: CurrencyEuroIcon,
      title: "Gestion Locative",
      description: "Gestion complète de vos biens locatifs avec un service de qualité",
      features: ["Recherche locataires", "Encaissement loyers", "Entretien"]
    },
    {
      icon: DocumentTextIcon,
      title: "Conseil Juridique",
      description: "Expertise juridique pour sécuriser toutes vos transactions immobilières",
      features: ["Vérification documents", "Conseil fiscal", "Accompagnement notaire"]
    },
    {
      icon: ChartBarIcon,
      title: "Investissement",
      description: "Conseils en investissement immobilier pour optimiser votre patrimoine",
      features: ["Analyse rentabilité", "Défiscalisation", "Stratégie patrimoniale"]
    },
    {
      icon: UserGroupIcon,
      title: "Syndic de Copropriété",
      description: "Gestion professionnelle de votre copropriété avec transparence",
      features: ["Assemblées générales", "Travaux", "Comptabilité"]
    },
    {
      icon: ShieldCheckIcon,
      title: "Assurance & Garanties",
      description: "Protection complète avec nos partenaires assureurs de confiance",
      features: ["Assurance habitation", "Garantie décennale", "Protection juridique"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos services immobiliers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour répondre à tous vos besoins immobiliers
          </p>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white border border-transparent hover:border-blue-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  En savoir plus →
                </button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Besoin d'un conseil personnalisé ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Nos experts sont à votre disposition pour étudier votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Prendre rendez-vous
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Appeler maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;