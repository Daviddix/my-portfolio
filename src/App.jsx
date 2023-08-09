import AboutMe from "./Components/AboutMe/AboutMe.jsx"
import ContactMe from "./Components/ContactMe/ContactMe.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Projects from "./Components/Projects/Projects.jsx"
import Stack from "./Components/Stack/Stack.jsx"
import "./App.css"
import Loader from "./Components/Loader/Loader.jsx"
import { Helmet } from 'react-helmet-async';
import og from "./assets/images/og-image.jpg"
function App() {

  return (
    <main 
    className="App">
      <Helmet>
      <title>Nsikan-David | Frontend Web Developer</title>
      <meta name="description" content="Emmanuel Nsikan-david | Frontend Web Developer & UI Designer" />
      <meta property="og:image" content={og} />
      
      <meta property="og:url" content="https://nsikandavid.netlify.app" />
      <meta property="og:title" content="Nsikan-David | Frontend Web Developer" />
      <meta property="og:description" content="Emmanuel Nsikan-david | Frontend Web Developer & UI Designer" />
      <meta property="og:image" content={og} />


      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="nsikandavid.dev" />
      <meta property="twitter:url" content="https://nsikandavid.dev" />
      <meta name="twitter:title" content="Nsikan-David | Frontend Web Developer" />
      <meta name="twitter:description" content="Emmanuel Nsikan-david | Frontend Web Developer & UI Designer " />
      <meta name="twitter:image" content={og} />
    </Helmet>
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
