import React from 'react';
import { Link } from 'react-router-dom'; // React Router import
import Img1 from '../../assets/books/book4.jpg';
import Img2 from '../../assets/books/book5.jpg';
import Img3 from '../../assets/books/book6.jpg';
import { FaStar } from 'react-icons/fa';

const ServicesData = [
    { id: 1, img: Img1, title: "Discipline", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum cum provident ex sapiente dolore facilis, tempore obcaecati.' },
    { id: 2, img: Img2, title: "Motivation", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum cum provident ex sapiente dolore facilis, tempore obcaecati.' },
    { id: 3, img: Img3, title: "Horror", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum cum provident ex sapiente dolore facilis, tempore obcaecati.' },
];

const Services = () => {
  return (
    <div className='py-10'>
      <div className='container mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-gray-800 font-Roboto dark:text-gray-300'>Trending Books</p>
          <h1 className='text-3xl font-bold'>Best <span className='text-amber-700 dark:text-amber-400'>Books</span></h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, illum cum provident ex sapiente dolore facilis, tempore obcaecati.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {ServicesData.map((service) => (
            <div key={service.id} data-aos="zoom-in" className='rounded-2xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 relative shadow-xl transition-all duration-300 ease-in-out group max-w-[300px]'>
              
              {/* Book Image */}
              <div className='h-[100px]'>
                <img src={service.img} alt={service.title} className='max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105 duration-300 shadow-md' />
              </div>

              {/* Text & Button */}
              <div className='p-4 text-center'>
                <div className='w-full flex items-center justify-center gap-1'>
                  <FaStar className='text-amber-400'/>
                  <FaStar className='text-amber-400'/>
                  <FaStar className='text-amber-400'/>
                  <FaStar className='text-amber-400'/>
                  <FaStar className='text-amber-400'/>
                </div>
                <h1 className='text-xl font-bold'>{service.title}</h1>
                <p className='text-gray-600 dark:text-gray-200 dark:group-hover:text-gray-900 group-hover:text-white duration-high text-sm line-clamp-2'>
                  {service.description}
                </p>

                {/* React Router DOM Link */}
                <Link 
                  to="/products"
                  className='bg-[#ff793f] hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-[#cd6133] group-hover:text-white inline-block'
                >
                  Order Now
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
