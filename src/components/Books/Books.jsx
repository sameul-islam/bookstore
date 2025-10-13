import React from 'react'
import { Link } from 'react-router-dom'
import Book1 from '../../assets/books/book7.jpg';
import Book2 from '../../assets/books/book8.jpg';
import Book3 from '../../assets/books/book9.jpg';
import Book4 from '../../assets/books/book10.jpg';
import Book5 from '../../assets/books/book11.jpg';
import { FaStar } from 'react-icons/fa';

const booksData = [
  { id: 1, img: Book1, title: 'Discipline', rating: 5.0, author: 'Anonymous' },
  { id: 2, img: Book2, title: "Love", rating: 4.5, author: "Anonymous" },
  { id: 3, img: Book3, title: "Power", rating: 4.7, author: "Anonymous" },
  { id: 4, img: Book4, title: "Horror", rating: 4.4, author: "Anonymous" },
  { id: 5, img: Book5, title: "Motivation", rating: 5.0, author: "Anonymous" },
];

const Books = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container m-auto'>
        {/* header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-gray-800 font-Roboto dark:text-gray-300'>
            Top Books for you.
          </p>
          <h1 className='text-3xl font-bold'>
            Top <span className='text-amber-700 dark:text-amber-400'>Books</span>
          </h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
            et ex delectus ipsa dicta, repellat quis rerum consectetur.
          </p>
        </div>

        {/* Body section */}
        <div className=''>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center'>
            {booksData.map(({ id, img, title, rating, author }) => (
              <div
                key={id}
                className='space-y-3 shadow-md hover:shadow-2xl  dark:bg-gray-950 dark:hover:shadow-gray-600 rounded-md p-3 duration-300'
              >
                <img
                  src={img}
                  alt="Books"
                  className='hover:scale-105 duration-300 h-[220px] w-[150px] object-cover rounded-md mx-auto'
                />
                <div className='text-center space-y-1'>
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='text-sm text-gray-700 dark:text-gray-300'>{author}</p>
                  <div className='flex justify-center items-center gap-1'>
                    <FaStar className='text-amber-500' />
                    <span className='text-sm font-medium'>{rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <Link
              to="/products"
              className='hover:scale-105 duration-300 mt-10 cursor-pointer bg-amber-800 text-white py-2 px-6 rounded-md font-medium inline-block'
            >
              View All Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
