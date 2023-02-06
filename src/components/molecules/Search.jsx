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
            <div className="bg-[#121212] bg-opacity-[0.93] fixed top-12 w-full md:py-3">
                <div className="backdrop-blur-sm text-white border-b md:border-none border-[#343434] pt-4 pb-7 flex md:py-5 justify-center md:justify-between md:px-16 items-center text-sm font-bold w-full text-center top-14">
                    <div className="md:hidden" onClick={openFilter}>
                        <p className="text-[10px] text-[#868686] md:hidden">EPIC GAMES STORE</p>
                        <p className="">Discover</p>
                    </div>
                    <div className="hidden md:block">
                        <ul className="text-center flex text-white ">
                            {
                                links.map( link => (
                                  link.id == 2 ? <li className="font-normal mr-10 text-[#858585]" key={link.id}>{link.title}</li> : <li className="font-normal mr-10" key={link.id}>{link.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="absolute right-5 md:static">
                        <SearchIcon />
                    </div>
                </div>
                <div className={`bg-[#121212] absolute md:hidden w-full top-[5.3rem] z-20 ${open ? "block"  : "hidden" }`}>
                    <ul className="text-center text-white py-10">
                        {
                            links.map( link => (
                                    <li className="py-7" key={link.id}>{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Search