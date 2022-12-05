import Navbar from "./Navbar"
import Title from "./Title"
import Hero from "./Hero"
import "./base.css"

function App() {
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
        <p>page</p>
      </div>
    </div>
    </>
    )
}

export default App;
