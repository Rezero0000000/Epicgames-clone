import React, {useState, useEffect} from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCard from "../molecules/GameCard";

const Sale = () => {
    const [games, setGames] = useState([]);

    const getGames = async () => {
        try {
            const fetchGames = await fetch("/data/games.json");
            const jsonGames  = await fetchGames.json();
            setGames(jsonGames);
        }
        catch (e) {
            console.log("something wrong")
        }
    }

    useEffect(() => {
        getGames();
    },[]);

    return (
        <>
            <section className="text-white mt-[4.5rem] md:px-12 lg:pl-20 xl:pl-32 xl:pr-48 lg:pr-36">
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
                        slidesPerView: 2,
                        },
                        480: {
                        slidesPerGroup: 1,
                        slidesPerView: 3,
                        },
                        768: {
                        slidesPerGroup: 2,
                        slidesPerView: 4,
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
                {
                    games.map(game => <SwiperSlide key={game.id}><GameCard title={game.title} image={game.image} /></SwiperSlide>)
                }   
                </Swiper>
            </section>
        </>
    )
}

export default Sale;