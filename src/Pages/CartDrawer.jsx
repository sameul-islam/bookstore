import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useContext(CartContext);

  // Body scroll বন্ধ করা
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-100 dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-2xl text-gray-700 dark:text-white">
            <IoMdClose/>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-3"
              >
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-gray-700 dark:text-gray-200">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total & Checkout */}
        <div className="p-4 border-t border-gray-300 dark:border-gray-700">
          <div className="flex justify-between font-semibold text-gray-700 dark:text-gray-200 mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
