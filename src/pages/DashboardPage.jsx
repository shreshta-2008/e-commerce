import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function DashboardPage({
  cartCount,
  onAddToCart,
  onLogout
}) {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🪄 WizardMart</h1>

        <div className="header-actions">
          <span>🛒 Spells: {cartCount}</span>
          <button className="logout-btn" onClick={onLogout}>
            Exit Hogwarts
          </button>
        </div>
      </header>

      <div className="product-grid">
        {products.map(item => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
