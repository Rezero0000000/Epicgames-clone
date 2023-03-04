import React, {useState, useEffect} from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

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
            <div className="bg-[#2F2F2F] ">
                <div className="flex text-white justify-between">
                    <h2>Free Games</h2>
                    <button className="border border-white rounded-md px-3 text-sm py-2 font-semibold">VIEW MORE</button>
                </div>

                <Swiper
                    modules={[Pagination, Scrollbar]}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
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
                        slidesPerView: 3,
                        },
                        1024: {
                        slidesPerGroup: 3,
                        slidesPerView: 3,
                        },
                        1280: {
                        slidesPerGroup: 5,
                        slidesPerView: 5,
                        },
                    }}
                    scrollbar={{ draggable: true }}
                    >
                        {
                            games.map(game => {
                                return <SwiperSlide key={game.id}>
                                        <div className="w-[23rem] mt-7 text-white text-sm">
                                            <div className="">
                                                <img src={game.image} className="rounded-t-lg" alt="" />
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