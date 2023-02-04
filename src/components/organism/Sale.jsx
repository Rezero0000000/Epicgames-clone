import React from "react";
import GameCard from "../molecules/GameCard";

const Sale = () => {
    return (
        <>
            <section className="text-white px-5">
                <div>
                    <p>Game On Sale</p>
                </div>
                <div>
                    <GameCard />
                </div>
            </section>
        </>
    )
}

export default Sale;