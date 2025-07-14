import React from 'react';
import { MapPinIcon, HomeIcon, CameraIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            property.type === 'Vente' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {property.type}
          </span>
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
        >
          {isFavorite ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-md flex items-center space-x-1">
          <CameraIcon className="h-4 w-4" />
          <span className="text-sm">{property.photos}</span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="flex items-center text-gray-600 mb-2">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {property.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <HomeIcon className="h-4 w-4" />
            <span className="text-sm">{property.rooms} pièces</span>
          </div>
          <div className="text-sm">{property.surface} m²</div>
          {property.bedrooms && (
            <div className="text-sm">{property.bedrooms} ch.</div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            {property.price.toLocaleString('fr-FR')} €
            {property.type === 'Location' && <span className="text-sm text-gray-600">/mois</span>}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;