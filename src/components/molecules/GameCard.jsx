import React from "react";

const GameCard = () => {
    return (
        <>
            <div className="w-36 mt-7 ">
                <div className="h-48 bg-cover rounded-lg bg-center" style={{ backgroundImage: "url('/images/games/dishonored.webp')"}}></div>

                <div>
                    <div className="text-sm mt-5"> 
                        <h2>Dishonored</h2>
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