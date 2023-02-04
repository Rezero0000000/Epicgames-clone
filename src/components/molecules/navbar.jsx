import React, {useState} from "react";
import HamburgerMenu from "../icons/HamburgerMenu";
import Globe from "../icons/Globe";
import User from "../icons/User";

const Navbar = () => {

  const [open, setOpen] = useState(true)

  function showSidebar () {
    console.log("HI")
    setOpen(!open)
  }

  const links = [
    { id: 1, name: "STORE", url: "/" },
    { id: 2, name: "NEWS", url: "/" },
    { id: 3, name: "FAQ", url: "/", },
    { id: 4, name: "HELP", url: "/" },
    { id: 5, name: "UNREAL ENGINE", url: "/" }
  ]

  return (
    <> 
        <nav className="flex w-full z-50 fixed bg-[#2A2A2A] text-white items-center justify-between">

          <div className="flex items-center md:w-full">
              <div className="px-5 py-2">
                <img src="/images/eg-logo-light.svg" className="w-8"/>
              </div>

              <div className="bg-[#007DFC] md:hidden absolute p-[0.7rem] right-0" onClick={showSidebar} >
                <HamburgerMenu />
              </div>
        
              <div className={` absolute md:relative md:w-full md:top-0 md:h-auto z-[999] h-[38.2rem] xs:h-[40rem] w-[90%] md:flex-row  md:pt-0 pt-5 bg-[#2A2A2A] top-[3.3rem] flex flex-col justify-between transition-all  duration-500 ease-in right-0 md:translate-x-0
              
              ${open ? "translate-x-72 xs:translate-x-[37rem] sm:translate-x-[43rem] " : "translate=0" }`}>
                <ul className="flex flex-col md:flex-row text-sm font-[500] md:items-center   w-full ">
                  {
                    links.map(link => (
                      link.id == 1 ? <li key={link.id} className="pl-7 mb-3 md:mb-0 text-[#fff] md:w-auto w-full">{link.name}</li> : <li key={link.id} className="pl-7 text-[#A7A7A7] md:border-none border-t w-full py-2 md:w-auto border-[#343434]">{link.name}</li>
                    ))
                  }
                </ul>

                <div className="text-white text-[11px] font-[500] md:relative md:right-0  md:justify-end md:items-cente md:w-full border-t md:flex md:border-none border-[#343434] shadow-top">
                  <div className="flex justify-center items-center">
                    <a className="flex items-center border-r py-4 border-[#343434] ">
                      <User />
                      <p className="mr-10 ml-3">SIGN IN</p>
                    </a>
                    <button className="ml-7 md:hidden">
                      <Globe />
                    </button>
                  </div>
                  <div className="bg-[#007DFC] w-full md:w-auto text-center py-4 md:py-6">
                    <a>GET EPIC GAMES</a>
                  </div>
                </div>

              </div>
          </div>

        </nav>
    </>
  )
}

export default Navbar;
