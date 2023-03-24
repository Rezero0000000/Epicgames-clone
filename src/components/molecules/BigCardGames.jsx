import React from "react";
import AddIcon from "../icons/AddIcon";

const BigCardGames = () => {
    return (
        <>  
            <div className=" text-white w-full ">
              <div className=" relative h-[22.5rem] xs:h-[25rem] md:h-[27.5rem] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url(/images/games/genshin-impact.webp)`}}>
                <div className=" absolute px-5 inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 md:from-black/40 to-transparent"></div>
                <div className=" absolute bottom-5 left-5 md:left-8 text-sm md:font-bold w-[80%] md:w-[40%]">
                  <div>
                    <h2 className="text-[9px] mb-1 font-bold">Out Now</h2>
                    <p>Dishonored is an immersive first-person action game that casts you as a supernatural assasin driven by revenge.</p>
                  </div>
                  <div className="mt-5 text-lg flex justify-between items-center">
                    <p>Free</p>
                  </div>

                  <div  className="flex w-[23rem] text-[10px] items-center mt-3">
                    <button className="text-black bg-white px-4 py-2 rounded-[0.2rem]">GET IT NOW</button>
                    <button className="flex items-center ml-3"><div><AddIcon/></div> ADD TO WISHLIST</button>
                 </div>

                </div>
                <div className="absolute md:hidden bottom-5 right-5">
                   <AddIcon />
                </div>
              </div>
            </div>
        </>
    )
}

export default BigCardGames