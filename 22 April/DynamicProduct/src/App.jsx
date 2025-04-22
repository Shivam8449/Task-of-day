import { useState, useEffect, useMemo } from 'react';
import useProducts from './hooks/useProducts';
import ProductCard from './components/ProductCard';
import './App.css';

export default function App() {
  const products = useProducts();
  const [favs, setFavs] = useState(() => JSON.parse(localStorage.getItem('productFavs')) || []);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    localStorage.setItem('productFavs', JSON.stringify(favs));
  }, [favs]);

  const toggleFav = (id) => {
    setFavs((prev) => (prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]));
  };

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [products, search, sortOrder]);

  return (
    <div className="container">
      <header className="header">
        <h1>🛍️ Product List</h1>
        <span className="badge">❤️ {favs.length}</span>
      </header>

      <div className="controls">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFav={favs.includes(product.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
}
