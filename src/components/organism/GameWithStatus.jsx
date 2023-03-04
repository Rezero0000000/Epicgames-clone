import React from "react";
import GameStatus from "../molecules/GameStatus";

// import Swiper core and required modules
import {Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const GameWithStatus = () => {
    return (
        <>
             <div className="w-full">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Scrollbar]}
                        slidesPerView={3}
                        spaceBetween={15}
                        breakpoints= {{
                            0: {
                            slidesPerGroup: 1,
                            slidesPerView: 1,
                            },
                            480: {
                            slidesPerGroup: 1,
                            slidesPerView: 2,
                            },
                            768: {
                            slidesPerGroup: 2,
                            slidesPerView: 2,
                            },
                            1024: {
                            slidesPerGroup: 3,
                            slidesPerView: 3,
                            },
                            1280: {
                            slidesPerGroup: 5,
                            slidesPerView: 3,
                            },
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    <SwiperSlide ><GameStatus /></SwiperSlide> 
                    <SwiperSlide ><GameStatus /></SwiperSlide> 
                    <SwiperSlide ><GameStatus /></SwiperSlide> 
                  </Swiper>
            </div>
        </>
    )
}

export default GameWithStatus;