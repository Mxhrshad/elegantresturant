import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getEntireMenuData } from "../../services/api";

export default function Product() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchItem() {
      const data = await getEntireMenuData();
      let found = null;
      Object.values(data).forEach(arr => {
        if (Array.isArray(arr)) {
          const match = arr.find(i => String(i.id) === String(id));
          if (match) found = match;
        }
      });
      setItem(found);
      setLoading(false);
    }
    fetchItem();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-500 animate-pulse">Loading...</div>;
  if (!item) return <div className="text-center py-20 text-red-500 font-semibold">Item not found.</div>;

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center py-12 px-6 md:px-12 lg:px-20 bg-gray-50 min-h-screen">
      <div className="w-full md:w-1/2 max-w-md flex-shrink-0 mb-8 md:mb-0 md:ml-10">
        <img
          src={item.image || "https://via.placeholder.com/600x400?text=No+Image"}
          alt={item.name}
          className="w-full h-72 object-cover rounded-2xl shadow-md transition-transform transform hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 max-w-xl bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 border-b pb-2">{item.name}</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{item.description}</p>
        <p className="text-2xl font-bold text-orange-500 mb-6">${item.price?.toFixed(2)}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {item.isVegetarian && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium shadow-sm">Vegetarian</span>
          )}
          {item.isVegan && (
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium shadow-sm">Vegan</span>
          )}
          {item.isGlutenFree && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">Gluten-Free</span>
          )}
          {item.isChefRecommended && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium shadow-sm">Chef's Pick</span>
          )}
          {item.isTodaySpecial && (
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium shadow-sm">Today's Special</span>
          )}
        </div>
        {item.rating && (
          <div className="flex items-center mt-4">
            <span className="text-sm text-gray-500 mr-2">Rating:</span>
            <span className="text-base font-semibold text-orange-500">{item.rating}/5.0</span>
          </div>
        )}
      </div>
    </div>
  );
}
