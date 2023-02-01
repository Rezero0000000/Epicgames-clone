import React, {useState} from "react";
import HamburgerMenu from "../icons/HamburgerMenu";
import Globe from "../icons/Globe";
import User from "../icons/User";

const Navbar = () => {

  const [open, setOpen] = useState(true)

  function showSidebar () {
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
        <nav className="flex fixed w-full bg-[#2A2A2A] text-white items-center justify-between">

          <div className="flex items-center md:w-full">
              <div className="px-5 py-2">
                <img src="/images/eg-logo-light.svg" className="w-8"/>
              </div>

              <div className="bg-[#007DFC] md:hidden absolute p-[0.7rem] right-0" onClick={showSidebar} >
                <HamburgerMenu />
              </div>
              <div className="flex justify-between md:flex hidden   w-full">
                <ul className="flex text-[12px] items-center font-[400]">
                    {
                      links.map(link => (
                        link.id == 1 ? <li key={link.id} className=" text-[#fff] mx-5 ">{link.name}</li> : <li key={link.id} className="mx-5 text-[#A7A7A7] ">{link.name}</li>
                      ))
                    }
                  </ul>
                  <div className="flex text-[12px] font-semibold">
                    <div  className="py-4 px-3 flex items-center">
                      <User/>
                      <p className="ml-3">SIGN IN</p>
                    </div>
                    <div className="bg-[#007DFC] py-4 px-5 flex  items-center ">
                       <p >GET EPIC GAMES</p>
                    </div>
                  </div>
              </div>

{/* Sidebar begin-xs */}
              <div className={`absolute z-[999] h-[38.2rem] xs:h-[40rem] w-[90%] md:hidden pt-5 bg-[#2A2A2A] top-[3.3rem] flex flex-col justify-between transition-all       duration-500 ease-in ${open ? "right-0" : "-right-72 xs:-right-[29rem]" }`}>
                <ul className="flex flex-col text-sm font-[500]">
                  {
                    links.map(link => (
                      link.id == 1 ? <li key={link.id} className="pl-7 mb-3 text-[#fff] w-full">{link.name}</li> : <li key={link.id} className="pl-7 text-[#A7A7A7] border-t w-full py-2 border-[#343434]">{link.name}</li>
                    ))
                  }
                </ul>
                <div className="text-white text-[11px] font-[500] border-t border-[#343434] shadow-top">
                  <div className="flex justify-center items-center ">
                    <div className="flex items-center border-r py-4 border-[#343434] ">
                      <User />
                      <p className="mr-10 ml-3">SIGN IN</p>
                    </div>
                    <div className="ml-7 ">
                      <Globe />
                    </div>
                  </div>
                  <div className="bg-[#007DFC] w-full text-center py-4">
                    <p>GET EPIC GAMES</p>
                  </div>
                </div>
              </div>

          </div>

        </nav>
    </>
  )
}

export default Navbar;
