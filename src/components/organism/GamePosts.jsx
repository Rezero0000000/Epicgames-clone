import React, {useState, useEffect} from "react";
import { Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import GameCardPost from "../molecules/GameCardPost";

const GamePosts = (props) => {
    const [games, setGames] = useState([]);
    const {small, large} = props

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
            <div className="w-full h-full  ">

                 <Swiper
                    modules={[Pagination, Scrollbar]}
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints= {{
                        0: {
                        slidesPerGroup: 1,
                        slidesPerView: 1,
                        },
                        480: {
                        slidesPerGroup: 1,
                        slidesPerView: small,
                        },
                        768: {
                        slidesPerGroup: 2,
                        slidesPerView: small,
                        },
                        1024: {
                        slidesPerGroup: 2,
                        slidesPerView: large,
                        },
                        1280: {
                        slidesPerGroup: 5,
                        slidesPerView: large,
                        },
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                   {
                    games.map(game => <SwiperSlide key={game.id}><GameCardPost title={game.title} image={game.image}/></SwiperSlide>)
                   }
                </Swiper>
            </div>
        </>
    )
}

export default GamePosts