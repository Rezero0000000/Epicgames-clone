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
            <Swiper
                // install Swiper modules
                modules={[Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide><BigCardGames/></SwiperSlide>
                <SwiperSlide><BigCardGames/></SwiperSlide>
                <SwiperSlide><BigCardGames/></SwiperSlide>
                <SwiperSlide><BigCardGames/></SwiperSlide>
                <SwiperSlide><BigCardGames/></SwiperSlide>
                </Swiper>
        </>
    )
}

export default Jumbotron