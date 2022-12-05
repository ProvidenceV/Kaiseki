import Navbar from "./Navbar"
import Title from "./Title"
import Hero from "./Hero"
import Footer from "./Footer"
import "./base.css"

import About from "./Customer/About"
import Bill from "./Customer/Bill"
import Menu from "./Customer/Menu"
import Reservations from "./Customer/Reservations"

import RestaurauntMetrics from "./Restauraunt/RestaurauntMetrics"
import RestaurauntOrdering from "./Restauraunt/RestaurauntOrdering"
import RestaurauntSchedule from "./Restauraunt/RestaurauntSchedule"

//import Home from "./Customer/Home"
//import {Route, Routes} from "react-router-dom"


function App() {
  let Component
  switch(window.location.pathname) {
    case "/about":
        Component = <About />
      break;
    case "/bill":
      Component = <Bill />
      break;
    case "/menu":
      Component = <Menu />
      break;
    case "/reservation":
      Component = <Reservations />
      break;
    case "/restaurauntMetrics":
        Component = <RestaurauntMetrics />
        break;
    case "/restaurauntOrdering":
      Component = <RestaurauntOrdering />
        break;
    case "/restaurauntSchedule":
        Component = <RestaurauntSchedule />
        break;
      default:
        Component = <About/>
        break;
  }

  return (
    <>
    <div class="outer">
      <div class="inner">
        <Title />
      </div>
      <div class="inner">
        <Hero />
      </div>
      <div class="inner">
        <Navbar />
      </div>
      <div class="inner">
        {Component}
      </div>
      <div class="inner">
        <Footer />
      </div>
    </div>
    </>
    )
}

export default App;
