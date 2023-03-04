import React, {useState, useEffect} from "react";
import BigCardGames from "../molecules/BigCardGames";

// import Swiper core and required modules
import {Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Jumbotron = () => {

    const [games, setGames] = useState([])

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
    }, []);
    
    return (
        <>
            <div className="md:flex justify-center">
                <div className="md:w-[70%] w-full ">
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Scrollbar]}
                        slidesPerView={1}
                        spaceBetween={15}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                    {
                        games.map(game =><SwiperSlide key={game.id}><BigCardGames/></SwiperSlide> )
                    }                        
                  </Swiper>
                </div>
                <div className="ml-5 hidden md:block">
                {
                    games.map(game => 
                    game.id == 1 ? 
                    <div className="text-white flex items-center " key={game.id}>
                        <img src={game.image} className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">{game.title}</p>
                    </div> :
                    <div className="text-white flex items-center mt-5" key={game.id}>
                        <img src={game.image} className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">{game.title}</p>
                    </div> 
                    )
                }
                </div>
            </div>
        </>
    )
}

export default Jumbotron;
