import { useState, useEffect } from 'react';
import { getEntireMenuData } from '../../services/api';
import ProductItem from '../ProductItem/ProductIem';




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
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}