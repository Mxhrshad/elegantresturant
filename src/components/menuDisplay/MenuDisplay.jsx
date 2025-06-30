import { useState } from "react";
import ProductItem from "../ProductItem/ProductIem";

const filterOptions = [
  { label: "All", key: "All" },
  { label: "Vegetarian", key: "isVegetarian" },
  { label: "Vegan", key: "isVegan" },
  { label: "Gluten Free", key: "isGlutenFree" },
  { label: "Chef's Choice", key: "isChefRecommended" },
  { label: "Today's Special", key: "isTodaySpecial" },
];

const categoryOrder = [
  { key: "appetizers", label: "Appetizers" },
  { key: "main", label: "Main Courses" },
  { key: "desserts", label: "Desserts" },
  { key: "beverages", label: "Beverages" },
];

export default function MenuDisplay({ menuData }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Helper to filter items
  const filterItems = (items) => {
    if (!Array.isArray(items)) return [];
    return items.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesFilter =
        filter === "All" ? true : item[filter];
      return matchesSearch && matchesFilter;
    });
  };

  return (
    <div className="w-full flex flex-col items-center py-8 px-2">
      {/* Search bar */}
      <div className="w-full max-w-xl mb-6">
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filterOptions.map(opt => (
          <button
            key={opt.key}
            onClick={() => setFilter(opt.key)}
            className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500
              ${filter === opt.key
                ? 'bg-orange-600 text-white scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 hover:border-gray-400'
              }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {/* Categorized Items */}
      <div className="w-full">
        {categoryOrder.map(category => {
          const items = filterItems(menuData[category.key]);
          if (!items || items.length === 0) return null;
          return (
            <div key={category.key} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-orange-700 text-center">{category.label}</h2>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                  <ProductItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
        {/* If no items in any category */}
        {categoryOrder.every(category => !filterItems(menuData[category.key]).length) && (
          <div className="text-gray-600 text-lg py-12 text-center">No menu items found.</div>
        )}
      </div>
    </div>
  );
}