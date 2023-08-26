"use client"
import PropTypes from 'prop-types';

import Banner from '@/public/asset/banner-image.jpeg'
import Image from 'next/image';
import Button from '../Button';
const SectionMainBanner = () => {
  return (
    <section
      className='px-28 py-20 mt-[85px] bg-no-repeat bg-clip-border	bg-cover bg-scroll bg-center h-[50px] sm:h-[700px]'
      style={{
        backgroundImage: `url('./asset/banner-image.jpeg')`,
      }}
    >
      <div className='flex flex-col justify-center h-full'>
        <h1 className="text-[white] text-6xl font-bold">Don't Worry, <br />
          It's Organic
        </h1>
        <p className='text-[white] mt-4'>High quality medical and recreational cannabis.</p>
        <div className='mt-12'>
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