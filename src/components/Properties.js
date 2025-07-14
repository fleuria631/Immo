import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { FunnelIcon } from '@heroicons/react/24/outline';

const Properties = () => {
  const [filter, setFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: "Magnifique villa moderne avec piscine",
      location: "Cannes, Alpes-Maritimes",
      price: 850000,
      type: "Vente",
      rooms: 5,
      bedrooms: 4,
      surface: 180,
      photos: 12,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Appartement lumineux centre-ville",
      location: "Nice, Alpes-Maritimes",
      price: 2800,
      type: "Location",
      rooms: 3,
      bedrooms: 2,
      surface: 85,
      photos: 8,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Maison de charme avec jardin",
      location: "Antibes, Alpes-Maritimes",
      price: 650000,
      type: "Vente",
      rooms: 4,
      bedrooms: 3,
      surface: 120,
      photos: 15,
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Studio moderne proche plage",
      location: "Juan-les-Pins, Alpes-Maritimes",
      price: 1200,
      type: "Location",
      rooms: 1,
      surface: 35,
      photos: 6,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Penthouse avec vue mer panoramique",
      location: "Monaco, Monaco",
      price: 2500000,
      type: "Vente",
      rooms: 6,
      bedrooms: 4,
      surface: 200,
      photos: 20,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Appartement familial rénové",
      location: "Grasse, Alpes-Maritimes",
      price: 1800,
      type: "Location",
      rooms: 4,
      bedrooms: 3,
      surface: 95,
      photos: 10,
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(property => 
        filter === 'vente' ? property.type === 'Vente' : property.type === 'Location'
      );

  return (
    <section id="proprietes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos propriétés sélectionnées
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection exclusive de biens immobiliers de prestige
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md mb-4 sm:mb-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('vente')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'vente'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Vente
            </button>
            <button
              onClick={() => setFilter('location')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                filter === 'location'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Location
            </button>
          </div>

          <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all text-gray-700">
            <FunnelIcon className="h-5 w-5" />
            <span>Filtres avancés</span>
          </button>
        </div>

        {/* Grille des propriétés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Bouton voir plus */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Voir plus de propriétés
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;