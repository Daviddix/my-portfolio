import logo from "../../assets/icons/ND.svg"
import x from "../../assets/icons/x-icon.svg"
import hamburger from "../../assets/icons/hamburger-icon.svg"
import pattern from "../../assets/images/background-pattern.png"


function Hero() {
  return (
    <section>
       <header>
        <a href="#" className="logo">
            <img src={logo} alt="website logo" />
        </a>

        {/* <nav>
            <ul><li><a href=""></a></li></ul>
        </nav> */}

        <div className="menu-icons">
        <img src={x} alt="close mobile menu" />

        <img src={hamburger} alt="close mobile menu" />
        </div>
       </header>

       <p className="sub-heading">
        Hey, i'm Nsikan-David. I am a
       </p>

       <div className="heading">
        <h1>FRONTEND WEB DEVELOPER &</h1>
        <h1>UI DESIGNER</h1>
       </div>

       <p className="intro">
        My focus is on building web applications that users enjoy. I turn ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!
       </p>

       <div className="ctas">
        <button>My projects</button>
        <button>Resume</button>
       </div>

       <img src={pattern} />
    </section>
  )
}

export default Hero