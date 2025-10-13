import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import { HiOutlineShoppingBag, HiOutlineUserCircle } from 'react-icons/hi2';
import DarkMode from './DarkMode';
import Drawer from './DrawerMenu';
import { CartContext } from '../../context/CartContext';
import CartDrawer from '../../Pages/CartDrawer';

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

const Navbar = () => {
  const { filterByCategory, selectedCategory, cartCount } = useContext(CartContext); 

  const [isCartOpen, setIsCartOpen] = useState(false);

  const location = useLocation();

  const isActive = (link) => {
    return location.pathname === link;
  };

  return (
    <>
    <div className='shadow-md bg-[#d2dae2]/95 dark:bg-gray-800/95 dark:text-white duration-200 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-5 flex justify-between items-center'>
        
        {/* Logo */}
        <div className='justify-center items-center'>
          <Link to="/">
            <img src='/logos.png' alt="Logo" className='w-20  md:w-24 lg:w-28' />
          </Link>
        </div>

        {/* Menu */}
        <div className='flex items-center'>
          <ul className='hidden md:flex items-center md:gap-8 lg:gap-12 md:text-nowrap '>
            {Menu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className={`relative font-semibold ${
                    isActive(menu.link) ? 'text-orange-600 after:w-full' : 'hover:text-orange-600 after:w-0'
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-orange-600 after:transition-all after:duration-300`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}

            {/* Category Dropdown */}
            <li className='group relative cursor-pointer'>
              <span className='flex h-[72px] items-center gap-[2px] hover:text-orange-600 duration-200 font-semibold '>
                CATEGORY <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
              <div className='absolute -left-9 z-[9999] hidden w-[160px] rounded-md bg-gray-100 dark:bg-gray-800 shadow-md p-3 dark:text-gray-100 text-gray-500 font-semibold group-hover:block'>
                <ul className='space-y-2'>
                  {Dropdown.map((data) => (
                    <li key={data.name}>
                      <Link
                        to="/products"
                        onClick={() => filterByCategory(data.category)}
                        className={`block w-full rounded-md p-1.5 duration-200 ${
                          selectedCategory === data.category
                            ? 'bg-orange-500 text-white'
                            : 'hover:bg-gray-300 hover:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
                        }`}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Cart & Sign In */}
          <div className='hidden md:flex gap-8 ml-[50px]'>

            <div className='hidden md:flex items-center gap-8 ml-8'>
              <button className='relative group flex items-center' onClick={() => setIsCartOpen(true)}>
                <HiOutlineShoppingBag className='text-2xl text-gray-700 dark:text-gray-200 group-hover:text-orange-500 duration-200 cursor-pointer' />
                {cartCount > 0 && ( 
                  <span className='absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full px-[6px] py-[1px] font-semibold'>
                    {cartCount}
                  </span>
                )}
              </button>
              <Link
                to="/signin"
                className='flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-orange-500 transition-colors duration-200 font-semibold'
              >
                <HiOutlineUserCircle className='text-2xl' />
                Sign In
              </Link>
            </div>

          </div>
        </div>

        {/* Dark Mode & Drawer */}
        <div className='flex gap-1 justify-between items-center'>
          <div className='w-10 md:w-12'>
            <DarkMode />
          </div>
          <Drawer />
        </div>
      </div>
    </div> 
    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;









