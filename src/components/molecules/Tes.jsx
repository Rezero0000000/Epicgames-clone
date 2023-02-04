import React, {useState} from "react";
import Globe from "../icons/Globe";
import User from "../icons/User";
import HamburgerMenu from "../icons/HamburgerMenu";

const Navbar = () => {
    
  const links = [
    { id: 1, name: "STORE", url: "/" },
    { id: 2, name: "NEWS", url: "/" },
    { id: 3, name: "FAQ", url: "/", },
    { id: 4, name: "HELP", url: "/" },
    { id: 5, name: "UNREAL ENGINE", url: "/" }
  ]

  const [open, setOpen] = useState(true)

  function showSidebar () {
    console.log("HI")
    setOpen(!open)
  }


    return (
        <>
             <nav className="nav-container">
                <div>
                    {/* <img src="/images/eg-logo-light.svg" classNam="w-2"/> */}
                </div>
                <div className={`nav-menu md:translate-x-0 ${open? "translate-x-full" : "translate-x-0"}`}>
                <ul className="nav-menu-list">
                    {
                    links.map(link => (
                      link.id == 1 ? <li key={link.id} className="pl-7 mb-3 md:mb-0 text-[#fff] md:w-auto w-full">{link.name}</li> : <li key={link.id} className="pl-7 text-[#A7A7A7] md:border-none border-t w-full py-2 md:w-auto border-[#343434]">{link.name}</li>
                    ))
                  }
                </ul>
                <div className="nav-second-menu shadow-top md:shadow-none">
                    <div
                    className="flex flex-row-reverse w-full h-full md:flex-row md:w-auto bg-epic-gray-50 md:bg-transparent"
                    >
                    <button className="w-1/3 h-full mr-5 flex-centered md:w-auto opacity-70 hover:opacity-100">
                        <Globe className="w-8 h-8 md:w-6 md:h-6" />
                    </button>
                    <router-link to="/signin" className="flex-centered signin-button">
                        <User className="w-7 md:w-5 h-7 md:h-5" />SIGN IN
                    </router-link>
                    </div>
                    <a href="#" className="get-epic-games-button">GET EPIC GAMES</a>
                </div>
                </div>
                <div className="bg-[#007DFC] md:hidden absolute p-[0.7rem] right-0" onClick={showSidebar} >
                <HamburgerMenu />
              </div>
            </nav>
        </>
    )
}

export default Navbar;