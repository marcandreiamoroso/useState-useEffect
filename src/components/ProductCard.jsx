import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      {children}

      <h2>{title}</h2>

      <p className="category">{category}</p>

      <h3>
        ₱
        {price.toLocaleString("en-PH", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h3>

      {inStock ? (
        <span className="stock available">In Stock</span>
      ) : (
        <span className="stock unavailable">Out of Stock</span>
      )}

      <button onClick={() => onAddToCart(title)} disabled={!inStock}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
