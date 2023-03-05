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
                  <ul className="nav-menu-list items-center text-sm md:text-[12px] mt-3 md:mt-0">
                    {
                      links.map(link => (
                        link.id == 1 ? <li key={link.id} className="pl-7 md:pl-2 mb-3 md:mb-0 text-[#fff] md:w-auto w-full">{link.name}</li> : <li key={link.id} className="pl-7  text-white md:text-[#B8B8B8] md:border-none border-t w-full py-3 md:w-auto border-[#343434]">{link.name}</li>
                      ))
                    }
                     <li className="pl-7 md:pl-0 md:ml-7 mb-3 md:mb-0 text-white md:text-[#B8B8B8] md:w-auto py-3 w-full">
                      <p className="md:border-l md:pl-6 md:py-[0.35rem] md:border-[#A7A7A7]">
                     UNREAL ENGINE
                      </p></li>
                  </ul>
                  <div className="nav-second-menu shadow-top md:shadow-none w-full md:w-auto  text-[10px]">
                      <div
                      className="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
                      >
                      <button className="w-1/3 h-full mr-5 flex-centered md:w-auto opacity-70 hover:opacity-100">
                          <Globe  />
                      </button>
                      <a href="/login" className="flex-centered signin-button font-normal">
                          <User className="w-7 md:w-5 h-7 md:h-5" />SIGN IN
                      </a>
                      </div>
                      <a href="#" className="get-epic-games-button font-normal"> AVAILABLE ON PC/MAC ONLY </a>
                  </div>
                </div>
                <div className="bg-[#0078F2] md:hidden absolute p-[0.6rem] xs:p-[0.59rem] right-0" onClick={showSidebar} >
                <HamburgerMenu />
              </div>
            </nav>
        </>
    )
}

export default Navbar;