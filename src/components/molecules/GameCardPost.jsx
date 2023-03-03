import React from "react";

const GameCardPost = () => {
    return (
        <>
            <div className="px-5 w-full h-full ">
            <a href="#" className="block w-full overflow-hidden ar-16/9 bg-white/60 rounded-2xl">
             <img src="/images/games/genshin-impact.webp"  className="object-cover w-full h-full hover:opacity-90 transition"/>
            </a>
                <div className="text-white mt-7 ">
                    <h2 className="">Dishonored</h2>
                    <p className="my-4 text-sm pr-3 text-[#8B8B8B]">Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.</p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default GameCardPost;