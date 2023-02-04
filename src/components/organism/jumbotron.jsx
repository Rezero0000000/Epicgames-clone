import React from "react";
import BigCardGames from "../molecules/BigCardGames";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Jumbotron = () => {
    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
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