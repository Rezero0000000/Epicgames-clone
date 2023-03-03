import React, {useState} from "react";
import Globe from "../icons/Globe";
import User from "../icons/User";
import HamburgerMenu from "../icons/HamburgerMenu";

const Navbar = () => {
    
  const links = [
    { id: 1, name: "STORE", url: "/" },
    { id: 2, name: "Support", url: "/" },
  ]

  const [open, setOpen] = useState(true)

  function showSidebar () {
    setOpen(!open)
  }  

    return (
        <>
             <nav className="nav-container pb-4 md:pb-0">
                <div className="my-2 ml-5 z-50">
                    <img src="/images/eg-logo-light.svg" className="w-[1.93rem] opacity-[0.85]"/>
                </div>
                <div className={`nav-menu md:translate-x-0 ${open? "translate-x-full" : "translate-x-0"} `}>
                  <ul className="nav-menu-list items-center text-sm sm:text-[12px] mt-3 sm:mt-0">
                    {
                      links.map(link => (
                        link.id == 1 ? <li key={link.id} className="pl-7 sm:pl-2 mbnpm run dev-3 md:mb-0 text-[#fff] md:w-auto w-full">{link.name}</li> : <li key={link.id} className="pl-7 text-[#A7A7A7] md:border-none border-t w-full py-2 md:w-auto border-[#343434]">{link.name}</li>
                      ))
                    }
                     <li className="pl-7 sm:pl-0 sm:ml-7 mb-3 md:mb-0 text-[#A7A7A7] md:w-auto w-full"><p className="sm:border-l sm:pl-6 sm:py-[0.35rem] sm:border-[#A7A7A7]">
                     UNREAL ENGINE
                      </p></li>
                  </ul>
                  <div className="nav-second-menu shadow-top md:shadow-none w-full md:w-auto">
                      <div
                      className="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
                      >
                      <button className="w-1/3 h-full mr-5 flex-centered md:w-auto opacity-70 hover:opacity-100">
                          <Globe  />
                      </button>
                      <a href="/login" className="flex-centered signin-button">
                          <User className="w-7 md:w-5 h-7 md:h-5" />SIGN IN
                      </a>
                      </div>
                      <a href="#" className="get-epic-games-button">GET EPIC GAMES</a>
                  </div>
                </div>
                <div className="bg-[#007DFC] md:hidden absolute p-[0.5rem] xs:p-[0.59rem] right-0" onClick={showSidebar} >
                <HamburgerMenu />
              </div>
            </nav>
        </>
    )
}

export default Navbar;