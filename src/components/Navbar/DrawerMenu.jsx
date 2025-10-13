import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { HiOutlineShoppingBag, HiOutlineUserCircle } from "react-icons/hi2";
import DarkMode from "./DarkMode";
import { CartContext } from "../../context/CartContext";
import CartDrawer from "../../Pages/CartDrawer";

const Menu = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "BEST SELLER", link: "/bestseller" },
  { id: 3, name: "ABOUT", link: "/about" },
];

const Dropdown = [
  { name: "All Books", category: "All" },
  { name: "Motivation", category: "Motivation" },
  { name: "Love", category: "Love" },
  { name: "Discipline", category: "Discipline" },
  { name: "Horror", category: "Horror" },
];

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { filterByCategory, selectedCategory, cartCount } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const getCategoryFromName = (name) => (name === "All Books" ? "All" : name);


  const isDropdownSelected = (category) => {
    if (category === "All") return location.pathname.includes("/products");
    return location.pathname.toLowerCase().includes(category.toLowerCase());
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        className="text-3xl p-2 text-gray-700 dark:text-white"
        onClick={() => setOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-gray-100 dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700">
          <Link to="/" onClick={() => setOpen(false)}>
            <img src="/logos.png" alt="Logo" className="w-20" />
          </Link>
          <button
            className="text-3xl text-gray-700 dark:text-white"
            onClick={() => setOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex flex-col p-4 space-y-4 font-semibold">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.link}
                className="block px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setOpen(false)}
              >
                {menu.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li>
            <button
              className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setDropdown(!dropdown)}
            >
              <span>CATEGORY</span>
              <FaCaretDown className={`transition-transform ${dropdown ? "rotate-180" : ""}`} />
            </button>
            {dropdown && (
              <ul className="pl-6 mt-2 space-y-2">
                {Dropdown.map((data) => {
                  const categoryKey = getCategoryFromName(data.name);
                  const selected = selectedCategory === categoryKey || isDropdownSelected(categoryKey);
                  return (
                    <li key={data.name}>
                      <Link
                        to="/products"
                        className={`block px-3 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 ${
                          selected ? "text-orange-600" : ""
                        }`}
                        onClick={() => {
                          filterByCategory(categoryKey);
                          setOpen(false);
                        }}
                      >
                        {data.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>

        {/* Bottom Section (Cart & Sign In) */}
        <div className="mt-auto flex gap-4 p-4 border-t border-gray-300 dark:border-gray-700">
          {/* Cart */}
             <button
            className="relative flex items-center gap-3 bg-gradient-to-r from-secondary to-orange-600 text-white py-2 px-4 rounded-full justify-center"
            onClick={() => setIsCartOpen(true)} 
          >
            <HiOutlineShoppingBag className="text-xl" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-[6px] py-[1px] font-semibold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Sign In */}
          <Link
            to="/signin"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-full py-2 px-4  font-semibold bg-[#c8d6e5] text-orange-600  justify-center"
          >
            <HiOutlineUserCircle className="text-xl" />
            <span>Sign In</span>
          </Link>
        </div>
      </div>
      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default DrawerMenu;











