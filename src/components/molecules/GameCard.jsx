import React from "react";

const GameCard = (props) => {
    const {title, image} = props

    return (
        <>
            <div className="ml-7 group w-full">
                <div className="relative mb-1.5 overflow-hidden rounded-md ar-3/4 bg-white/80">
                    <img src={image} alt="" className="object-cover w-full h-full transition-opacity duration-200 hover:opacity-90"/>
                </div>
                <div>
                    <div className="text-sm mt-5"> 
                        <h2>{title}</h2>
                        <p className="text-[#8B8B8B]">Betesda</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-[12px]">
                        <button className="px-2 py-1 text-[11px] rounded-[0.25rem] bg-[#007DFC]">-35%</button>
                        <div>
                            <p className="text-[#8B8B8B]">IDR 250.000</p>
                            <p>IDR 161.850</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCard