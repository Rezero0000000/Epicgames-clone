import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCardPost from "../molecules/GameCardPost";

const GamePost = () => {
    return (
        <>      
            
            <Swiper
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={218}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><GameCardPost /></SwiperSlide>
                    <SwiperSlide><GameCardPost /></SwiperSlide>
                    <SwiperSlide><GameCardPost /></SwiperSlide>
                    <SwiperSlide><GameCardPost /></SwiperSlide>
                    <SwiperSlide><GameCardPost /></SwiperSlide>
                </Swiper>
        </>
    )
}

export default GamePost