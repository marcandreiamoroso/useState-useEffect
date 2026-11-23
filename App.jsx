import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products";
import "@/App.css";

function App() {

  // Cart states
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback function
  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  }

  return (
    <div className="app">

      {/* Application Header */}
      <header>
        <h1>CvSU Mini Store</h1>
        <p>Your one-stop mini shopping catalog</p>
      </header>

      {/* Cart Message */}
      <div className="cart-message">
        {cartCount === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>
            Items added to cart: <strong>{cartCount}</strong>
            {" "} (Last added: <strong>{lastAdded}</strong>)
          </p>
        )}
      </div>

      {/* Product Cards */}
      <div className="product-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >

            {product.id === 1 && (
              <span className="badge new-badge">NEW</span>
            )}

            {product.id === 5 && (
              <span className="badge sale-badge">SALE</span>
            )}

          </ProductCard>
        ))}

      </div>

    </div>
  );
}

export default App;