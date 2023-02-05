import React from "react";

const GameCardPost = () => {
    return (
        <>
            <div className="px-5 w-[23rem] ">
                <img src="/images/games/dishonored.webp" alt="" className="rounded-lg"/>
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