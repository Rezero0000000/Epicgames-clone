import React, {useState} from "react";
import Globe from "../icons/Globe";
import User from "../icons/User";
import HamburgerMenu from "../icons/HamburgerMenu";

const Navbar = () => {
    
  const links = [
    { id: 1, name: "STORE", url: "/" },
    { id: 2, name: "DISTRIBUTION", url:"/"},     
    { id: 3, name: "SUPPORT", url: "/" }
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
                  <ul className="nav-menu-list md:ml-3 tracking-widest items-center text-[13.7px] md:text-[9.8px] lg:text-[10.5px] mt-3 md:mt-0">
                          {
                      links.map(link => (
                        link.id == 1 ? <li key={link.id} className="pl-7 md:pl-2 mb-3 md:mb-0 text-[#E7E7E7] md:w-auto w-full">{link.name} <div className="absolute mt-3 hidden md:block w-16 left-6 h-1 bg-[#0078F2]"></div></li> : <li key={link.id} className="pl-7 md:pl-7 text-white md:text-[#B8B8B8] md:border-none border-t w-full py-3 md:w-auto border-[#343434] hover:text-white">{link.name}</li>
                      ))
                    }
                     <li className="pl-7 md:pl-0 md:ml-3 lg:ml-6 mb-3 md:flex md:mb-0 text-white md:text-[#B8B8B8] md:w-auto py-3 w-full">
                      <div className="w-[1px] bg-[#A7A7A7] mb-2 md:block hidden h-8 ml-2 absolute"></div>
                      <p className=" md:ml-6 lg:ml-9 md:py-[0.35rem]"> 
                     UNREAL ENGINE
                      </p></li>
                  </ul>
                  <div className="nav-second-menu bg-[#2F2F2F] md:bg-[#2A2A2A] shadow-top md:shadow-none w-full md:w-auto  text-[9px]">
                      <div
                      className="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
                      >
                      <button className="w-1/3 h-full  flex-centered md:w-auto opacity-70 hover:opacity-100">
                          <Globe  />
                      </button>
                      <a href="/login" className="flex-centered signin-button font-normal">
                          <User className="w-7 md:w-5 h-7 md:h-5" />
                          <p className="text-[10px]">
                             SIGN IN
                          </p>
                      </a>
                      </div>
                      <a href="#" className="get-epic-games-button font-normal">AVAILABLE ON PC/MAC ONLY</a>
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
