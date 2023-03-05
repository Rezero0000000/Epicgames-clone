import React from "react";
import Header from "../components/organism/header";
import Jumbotron from "../components/organism/jumbotron";
import Sale from "../components/organism/Sale";
import GamePosts from "../components/organism/GamePosts";
import FreeGames from "../components/organism/FreeGames";
import GameWithStatus from "../components/organism/GameWithStatus";
import BrowseCard from "../components/organism/BrowseCard";
import Footer from "../components/organism/Footer";

const Discover = () => {
  return (
    <>
      <div className="fixed z-20">
        <Header />
      </div>
      <div className="pt-36 lg:pt-40 md:pt-32 md:px-20 px-5">
        <Jumbotron />
      </div>
      <div>
        <Sale />
      </div>
      <section className="mt-16 md:px-12 lg:px-20 xl:px-32">
        <GamePosts small="2" large="3"/>
      </section>
      <section className="md:px-12 lg:px-20 xl:px-36  mt-16">
        <FreeGames />
      </section>
      <section className="text-white px-5 md:px-12 lg:px-20 xl:px-36  py-16">
        <GameWithStatus />
      </section>
      <section className="md:px-12 lg:px-20 xl:px-32">
        <GamePosts small="1" large="2" />
      </section>
      <section className="md:px-12 lg:px-20 xl:px-32 mt-16 lg:py-20">
        <BrowseCard/>
      </section>
      <section className="md:px-12 lg:px-20 xl:px-32 mt-16 lg:py-20 bg-[#202020] text-[#B6B6B6]">
        <Footer />
      </section>
    </>
  )
}

export default Discover
