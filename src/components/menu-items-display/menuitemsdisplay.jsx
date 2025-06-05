import React, { useState, useEffect } from 'react';
import { getEntireMenuData } from '../../services/api';

const filterOptions = [
  { label: "All", key: "All" },
  { label: "Vegetarian", key: "isVegetarian" },
  { label: "Vegan", key: "isVegan" },
  { label: "Gluten Free", key: "isGlutenFree" },
  { label: "Chef's Choice", key: "isChefRecommended" },
  { label: "Today's Special", key: "isTodaySpecial" },
];

export default function MenuItemsDisplay() {
  const [allMenuItems, setAllMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenu = async () => {
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
        setAllMenuItems(flatItems);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to load menu items.');
        setAllMenuItems([]);
      } finally {
        setLoading(false);
      }
    };
    loadMenu();
  }, []);

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredItems(allMenuItems);
    } else {
      setFilteredItems(allMenuItems.filter(item => item[selectedFilter] === true));
    }
  }, [selectedFilter, allMenuItems]);

  if (loading) {
    return <div className="text-center py-20">Loading items...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="w-full flex flex-col items-center py-12 md:py-20 px-4">
      <div className="mb-10 sm:mb-12 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
        {filterOptions.map(filter => (
          <button
            key={filter.key}
            onClick={() => setSelectedFilter(filter.key)}
            className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50
              ${selectedFilter === filter.key
                ? 'bg-orange-600 text-white transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-gray-400'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 && !loading && (
        <p className="text-gray-600 text-lg">No items match your current filter.</p>
      )}

      <div className="w-full container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-0 sm:px-6 lg:px-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="border bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl">
            <img 
              src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
              alt={item.name} 
              className="w-full h-56 object-cover" 
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
              <p className="text-lg font-bold text-orange-600 mb-4">${item.price.toFixed(2)}</p>
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
    </div>
  );
}