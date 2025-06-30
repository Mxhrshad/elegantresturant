import { useState, useEffect } from 'react';
import { getDesserts } from '../../services/api';
import ProductItem from '../ProductItem/ProductIem';

export default function DessertsSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await getDesserts();
        setItems(data || []);
      } catch (err) {
        setError(err.message || 'Failed to load desserts.');
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <div className="text-center py-40">Loading Desserts...</div>;
  }

  if (error) {
    return <div className="text-center py-40 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <ProductItem key={item.id || idx} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">No desserts are available at the moment.</p>
        )}
      </div>
    </>
  );
}