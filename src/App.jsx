import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import ContactMe from "./Components/ContactMe/ContactMe.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Stack from "./Components/Stack/Stack.jsx"
import "./App.css"
import Loader from "./Components/Loader/Loader.jsx"
function App() {

  return (
    <main 
    className="App">
    <Loader />
    <Hero />
    <Stack />
    <Projects />
    <AboutMe />
    <ContactMe />
    </main>
  )
}

export default App
