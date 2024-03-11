"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Card from './Card';

const Slider = () => {
  // SwiperCore.use([Autoplay])
  return (
    <div className=" flex flex-wrap">
   <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay= {{
          delay:2000
        }}
        pagination={{
          clickable: true, 
        }}
        modules={[FreeMode, Pagination]}
      >
        
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
          <SwiperSlide className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400'>{Card}</SwiperSlide>
    
      </Swiper>
</div>
  );
};

export default Slider