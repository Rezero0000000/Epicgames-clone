import React from "react";

const GameCard = () => {
    return (
        <>
            <div className="w-40 mt-7 ">
                <div className="h-52 bg-cover rounded-lg bg-center" style={{ backgroundImage: "url('/images/games/dishonored.webp')"}}></div>

                <div>
                    <div>
                        <h2>Dishonored</h2>
                        <p>Betesda</p>
                    </div>
                    <div className="flex items-center mt-4">
                        <button className="px-2 h-8 text-sm rounded-lg bg-[#007DFC]">-35%</button>
                        <div>
                            <p>IDR 250.000</p>
                            <p>IDR 161.850</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCard