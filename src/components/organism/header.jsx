import React from "react";
import Navbar from "../molecules/navbar.jsx"
import Tes from "../molecules/Tes.jsx";
import Search from "../molecules/Search.jsx";

const Header = () => {
  return (
    <>
      <header className="fixed w-full">
        <Tes />
        <Search />
      </header>
    </>
  )
}

export default Header;
