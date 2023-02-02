import React, {useState} from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {

    const links = [
        {id:1, title: "Discover", url: "/discover"},
        {id:2, title: "Browse", url: "/browse"}
    ]

    const [open, setOpen] = useState(false)

    function openFilter () {
        setOpen(!open)
    }

    return (
        <>
            <div className="bg-[#121212] text-white border-b border-[#343434] pt-4 pb-7  flex justify-center items-center text-sm font-bold w-full text-center top-14">
                <div className="" onClick={openFilter}>
                    <p className="text-[10px] text-[#868686]">EPIC GAMES STORE</p>
                    <p className="">Discover</p>
                </div>
                <div className="absolute right-5">
                    <SearchIcon />
                </div>
            </div>
            <div className={`bg-[#121212] absolute w-full top-[8.8rem] z-20 ${open ? "block"  : "hidden" }`}>
                <ul className="text-center text-white py-10">
                    {
                        links.map( link => (
                                <li className="py-7" key={link.id}>{link.title}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Search