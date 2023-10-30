"use client"

import { Rating } from "@material-tailwind/react";


const SectionFooterBanner = () => {
  return (
    <section className='bg-[#fafbfa] flex justify-center'>
      <div className='container py-10 flex-col justify-center items-center'>
        <h1 className='text-6xl font-bold text-primary text-center'>Review on Google</h1>
        <div className="flex justify-center mt-4">
          <Rating value={5} unratedColor="lime" ratedColor="lime" readonly />
        </div>
      </div>


    </section>


  );
};

SectionFooterBanner.propTypes = {
  // propName: PropTypes.string,
};

export default SectionFooterBanner;