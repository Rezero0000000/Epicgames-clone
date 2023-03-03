import React, {useState, useEffect} from "react";
import BigCardGames from "../molecules/BigCardGames";

// import Swiper core and required modules
import {Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Jumbotron = () => {

    const [dataGame, setDataGame] = useState([])
    useEffect(() => {
        console.log('s')
        fetch("/data/games.json")
        .then(response => {
           return response.json();
        }).then(data => {
            setDataGame(data)
        })
    },[]);


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
                        dataGame.map(game =><SwiperSlide key={game.id}><BigCardGames/></SwiperSlide> )
                    }                        
                  </Swiper>
                </div>
                <div className="ml-5 hidden md:block">
                {
                    dataGame.map(game => 
                    game.id == 1 ? 
                    <div className="text-white flex items-center " key={game.id}>
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">{game.title}</p>
                    </div> :
                    <div className="text-white flex items-center mt-5" key={game.id}>
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">{game.title}</p>
                    </div> 
                    )
                }
                </div>
            </div>
        </>
    )
}

export default Jumbotron
