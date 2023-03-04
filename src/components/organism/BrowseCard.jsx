import React from "react";

const BrowseCard = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center px-6">
                <div className="w-full bg-[#0076ED] px-3 py-5 rounded-lg">
                    <img src="/images/games/game-collection.webp" alt="" />
                </div>
                <div className="lg:px-5 lg:ml-20">
                    <h1 className="text-white text-lg mt-4">Browse</h1>
                    <p className="text-[#9A9A9A] mt-2 text-[12px] lg:text-sm">Explore our catalog for your next favorite game!</p>
                    <button className="px-5 py-2 text-md rounded-lg bg-white text-black mt-3">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default BrowseCard;