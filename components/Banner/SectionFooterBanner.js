"use client"

import { Rating } from "@material-tailwind/react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const SectionFooterBanner = ({ reviews = [] }) => {

  return (
    <section id="review" className='bg-[#fafbfa] py-5'>
      <div className='container pt-10 flex-col justify-center items-center mx-auto'>
        <h1 className='text-6xl font-bold text-primary text-center'>Review on Google</h1>
        <div className="flex justify-center mt-4">
          <Rating value={5} unratedColor="lime" ratedColor="lime" readonly />
        </div>
      </div>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        {
          reviews.map(v => {
            return (
              <div key={v.author_name} className="p-6 sm:w-[400px] container mx-auto">
                <Image src={v.profile_photo_url} alt={v.author_name} width={40} height={40} style={{
                  width: 40,
                  height: 40
                }} />
                <h4 className="text-1xl font-extrabold my-2"> {v.author_name}</h4>
                <p>{v.text}</p>
                < Rating value={v.rating} unratedColor="lime" ratedColor="lime" readonly />
              </div>
            )
          })
        }
      </Carousel>
    </section>


  );
};

SectionFooterBanner.propTypes = {
  // propName: PropTypes.string,
};

export default SectionFooterBanner;