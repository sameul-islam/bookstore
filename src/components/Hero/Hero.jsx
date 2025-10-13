import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Book1 from '../../assets/books/book2.jpg'
import Book2 from '../../assets/books/book1.jpg'
import Book3 from '../../assets/books/book3.jpg'
import Vector from '../../assets/website/orange-pattern.png'

const ImageList = [
    {
        id: 1,
        img:Book1,
        title: "Life Changed",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos illo amet ab dolorum libero ad laboriosam dolore dolorem alias, labore temporibus nam iure! Consequatur quisquam architecto doloribus minus minima!',
    },
    {
        id: 2,
        img: Book2,
        title: "Journy of Love",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam suscipit magni quisquam deleniti nihil, voluptate similique alias accusantium sed maxime officiis.',
    },
    {
        id: 3,
        img: Book3,
        title: "Lost Boy",
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo reiciendis, ducimus nihil deserunt cumque omnis modi nostrum exercitationem enim?'
    },
];

const Hero = () => {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("Life Changed");
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos illo amet ab dolorum libero ad laboriosam dolore dolorem alias, labore temporibus nam iure! Consequatur quisquam architecto doloribus minus minima!');

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
    };

  return (
    <div className='min-h-[650px] sm:min-h-[770px] relative bg-white text-white w-fit flex justify-center items-center dark:bg-gray-950 duration-200' style={bgImage}>
        {/* overlay */}
        <div className='absolute inset-0 bg-black/70'></div>
         <div className=' relative z-10 container pb-8 sm:pb-0'>
             <div className='grid grid-cols-1 sm:grid-cols-2'>
                 {/* text content section */}
                 <div data-aos-once="true" className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1' >
                       <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-5xl sm:text-6xl lg:text-7xl font-bold' >
                               {title}
                               <p className='bg-clip-text  text-white text-center p-3 md:text-right  text-sm '>
                                by Anonymous
                               </p>
                       </h1>
                       <p data-aos='slide-up' data-aos-duration='500' data-aos-delay='100' className='text-sm text-white ' >
                                   {description}
                       </p>
                       <div>

                           <Link to="/products">
                             <button data-aos='zoom-in' className='bg-gradient-to-r from-primary to-secondary hover: text-gray-700 cursor-pointer font-semibold  py-2 md:mt-4 px-4 rounded-full transition-all duration-500 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'>
                                      Shop Now
                             </button>
                           </Link>
                       </div>
                 </div>
                 {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[550px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden md:min-h-[550px] flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duration="1000"
                  src={imageId}
                  alt="Books"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] ease-in-out transition-transform duration-500 object-contain mx-auto"
                />
              </div>
              <div className='flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full'>
                {ImageList.map((item) => (
                  <img data-aos="zoom-in" data-aos-once="true" src={item.img} onClick={() => {
                    setImageId(
                      item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                    );
                    setTitle(item.title);
                    setDescription(item.description);
                  }} alt="Books" className='max-w-[100px] h-[100px] object-contain inline-block hover:shadow-[0_0_26px_rgba(255,255,255,.9)] duration-200' />
                ))}
              </div>
            </div>
         </div>
    </div>
</div>
  )
}

export default Hero





