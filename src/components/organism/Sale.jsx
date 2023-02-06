import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCard from "../molecules/GameCard";

const Sale = () => {
    return (
        <>
            <section className="text-white mt-[4.5rem] md:px-20 lg:pl-32 lg:pr-36">
                <div className="px-7">
                    <p>Game On Sale</p>
                </div>
                <Swiper
                    modules={[Pagination, Scrollbar]}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints= {{
                        0: {
                        slidesPerGroup: 1,
                        slidesPerView: 3,
                        },
                        480: {
                        slidesPerGroup: 1,
                        slidesPerView: 3,
                        },
                        768: {
                        slidesPerGroup: 2,
                        slidesPerView: 3,
                        },
                        1024: {
                        slidesPerGroup: 3,
                        slidesPerView: 4,
                        },
                        1280: {
                        slidesPerGroup: 5,
                        slidesPerView: 6,
                        },
                    }}
                    scrollbar={{ draggable: true }}
                    className=" mt-7 h-full"
                >
                    <SwiperSlide><GameCard /></SwiperSlide>
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