import React, { useState, useEffect } from 'react';
import { getEntireMenuData } from '../../services/api';

const INITIAL_DISPLAY_COUNT = 3;

export default function ChefsRecommendations() {
  const [allChefPicks, setAllChefPicks] = useState([]);
  const [displayedPicks, setDisplayedPicks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setLoading(true);
        const data = await getEntireMenuData();
        let flatItems = [];
        if (data) {
          Object.values(data).forEach(categoryItems => {
            if (Array.isArray(categoryItems)) {
              flatItems = flatItems.concat(categoryItems);
            }
          });
        }
        const recommended = flatItems.filter(item => item.isChefRecommended);
        setAllChefPicks(recommended);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load chef recommendations.');
        setAllChefPicks([]);
      } finally {
        setLoading(false);
      }
    };
    loadRecommendations();
  }, []);

  useEffect(() => {
    const countToDisplay = showAll ? allChefPicks.length : INITIAL_DISPLAY_COUNT;
    setDisplayedPicks(allChefPicks.slice(0, countToDisplay));
  }, [allChefPicks, showAll]);

  const handleToggleDisplay = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  if (loading) {
    return (
      <section className="bg-gray-900 w-full py-20 flex flex-col justify-center items-center min-h-[300px]">
        <p className="text-white">Loading recommendations...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-gray-900 w-full py-20 flex flex-col justify-center items-center min-h-[300px]">
        <p className="text-red-400">Error: {error}</p>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 w-full py-16 md:py-20 flex flex-col items-center px-4">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold chefsrecommendationsh2 text-center">
        Chef's Recommendations
      </h2>
      <div className="w-20 h-1 mt-3 sm:mt-4 bg-orange-600 rounded"></div>
      <p className="text-gray-300 max-w-xl lg:max-w-2xl mx-auto text-center mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed chefsrecommendationsp">
        Our executive chef's personally selected favorites, representing the pinnacle of our culinary artistry.
      </p>

      {allChefPicks.length === 0 && !loading && (
        <p className="text-gray-400 text-lg mt-12">No chef recommendations available at the moment.</p>
      )}

      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-0 sm:px-6 lg:px-8">
        {displayedPicks.map((item) => (
          <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-orange-500/30 hover:border-orange-500/50 transform hover:-translate-y-1">
            <img 
              src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
              alt={item.name} 
              className="w-full h-64 object-cover" 
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
              <p className="text-xl font-semibold text-orange-500 mb-4">${item.price.toFixed(2)}</p>
              <div className="text-xs space-y-1 text-gray-300">
                {item.isVegetarian && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-green-600/30 text-green-300 rounded-full">Vegetarian</span>}
                {item.isGlutenFree && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-blue-600/30 text-blue-300 rounded-full">Gluten-Free</span>}
                {item.isVegan && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-teal-600/30 text-teal-300 rounded-full">Vegan</span>}
              </div>
              {item.rating && <p className="text-xs text-gray-500 mt-3">Rating: {item.rating}/5.0</p>}
            </div>
          </div>
        ))}
      </div>

      {allChefPicks.length > INITIAL_DISPLAY_COUNT && (
        <div className="mt-12 text-center">
          <button
            onClick={handleToggleDisplay}
            className="px-8 py-3 bg-orange-600 text-white text-base font-semibold rounded-lg shadow-md hover:bg-orange-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            {showAll ? "Show Fewer Recommendations" : "Show All Recommendations"}
          </button>
        </div>
      )}
    </section>
  );
}