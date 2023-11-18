"use client"
import PropTypes from 'prop-types';

import Banner from '@/public/asset/banner-image.jpeg'
import Image from 'next/image';
import Button from '../Button';
const SectionMainBanner = () => {
  return (
    <section
      className='h-[400px] px-16 py-8 sm:px-28 sm:py-20 mt-[85px] bg-no-repeat bg-clip-border	bg-cover bg-scroll bg-center h-[400px] sm:h-[700px]'
      style={{
        backgroundImage: `url('./asset/banner-image.jpeg')`,
      }}
    >
      <div className='flex flex-col justify-center h-full'>
        <h1 className="text-[white] text-2xl sm:text-6xl font-bold">Don&#39;t Worry, <br />
          It&#39;s Organic
        </h1>
        <p className='text-[white] mt-4'>Discover the best cannabis shop in Patong! Green Mountain OG offers top-quality products and exceptional service. Visit us for a premium experience today!</p>
        <div className='mt-4 sm:mt-12'>
          <Button onClick={() => { }}>Make order</Button>
        </div>
      </div>
    </section>


  );
};

SectionMainBanner.propTypes = {
  // propName: PropTypes.string,
};

export default SectionMainBanner;