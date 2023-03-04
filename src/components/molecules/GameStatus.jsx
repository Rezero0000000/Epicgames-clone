import React from "react";

const GameStatus = () => {
    return (
        <>
            <div className="">
                <h1>New Seller</h1>
                <ul className="ml-5 ">
                    <li className="flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp"  className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <div className="ml-3">
                            <p className="text-sm">Genshin Impact</p>
                            <button className="px-2 py-1 text-[11px] rounded-[0.25rem] bg-[#007DFC]">-35%</button>
                        </div>
                        <div className="ml-3 text-[12px]">
                            <p>IDR 200.500</p>
                            <p>IDR 161.850</p>
                        </div>
                    </li>

                    <li className="flex items-center mt-5">
                        <img src="/images/games/genshin-impact.webp"  className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                        <div className="ml-3 text-sm">
                            <p>Genshin Impact</p>
                            <p>IDR 200.500</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default GameStatus;