import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import assets from '../assets/asset'
import asset from '../assets/asset';


 const testimonialData= [
  {
    name: "Mary Johnson",
    title: "Homeowner",
    image: asset.profile1,
    quote:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn’t be happier with the results. The entire process.",
  },
  {
    name: "David Lee",
    title: "Property Developer",
    image: asset.profile2,
    quote:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn’t be happier with the results. The entire process.",
  },
  {
    name: "Sarah Miller",
    title: "Hotel Owner",
    image: asset.profile3,
    quote:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn’t be happier with the results. The entire process.",
  },

 
];

const Testomonial= () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold mt-3">Customer Feedbacks</h2>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition">
          See All »
        </button>
      </div>
      <Swiper
       pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
        spaceBetween={30}
      >

        {testimonialData.map((t,index)=>(

        <SwiperSlide key={index}>
               <div className='w-full h-auto bg-white p-3 flex flex-col gap-3 items-center justify-center'>
       <img src={t.image} alt='' className='!w-[200px] !rounded-[200px] !object-cover !mx-auto !mb-4"
'/>
       <p className="w-[800px] text-gray-600 mb-10 text-center">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem fuga nostrum laudantium tenetur quisquam doloremque saepe incidunt? Tempora aliquid, repudiandae dolore eaque earum odit aperiam, nostrum natus distinctio, praesentium sed.
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vitae officiis accusamus quos modi, iure rerum atque nostrum sed error architecto fugiat necessitatibus vel, ad quo minus incidunt, quam praesentium.
      </p>
      </div>
      
        </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default Testomonial;
