import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Banner from "../assets/website/bestsellerhero.jpg";



const BestSellerPage = () => {
  const { addToCart, filteredBooks } = useContext(CartContext);

  const bestSellers = filteredBooks
    .filter((book) => book.rating >= 4.5)
    .slice(0, 18); 

  const topThree = bestSellers.slice(0, 3);
  const others = bestSellers.slice(3);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const bannerImg = {
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: '100%',
        width: "100%",
    };

  return (
    <div className="w-[98%] md:w-[85%] mx-auto mt-10 mb-16 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl text-white text-center py-16 px-4 shadow-lg overflow-hidden">
        <h1 className="text-3xl md:text-5xl font-bold mb-4"> Best Sellers</h1>
        <p className="text-lg md:text-xl max-w-[600px] mx-auto">
          Discover the most loved books by our readers — stories that inspire,
          thrill, and captivate your heart.
        </p>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={bannerImg}></div>
      </div>

      {/* Top 3 Best Sellers */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topThree.map((book, index) => (
          <div
            key={book.id}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {index === 0
                ? "🥇 #1"
                : index === 1
                ? "🥈 #2"
                : "🥉 #3"}
            </span>

            <div className="h-[240px] flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <img
                src={book.image}
                alt={book.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.author}</p>
              <p className="mt-1 font-bold text-orange-600">${book.price}</p>
              <div className="mt-auto flex justify-between items-center">
                <button
                  onClick={() => addToCart(book)}
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <HiOutlineShoppingCart /> Add to Cart
                </button>
                <span className="text-sm text-gray-400">{book.rating}⭐</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Best Sellers Section */}
      {others.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-16 mb-6 text-center">
            More Best Sellers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {others.map((book) => (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all flex flex-col"
              >
                <div className="h-[200px] flex justify-center items-center bg-gray-100 dark:bg-gray-700">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <h4 className="font-semibold text-sm md:text-base">
                    {book.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{book.author}</p>
                  <p className="mt-1 font-semibold text-orange-600">
                    ${book.price}
                  </p>
                  <div className="mt-auto flex justify-between items-center">
                    <button
                      onClick={() => addToCart(book)}
                      className="bg-orange-500 text-white text-xs px-3 py-1 rounded-md hover:bg-orange-600 transition"
                    >
                      Add
                    </button>
                    <span className="text-gray-400 text-xs">
                      {book.rating}⭐
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BestSellerPage;
