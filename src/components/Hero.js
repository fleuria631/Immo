import React, { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [searchType, setSearchType] = useState('achat');

  return (
    <section id="accueil" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Trouvez votre
            <span className="block text-yellow-400">maison de rêve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Découvrez les plus belles propriétés avec notre expertise immobilière de confiance
          </p>

          {/* Barre de recherche */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            {/* Onglets */}
            <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSearchType('achat')}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-all ${
                  searchType === 'achat'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Acheter
              </button>
              <button
                onClick={() => setSearchType('location')}
                className={`flex-1 py-3 px-6 rounded-md font-medium transition-all ${
                  searchType === 'location'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Louer
              </button>
            </div>

            {/* Formulaire de recherche */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ville, quartier..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                <option>Type de bien</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Villa</option>
                <option>Studio</option>
              </select>

              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                <option>Budget</option>
                <option>0 - 200 000€</option>
                <option>200 000 - 400 000€</option>
                <option>400 000 - 600 000€</option>
                <option>600 000€+</option>
              </select>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
                <MagnifyingGlassIcon className="h-5 w-5" />
                <span>Rechercher</span>
              </button>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-lg">Propriétés vendues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-lg">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-lg">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;