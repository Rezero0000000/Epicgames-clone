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
        fetch("http://127.0.0.1:5173/public/data/games.json")
        .then(response => {
           return response.json();
        }).then(data => {
            setDataGame(data)
        })
    },[]);

    console.log(dataGame)

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
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                        <SwiperSlide><BigCardGames/></SwiperSlide>
                    </Swiper>
                </div>
                <div className="ml-5 hidden md:block">
                    <div className="text-white flex items-center">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <p className="text-[13px] ml-3 mr-5">Dishonored</p>
                    </div>
                    <div className="text-white flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp" className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        {
                                dataGame.map(data2 => {
                                return   <p key={data2.id} className="text-[13px] ml-3 mr-5">{data2.title}</p>
                                })
                        }

                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jumbotron
