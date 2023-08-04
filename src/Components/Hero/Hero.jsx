import logo from "../../assets/icons/ND.svg"
import x from "../../assets/icons/x-icon.svg"
import hamburger from "../../assets/icons/hamburger-icon.svg"
import pattern from "../../assets/images/background-pattern.png"
import "./Hero.css"
import { useEffect, useState,useRef } from "react"


function Hero() {
  const [navIsOpened, setNavIsOpened] = useState(false)
  const headerRef = useRef()

  useEffect(()=>{
    let previousScrollPosition = window.scrollY

    document.addEventListener("scroll", ()=>{
      if (window.scrollY > 10) {
        let newScrollPosition = window.scrollY

      if (newScrollPosition > previousScrollPosition) {
        headerRef.current.classList.add("inactive-scrolling")
      }else if (newScrollPosition < previousScrollPosition){
        headerRef.current.classList.remove("inactive-scrolling")
        headerRef.current.classList.add("active")
      }

      previousScrollPosition = newScrollPosition
      }else{
        headerRef.current.classList.remove("inactive-scrolling")
        headerRef.current.classList.remove("active")
      }
      
    })
  }, [])

  return (
    <section className="hero">

      <header ref={headerRef}>
        <a href="#" className="logo">
            <img src={logo} alt="website logo" />
        </a>

        <nav className={navIsOpened? "opened" : ""}>
          <button
          onClick={()=>setNavIsOpened(false)}
          >
        <img src={x} alt="close mobile menu" />
          </button>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#stack">Tech Stack</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#projects">Projects</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#about">About Me</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="#contact">Contact Me</a>
                </li>
                </ul>

            <ul>
              <li>
                <a onClick={()=>setNavIsOpened(false)} href="mailto:en56434@gmail.com" target="_blank">Message Me</a>
                </li>
                </ul>
        </nav>

        <button 
        onClick={()=>setNavIsOpened(true)}
        className="menu-icons">
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
        Mainly building with ReactJS, I focus on turning ideas into functional and visually stunning realities. Lets collaborate and create something remarkable together!
       </p>

       <div className="hero-ctas">
       <a href="#projects"> <button>My Projects</button></a>
       
        <button>Resume</button>
       </div>
      </div>
      

       <img src={pattern} className="pattern" />
    </section>
  )
}

export default Hero