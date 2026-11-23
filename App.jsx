
import { useState, useEffect } from "react";

import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import products from "@/data/products";

import "./App.css";

function App() {

  // Cart state from Laboratory Exercise 3
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Search and filter states
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");


  // Add to cart function
  function handleAddToCart(productTitle) {
    setCartCount((previousCount) => previousCount + 1);
    setLastAdded(productTitle);
  }


  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 300);

    return () => clearTimeout(timer);

  }, [searchText]);


  // Filter products by keyword
  const matchingProducts = products.filter((product) => {
    return product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
  });


  // Filter products by category
  const categoryFilteredProducts = matchingProducts.filter((product) => {
    return category === "All" || product.category === category;
  });


  // Sort products by price without modifying original data
  const filteredProducts = [...categoryFilteredProducts];

  if (sortOrder === "low-to-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }


  // Update browser tab title
  useEffect(() => {
    document.title = `CvSU Mini Store (${filteredProducts.length} results)`;
  }, [filteredProducts.length]);


  // Clear all filters
  function handleClearFilters() {
    setSearchText("");
    setDebouncedSearch("");
    setCategory("All");
    setSortOrder("default");
  }


  return (
    <div className="app">

      {/* Header */}
      <header>
        <h1>CvSU Mini Store</h1>
        <p>Your one-stop mini shopping catalog</p>
      </header>


      {/* Cart message */}
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


      {/* Search and filter component */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onClearFilters={handleClearFilters}
      />


      {/* Product result count */}
      <div className="result-count">
        Showing <strong>{filteredProducts.length}</strong> of{" "}
        <strong>{products.length}</strong> products
      </div>


      {/* Product list */}
      {filteredProducts.length > 0 ? (

        <div className="product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={handleAddToCart}
            >

              {/* Children examples */}
              {product.id === 1 && (
                <span className="badge new-badge">NEW</span>
              )}

              {product.id === 5 && (
                <span className="badge sale-badge">SALE</span>
              )}

            </ProductCard>
          ))}

        </div>

      ) : (

        <div className="empty-state">
          <h2>No products found.</h2>
          <p>Try a different keyword or category.</p>
        </div>

      )}

    </div>
  );
}

export default App;
