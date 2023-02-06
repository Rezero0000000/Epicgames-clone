import React from "react";
import BigCardGames from "../molecules/BigCardGames";

// import Swiper core and required modules
import {Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Jumbotron = () => {
    return (
        <>
            <div className="md:flex justify-center">
                <div className="md:w-[70%] w-full ">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Scrollbar]}
                        slidesPerView={1}
                        spaceBetween={15}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                    </Swiper>
                </div>
                <div className="ml-5 hidden md:block">
                    <div className="text-white flex items-center">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/dishonored.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
