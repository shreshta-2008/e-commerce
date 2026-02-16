export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>🪙 {product.price} Galleons</p>
      <button onClick={onAddToCart}>Cast Spell</button>
    </div>
  );
}
