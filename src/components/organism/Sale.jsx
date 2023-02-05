import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCard from "../molecules/GameCard";

const Sale = () => {
    return (
        <>
            <section className="text-white px-5 mt-[4.5rem]">
                <div>
                    <p>Game On Sale</p>
                </div>
                <Swiper
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={78}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide><GameCard /></SwiperSlide>
                    <SwiperSlide><GameCard /></SwiperSlide>
                    <SwiperSlide><GameCard /></SwiperSlide>
                    <SwiperSlide><GameCard /></SwiperSlide>
                    <SwiperSlide><GameCard /></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Sale;