import React from 'react'
import AppStoreImg from '../../assets/app_store.png';
import PlayStoreImg from '../../assets/play_store.png';
import Banner from '../../assets/website/board.png';

const bannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: "no-repeat",
    backgroundSize: 'cover',
    height: '100%',
    width: "100%",
};

const AppStore = () => {
  return (
    <div className='  text-orange-700 py-10' style={bannerImg}>
      <div className='container mx-auto '>
        <div data-aos="fade-up" data-aos-duration='300' className='mx-auto space-y-6 max-w-xl ' >
            <h1 className='text-2xl text-center sm:text-4xl font-semibold'>
                Download Now!
            </h1>
            <div className='flex flex-wrap justify-center sm:gap-10 md:gap-x-14 items-center'>
              {/* Play Store Link */}
              <a 
                href="https://play.google.com/store/apps/details?id=your_app_id" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={PlayStoreImg} alt="Play Store" className='max-w-[150px] hover:scale-105 duration-300 sm:max-w-[120px] md:max-w-[200px]' />
              </a>

              {/* App Store Link */}
              <a 
                href="https://apps.apple.com/app/id_your_app_id" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={AppStoreImg} alt="App Store" className='max-w-[150px] hover:scale-105 duration-300 sm:max-w-[120px] md:max-w-[200px]' />
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore;

