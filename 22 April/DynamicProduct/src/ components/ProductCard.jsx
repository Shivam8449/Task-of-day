import './ProductCard.css';

export default function ProductCard({ product, isFav, toggleFav }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price.toFixed(2)}</p>
      <button
        className={`fav-btn ${isFav ? 'active' : ''}`}
        onClick={() => toggleFav(product.id)}
        aria-label="Toggle Favourite"
      >
        ❤️
      </button>
    </div>
  );
}
