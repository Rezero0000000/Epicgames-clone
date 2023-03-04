import React, { useState, useEffect } from "react";

const GameStatus = () => {
    const [games, setGames] = useState([])

    const getGames = async () => {
        try {
            const fetchGames = await fetch("/data/games.json");
            const jsonGames  = await fetchGames.json();
            setGames(jsonGames);
        }
        catch (e) {
            console.log("something wrong")
        }
    }
    useEffect(() => {
        getGames();
    }, []);
    

    return (
        <>
            <div className="">
                <h1>New Seller</h1>
                <ul className="ml-5 ">
                {
                    games.map(game => 
                        game.id == 1 || game.id == 3 ? 
                        <li className="flex items-center mt-5" key={game.id}>
                            <img src={game.image} className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                            <div className="ml-3">
                                <p className="text-sm">{game.title}</p>
                                <button className="px-2 py-1 text-[11px] rounded-[0.25rem] bg-[#007DFC]">-35%</button>
                            </div>
                            <div className="ml-3 text-[12px]">
                                <p>IDR 200.500</p>
                                <p>IDR 161.850</p>
                            </div>
                        </li>:
                        <li className="flex items-center mt-5" key={game.id}>
                            <img src={game.image} className="w-full w-12 rounded-lg h-14 object-cover" loading="lazy" alt="" />
                            <div className="ml-3 text-sm">
                                <p>{game.title}</p>
                                <p>IDR 200.500</p>
                            </div>
                        </li>
                    )
                }
                </ul>
            </div>
        </>
    )
}

export default GameStatus;