import React, {useState} from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {

    const links = [
        {id:1, title: "Discover", url: "/discover"},
        {id:2, title: "Browse", url: "/browse"},
        {id:2, title: "News", url: "/news"}
    ]

    const [openSearch, setOpenSearch] = useState(true)

    function openFilter () {
        setOpenSearch(!openSearch)
    }
    return (
        <>
            <div className="bg-[#121212]  bg-opacity-[0.93] fixed top-12 w-full lg:py-3">
                <div className="backdrop-blur-sm text-white py-7  flex lg:py-5 justify-center lg:justify-between lg:px-16 items-center text-[16px] w-full text-center top-14">
                    <div className="absolute left-8 lg:static">
                        <SearchIcon />
                    </div>

                    <div className="lg:hidden" onClick={openFilter}>
                        <p className="">Discover</p>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="text-center flex text-white ">
                            {
                                links.map( link => (
                                  link.id == 2 ? <li className="font-normal mr-10 text-[#858585]" key={link.id}>{link.title}</li> : <li className="font-normal mr-10" key={link.id}>{link.title}</li>
                                ))
                            }
                        </ul>
                    </div>
           
                </div>
                <div className={`bg-[#121212] absolute lg:hidden w-full top-[5rem] z-20 ${openSearch ? "block"  : "hidden" }`}>
                    <ul className=" pl-8 text-white py-5 xs:py-6">
                        {
                            links.map( link => (
                                link.id !== 1 ? <li className="py-5 text-[#8C8C8C] border-t border-[#2A2A2A]" key={link.id}>{link.title}</li>
                                : <li className="py-5" key={link.id}>{link.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <button className={`w-full h-[34rem] aboslute  search-background ${openSearch ? "block"  : "hidden" }`}></button>
            </div>
        </>
    )
}

export default Search