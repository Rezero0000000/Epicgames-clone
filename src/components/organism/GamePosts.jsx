import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCardPost from "../molecules/GameCardPost";

const GamePost = () => {
    return (
        <>      
            <div className="w-full h-full">

            <Swiper
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
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