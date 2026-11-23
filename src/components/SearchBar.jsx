
import "./SearchBar.css";

function SearchBar({
  searchText,
  setSearchText,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  onClearFilters
}) {
  return (
    <div className="search-bar">

      {/* Search input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Category dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="School Supplies">School Supplies</option>
        <option value="Accessories">Accessories</option>
      </select>

      {/* Sorting dropdown */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>

      {/* Clear button */}
      <button onClick={onClearFilters}>
        Clear Filters
      </button>

    </div>
  );
}

export default SearchBar;
