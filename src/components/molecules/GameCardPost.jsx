import React from "react";

const GameCardPost = (props) => {
    const {title, image} = props

    return (
        <>
            <div className="px-5 w-full h-full ">
            <a href="#" className="block w-full overflow-hidden ar-16/9 bg-white/60 rounded-2xl">
             <img src={image}  className="object-cover w-full h-full hover:opacity-90 transition"/>
            </a>
                <div className="text-white mt-7 pl-3">
                    <h2 className="">{title}</h2>
                    <p className="my-4 text-[13px]  text-[#8B8B8B] ">Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge.</p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default GameCardPost;