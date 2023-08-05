import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import ContactMe from "./Components/ContactMe/ContactMe.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Stack from "./Components/Stack/Stack.jsx"
import "./App.css"
import { useEffect } from "react"
import Loader from "./Components/Loader/Loader.jsx"
import { useState } from "react"
import { useRef } from "react"
function App() {
  const [isLoading, setIsLoading] = useState(false)
  
  // useEffect(()=>{
  //   window.addEventListener("loadeddata", ()=>{
  //     console.log("hey")
  //   })

  //   document.onreadystatechange = function(){
  //     console.log("first time?");
  //     if (document.readyState == "complete") { 
  //       setIsLoading(false)
  //     }
  //   }
  // }, [])

  return (
    <main 
    className="App">
     <Loader isLoading={isLoading} />
    <Hero />
    <Stack />
    <Projects />
    <AboutMe />
    <ContactMe />
    </main>
  )
}

export default App
