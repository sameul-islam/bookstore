import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiShoppingBag } from "react-icons/gi";
import CartDrawer from "./CartDrawer";

const ProductPage = () => {
  const { filteredBooks, addToCart, cartCount } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [booksToShow, setBooksToShow] = useState(filteredBooks);

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [languageFilter, setLanguageFilter] = useState("All");
  const [inStockFilter, setInStockFilter] = useState(null);


  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    let tempBooks = filteredBooks;

    if (searchTerm) {
      tempBooks = tempBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== "All") {
      tempBooks = tempBooks.filter((book) => book.category === categoryFilter);
    }

    if (ratingFilter > 0) {
      tempBooks = tempBooks.filter((book) => book.rating >= ratingFilter);
    }

    if (languageFilter !== "All") {
      tempBooks = tempBooks.filter((book) => book.language === languageFilter);
    }

    if (inStockFilter !== null) {
      tempBooks = tempBooks.filter((book) => book.inStock === inStockFilter);
    }

    tempBooks = tempBooks.filter(
      (book) => book.price >= priceRange[0] && book.price <= priceRange[1]
    );

    setBooksToShow(tempBooks);
  }, [
    filteredBooks,
    searchTerm,
    categoryFilter,
    ratingFilter,
    languageFilter,
    inStockFilter,
    priceRange,
  ]);

  return (
    <div className="flex flex-col md:flex-row max-w-[98%] md:max-w-[85%] mx-auto mt-8 mb-8 gap-6 relative">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
        <h2 className="text-lg font-bold mb-4">Filters</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 mb-4 dark:bg-gray-700 dark:text-white"
        />

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option>All</option>
            <option>Discipline</option>
            <option>Horror</option>
            <option>Love</option>
            <option>Motivation</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">
            Price Range (${priceRange[0]} - ${priceRange[1]})
          </h3>
          <input
            type="range"
            min={0}
            max={50}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full "
          />
        </div>

        {/* Rating Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Minimum Rating</h3>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option value={0}>All</option>
            <option value={4}>4 & above</option>
            <option value={4.5}>4.5 & above</option>
            <option value={5}>5</option>
          </select>
        </div>

        {/* Language Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Language</h3>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option>All</option>
            <option>English</option>
          </select>
        </div>

        {/* Stock Filter */}
        <div>
          <h3 className="font-semibold mb-2">Availability</h3>
          <select
            value={
              inStockFilter === null
                ? "All"
                : inStockFilter
                ? "In Stock"
                : "Out of Stock"
            }
            onChange={(e) => {
              const val = e.target.value;
              if (val === "All") setInStockFilter(null);
              else if (val === "In Stock") setInStockFilter(true);
              else setInStockFilter(false);
            }}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            <option>All</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Books Grid */}
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksToShow.map((book) => (
          <div
            key={book.id}
            className="bg-white dark:bg-gray-700 rounded-md shadow-md overflow-hidden flex flex-col justify-between h-[360px]"
          >
            <div className="h-[240px] w-full flex items-center justify-center p-2 bg-gray-100 dark:bg-gray-800">
              <img
                src={book.image}
                alt={book.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <h4 className="font-semibold text-sm md:text-base">{book.title}</h4>
              <p className="text-gray-500 text-xs">{book.author}</p>
              <p className="mt-1 font-semibold text-orange-600">${book.price}</p>
              <div className="mt-auto flex items-center justify-between">
                <button
                  onClick={() => addToCart(book)}
                  className="bg-orange-500 text-white px-3 py-1 rounded-md flex items-center gap-2 hover:bg-orange-600 transition-colors"
                >
                  <HiOutlineShoppingCart /> Add
                </button>
                <span className="text-gray-400 text-xs">{book.rating}⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Floating Cart Icon + Drawer */}
      {!isCartOpen && (
        <div
          onClick={() => setIsCartOpen(true)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 md:right-10 z-50 cursor-pointer"
        >
          <div className="relative">
            <GiShoppingBag className="text-4xl md:text-5xl text-orange-500" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      )}

      {/* ✅ Drawer Component */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default ProductPage;
