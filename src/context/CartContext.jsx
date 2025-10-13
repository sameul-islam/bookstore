



// import React, { createContext, useState } from "react";
// import { books as allBooks } from '../Books';

// export const CartContext = createContext();

//  const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState(allBooks);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const addToCart = (book) => {
//     setCartItems((prev) => [...prev, book]);
//   };

//   const filterByCategory = (category) => {
//     setSelectedCategory(category);
//     if (category === "All") {
//       setFilteredBooks(allBooks);
//     } else {
//       const filtered = allBooks.filter((book) => book.category === category);
//       setFilteredBooks(filtered);
//     }
//   };

//   const cartCount = cartItems.length;

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         cartCount,
//         filteredBooks,
//         filterByCategory,
//         selectedCategory,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;






import React, { createContext, useState } from "react";
import { books as allBooks } from '../Books';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState(allBooks);
  const [selectedCategory, setSelectedCategory] = useState("All");


  const addToCart = (book) => {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === book.id);
      if (existingItem) {
 
        return prev.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
   
        return [...prev, { ...book, quantity: 1 }];
      }
    });
  };


  const decreaseQuantity = (bookId) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === bookId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };


  const increaseQuantity = (bookId) => {
    setCartItems((prev) =>
      prev.map(item =>
        item.id === bookId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  const removeFromCart = (bookId) => {
    setCartItems((prev) => prev.filter(item => item.id !== bookId));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

 
  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBooks(allBooks);
    } else {
      const filtered = allBooks.filter((book) => book.category === category);
      setFilteredBooks(filtered);
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        totalPrice,
        filteredBooks,
        filterByCategory,
        selectedCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
