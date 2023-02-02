import React from "react";

const BigCardGames = () => {
    return (
        <>  
            <div className="px-5 ">
              <div className="rounded-xl h-[30rem] bg-cover bg-center bg-gradient-black" style={{backgroundImage: `url(/images/games/dishonored.webp)`}}>
                {/* <img src="/images/games/dishonored.webp" className="" alt="" /> */}
                <div className="py-60 pl-3 pr-7 ">
                  <div>
                    <h2>OUT NOW</h2>
                    <p>Dishonored is an immersive first-person action game that casts you as a supernatural assasin driven by revenge.</p>
                  </div>
                  <div>
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