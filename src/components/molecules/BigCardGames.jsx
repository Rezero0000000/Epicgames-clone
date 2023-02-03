import React from "react";

const BigCardGames = () => {
    return (
        <>  
            <div className="px-5 ">
              <div className="rounded-xl h-[30rem] bg-cover bg-center bg-gradient-black" style={{backgroundImage: `url(/images/games/dishonored.webp)`}}>
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 to-transparent"></div>
                <div className="absolute bottom-14 px-5 left-5 md:left-8 text-sm md:font-bold w-[80%] md:w-[40%]">
                  <div>
                    <h2>OUT NOW</h2>
                    <p>Dishonored is an immersive first-person action game that casts you as a supernatural assasin driven by revenge.</p>
                  </div>
                  <div className="mt-7">
                    <p>Starting at</p>
                    <p>IDR 200.500</p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default BigCardGames