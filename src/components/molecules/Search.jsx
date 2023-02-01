import React from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
    return (
        <>
            <div className="absolute z-20 text-white border-b border-[#343434] pt-4 pb-7  flex justify-center items-center text-sm font-bold w-full text-center top-14">
                <div className="">
                    <p className="text-[10px] text-[#868686]">EPIC GAMES STORE</p>
                    <p className="">Discover</p>
                </div>
                <div className="absolute right-5">
                    <SearchIcon />
                </div>
            </div>
        </>
    )
}

export default Search