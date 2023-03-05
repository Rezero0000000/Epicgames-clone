import React, {useState, useEffect} from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import Gift from "../icons/Gift";

const FreeGames = () => {
    const [games, setGames] = useState([]);

    const getGames = async () => {
        try{
            const fetchGames = await fetch("/data/games.json");
            const jsonGames = await fetchGames.json();
            setGames(jsonGames);
        }catch (e) {
            console.log(e.message);
        }
    }
        
    useEffect(() => {
        getGames();
    },[]);

    return (
        <>
            <div className="bg-[#2F2F2F] pt-5 px-5 lg:px-8">
                <div className="flex text-white justify-between ">
                    <div className="flex items-center">
                        <Gift />
                        <h2 className="text-[1.2rem]  ml-3">Free Games</h2>
                    </div>
                    <button className="border border-white rounded-md px-5 text-[11.5px] py-2 font-semibold">VIEW MORE</button>
                </div>

                <Swiper
                    modules={[Pagination, Scrollbar]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
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
                        slidesPerView: 2,
                        },
                        1280: {
                        slidesPerGroup: 5,
                        slidesPerView: 3,
                        },
                    }}
                    scrollbar={{ draggable: true }}
                    >
                        {
                            games.map(game => {
                                return <SwiperSlide key={game.id}>
                                        <div className=" mt-7 text-white text-sm w-full">
                                            <div className="">
                                                <img src={game.image} className="rounded-t-md" alt="" />
                                                <div className="bg-[#007DFC] rounded-b-lg text-center font-bold py-1">FREE NOW</div>
                                            </div>
                                            <div className="mt-7">
                                                <p>{game.title}</p>
                                                <p className="text-[#A6A6A6]">Free Now-Oct 14 at 10:10 PM</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                            })
                        }
                        
                </Swiper>
            </div>

        </>
    )
}

export default FreeGames