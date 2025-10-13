import React from 'react'
import BooksSatck from '../../assets/website/library.mp4';
import Vector from '../../assets/vector3.png';
import { GrInfo, GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  };

  const infoBlocks = [
    { icon: <GrSecure />, text: 'Quality Books', bg: 'bg-violet-100 dark:bg-violet-400' },
    { icon: <IoFastFood />, text: 'Fast Delivery', bg: 'bg-orange-100 dark:bg-orange-400' },
    { icon: <GiFoodTruck />, text: 'Easy Payment Method', bg: 'bg-green-100 dark:bg-green-400' },
    { icon: <GrInfo />, text: 'Get Offers on Books', bg: 'bg-yellow-100 dark:bg-yellow-400' },
  ];

  return (
    <div className='min-h-[550px] relative' style={bgImage}>
      <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 relative'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            
            {/* Left: Video */}
            <div className='w-full md:w-1/2 flex justify-center'>
              <video 
                src={BooksSatck} 
                autoPlay 
                loop 
                muted 
                className='w-[300px] sm:w-[400px] md:w-full md:max-w-[450px] h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-md shadow-lg'
              />
            </div>

            {/* Right: Text + Animated Info blocks */}
            <div className='w-full md:w-1/2 flex flex-col gap-6'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left'>
                Welcome to our Library
              </h1>
              <p className='text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-6 text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, impedit facere. Porro deleniti nisi dolorem dolor neque perferendis inventore et commodi fuga aperiam, eum, beatae, quos odio alias illo quis.
              </p>

              {/* Animated Info blocks */}
              <div className='grid grid-cols-2 md:grid-cols-1 gap-4 mt-4'>
                {infoBlocks.map((block, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer ${block.bg}`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className='text-4xl'>{block.icon}</div>
                    <p className='font-semibold'>{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> {/* flex row */}
        </div>
      </div>
    </div>
  )
}

export default Banner
