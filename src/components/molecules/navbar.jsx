import React, {useState} from "react";

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
        <nav className="flex bg-[#2A2A2A] text-white py-5 px-3 items-center justify-between">

          <div className="flex items-center">
            <div>
              <img src="/images/eg-logo-light.svg" className="w-12" onClick={showSidebar} />
            </div>
            <div className={`absolute h-[30rem] bg-[#2A2A2A] top-24 flex flex-col justify-between transition-all duration-500 ease-in ${open ? "right-0" : "-right-52" }`}>
              <ul className="flex px-5 flex-col">
                {
                  links.map(link => (
                    <li key={link.id} className="ml-5 text-[#979797]">{link.name}</li>
                  ))
                }
              </ul>

              <div>
              <ul className="flex">
                <li></li>
                <li>SIGN IN</li>
                <li>GET EPIC GAMES</li>
              </ul>
            </div>
           </div>

          </div>

        </nav>
    </>
  )
}

export default Navbar;
