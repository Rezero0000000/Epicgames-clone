import React from "react"
import Header from "../components/organism/header"
import Jumbotron from "../components/organism/jumbotron"
import Sale from "../components/organism/Sale"

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
    </>
  )
}

export default Discover
