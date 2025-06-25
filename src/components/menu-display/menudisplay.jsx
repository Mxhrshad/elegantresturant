import React, { useState, useEffect, useMemo } from 'react';
import { getEntireMenuData } from '../../services/api';

export default function MenuDisplay() {
  const [menuData, setMenuData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
      try {
        setLoading(true);
        const data = await getEntireMenuData();
        setMenuData(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load menu items.');
        setMenuData(null);
      } finally {
        setLoading(false);
      }
    };
    loadMenu();
  }, []);

  const filteredAndGroupedItems = useMemo(() => {
    if (!menuData) return {};
    
    const categoriesToFilter = selectedCategory === 'All'
      ? Object.entries(menuData)
      : [[selectedCategory, menuData[selectedCategory]]];
    
    const grouped = {};
    
    for (const [category, items] of categoriesToFilter) {
      if (!items) continue;
      
      const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (filteredItems.length > 0) {
        grouped[category] = filteredItems;
      }
    }
    
    return grouped;
  }, [menuData, searchTerm, selectedCategory]);

  const categoryKeys = menuData ? ['All', ...Object.keys(menuData)] : ['All'];

  if (loading) {
    return <div className="text-center py-20 text-xl text-gray-700">Loading menu...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-xl text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-12 md:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Explore Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A symphony of flavors awaits. Use the filters to find your perfect dish.
          </p>
        </div>

        <div className="sticky top-[80px] z-40 bg-gray-50/95 backdrop-blur-sm py-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search for a dish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
            {categoryKeys.map(categoryKey => (
              <button
                key={categoryKey}
                onClick={() => setSelectedCategory(categoryKey)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-lg shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
                  ${selectedCategory === categoryKey
                    ? 'bg-orange-600 text-white transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-gray-400'
                  }
                `}
              >
                {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {Object.keys(filteredAndGroupedItems).length === 0 && !loading && (
          <p className="text-gray-600 text-lg text-center mt-12">No dishes match your search or filter criteria.</p>
        )}
        
        <div className="space-y-16">
          {Object.entries(filteredAndGroupedItems).map(([category, items]) => (
            <section key={category}>
              <h2 className="text-3xl font-semibold mb-8 border-b-2 border-orange-500 pb-2 capitalize">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl">
                    <img 
                      src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
                      alt={item.name} 
                      className="w-full h-56 object-cover" 
                    />
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
                      <p className="text-xl font-bold text-orange-600 mb-4">${item.price.toFixed(2)}</p>
                      <div className="text-xs space-y-1">
                        {item.isVegetarian && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full">Vegetarian</span>}
                        {item.isGlutenFree && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Gluten-Free</span>}
                        {item.isVegan && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Vegan</span>}
                        {item.isChefRecommended && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Chef's Pick</span>}
                        {item.isTodaySpecial && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full">Today's Special</span>}
                      </div>
                      {item.rating && <p className="text-xs text-gray-500 mt-3">Rating: {item.rating}/5.0</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}