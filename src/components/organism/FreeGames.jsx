import React from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const FreeGames = () => {
    return (
        <>
            <div className="flex text-white justify-between">
                <h2>Free Games</h2>
                <button className="border border-white rounded-md px-3 text-sm py-2 font-semibold">VIEW MORE</button>
            </div>

            <Swiper
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={378}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="w-[23rem] mt-7 text-white text-sm">
                            <div className="">
                                <img src="/images/games/dishonored.webp" className="rounded-t-lg" alt="" />
                                <div className="bg-[#007DFC] rounded-b-lg text-center font-bold py-1">FREE NOW</div>
                            </div>
                            <div className="mt-7">
                                <p>Dishonored</p>
                                <p className="text-[#A6A6A6]">Free Now-Oct 14 at 10:10 PM</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[23rem] mt-7 text-white text-sm">
                            <div className="">
                                <img src="/images/games/dishonored.webp" className="rounded-t-lg" alt="" />
                                <div className="bg-[#007DFC] rounded-b-lg text-center font-bold py-1">FREE NOW</div>
                            </div>
                            <div className="mt-7">
                                <p>Dishonored</p>
                                <p className="text-[#A6A6A6]">Free Now-Oct 14 at 10:10 PM</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[23rem] mt-7 text-white text-sm">
                            <div className="">
                                <img src="/images/games/dishonored.webp" className="rounded-t-lg" alt="" />
                                <div className="bg-[#007DFC] rounded-b-lg text-center font-bold py-1">FREE NOW</div>
                            </div>
                            <div className="mt-7">
                                <p>Dishonored</p>
                                <p className="text-[#A6A6A6]">Free Now-Oct 14 at 10:10 PM</p>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>

        </>
    )
}

export default FreeGames