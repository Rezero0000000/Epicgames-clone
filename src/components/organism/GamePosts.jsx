import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCardPost from "../molecules/GameCardPost";

const GamePost = () => {
    return (
        <>      
            <div className="w-full h-full pl-5 md:pl-3 pr-36 md:pr-0">

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
            </div>
        </>
    )
}

export default GamePost