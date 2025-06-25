import React, { useState, useEffect } from 'react';
import { getMainCourses } from '../../services/api';

export default function MainCoursesSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await getMainCourses();
        setItems(data || []);
      } catch (err) {
        setError(err.message || 'Failed to load main courses.');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="text-center py-40">Loading Main Courses...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="bg-white border rounded-xl shadow-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl">
                <img src={item.image || 'https://via.placeholder.com/400x300?text=No+Image'} alt={item.name} className="w-full h-56 object-cover" />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
                  <p className="text-xl font-bold text-orange-600 mb-4">${item.price.toFixed(2)}</p>
                  <div className="text-xs space-y-1">
                    {item.isVegetarian && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full">Vegetarian</span>}
                    {item.isVegan && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-teal-100 text-teal-800 rounded-full">Vegan</span>}
                    {item.isGlutenFree && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Gluten-Free</span>}
                    {item.isChefRecommended && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">Chef's Pick</span>}
                    {item.isTodaySpecial && <span className="mr-2 mb-1 inline-block px-2 py-1 bg-red-100 text-red-800 rounded-full">Today's Special</span>}
                  </div>
                  {item.rating && <p className="text-xs text-gray-500 mt-3">Rating: {item.rating}/5.0</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No main courses are available at the moment.</p>
        )}
      </div>
    </>
  );
}