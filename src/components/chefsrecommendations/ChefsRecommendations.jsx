import { useState, useEffect } from 'react';
import { getEntireMenuData } from '../../services/api';
import ProductItem from '../ProductItem/ProductIem';


const INITIAL_DISPLAY_COUNT = 3;

export default function ChefsRecommendations() {
  const [chefsPicks, setChefsPicks] = useState([]);
  const [displayedPicks, setDisplayedPicks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChefsPicks = async () => {
      setLoading(true);
      const data = await getEntireMenuData();
      let picks = [];
      if (data) {
        Object.values(data).forEach(categoryItems => {
          if (Array.isArray(categoryItems)) {
            picks = picks.concat(categoryItems.filter(item => item.isChefRecommended));
          }
        });
      }
      setChefsPicks(picks);
      setDisplayedPicks(picks.slice(0, INITIAL_DISPLAY_COUNT));
      setLoading(false);
    };
    loadChefsPicks();
  }, []);

  const handleShowMore = () => {
    setDisplayedPicks(chefsPicks);
  };

  if (loading) {
    return <div className="text-center py-20">Loading chef's recommendations...</div>;
  }

  if (chefsPicks.length === 0) {
    return <div className="text-center py-20 text-gray-600">No chef's recommendations available.</div>;
  }

  return (
    <div className="w-full container mx-auto flex flex-col items-center py-12 md:py-20 px-4 bg-gray-900">
      <h2 className="text-2xl font-bold mb-8 text-white">Chef's Recommendations</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPicks.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      {displayedPicks.length < chefsPicks.length && (
        <button
          onClick={handleShowMore}
          className="mt-8 px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
        >
          Show More
        </button>
      )}
    </div>
  );
}