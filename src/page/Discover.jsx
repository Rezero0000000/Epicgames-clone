import React from "react"
import Header from "../components/organism/header"
import Jumbotron from "../components/organism/jumbotron"
import Sale from "../components/organism/Sale"
import GamePost from "../components/organism/GamePosts"
import FreeGames from "../components/organism/FreeGames"

const Discover = () => {
  return (
    <>
      <div className="fixed z-20">
        <Header />
      </div>
      <div className="pt-40">
        <Jumbotron />
      </div>
      <div>
        <Sale />
      </div>
      <section className="mt-16">
        <GamePost />
      </section>
      <section>
        <FreeGames />
      </section>
    </>
  )
}

export default Discover
