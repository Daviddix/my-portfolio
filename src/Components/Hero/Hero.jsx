import logo from "../../assets/icons/ND.svg"
import x from "../../assets/icons/x-icon.svg"
import hamburger from "../../assets/icons/hamburger-icon.svg"
import pattern from "../../assets/images/background-pattern.png"
import "./Hero.css"

function Hero() {
  return (
    <section class="hero">

      <header>
        <a href="#" className="logo">
            <img src={logo} alt="website logo" />
        </a>

        <nav>
          <button>
        <img src={x} alt="close mobile menu" />
          </button>

            <ul><li><a href="">Tech Stack</a></li></ul>
            <ul><li><a href="">Projects</a></li></ul>
            <ul><li><a href="">About Me</a></li></ul>
            <ul><li><a href="">Contact Me</a></li></ul>
            <ul><li><a href="">Message Me</a></li></ul>
        </nav>

        <button className="menu-icons">
        <img src={hamburger} alt="open mobile menu" />
        </button>
       </header>

      <div className="hero-inner">
         

       <p className="sub-heading">
        Hey, i'm Nsikan-David. I am a
       </p>

       <div className="hero-heading">
        <h1>FRONTEND WEB DEVELOPER &</h1>
        <h1>UI DESIGNER</h1>
       </div>

       <p className="hero-intro">
        My focus is on building web applications that users enjoy. I turn ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!
       </p>

       <div className="hero-ctas">
        <button>My Projects</button>
        <button>Resume</button>
       </div>
      </div>
      

       <img src={pattern} className="pattern" />
    </section>
  )
}

export default Hero