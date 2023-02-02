import React from "react";
import Navbar from "../molecules/navbar.jsx"
import Search from "../molecules/Search.jsx";

const Header = () => {
  return (
    <>
      <header className="fixed w-full">
        <Navbar />
        <Search />
      </header>
    </>
  )
}

export default Header;
