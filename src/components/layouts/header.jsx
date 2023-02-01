import React from "react";
import Navbar from "../molecules/navbar.jsx"
import Search from "../molecules/Search.jsx";

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
        <Search />
      </header>
    </>
  )
}

export default Header;
