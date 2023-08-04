import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"

// images 
import remindrOne from "../../assets/images/remindr/15shots_so-min.jpg"
import remindrTwo from "../../assets/images/remindr/120shots_so-min.jpg"
import remindrThree from "../../assets/images/remindr/471shots_so-min.jpg"

//bulk downloader
import bulkOne from "../../assets/images/bulk/168shots_so-min.jpg"
import bulkTwo from "../../assets/images/bulk/621shots_so-min.jpg"
import bulkThree from "../../assets/images/bulk/27shots_so-min.jpg"

//mathivities
import mathOne from "../../assets/images/mathivities/154shots_so-min.jpg"
import mathTwo from "../../assets/images/mathivities/441shots_so-min.jpg"
import mathThree from "../../assets/images/mathivities/762shots_so-min.jpg"

//weather
import weatherOne from "../../assets/images/weather/687shots_so-min.jpg"
import weatherTwo from "../../assets/images/weather/570shots_so-min.jpg"
import weatherThree from "../../assets/images/weather/56shots_so.png"

import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name : "Remindr",
    description : "Remindr is a web application made to help web users remember important information / tasks they keep forgetting due to their busy web activity. It uses push notifications to remind them based on the time interval they set.",
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [remindrOne, remindrTwo, remindrThree ],
    links : ["https://remindr-webapp.netlify.app/", "https://github.com/Daviddix/Remindr-webapp"]
  },
  {
    name : "Bulk Image Downloader",
    description : `Bulk Image Downloader is a web application that eases the burden of bulk image downloading by allowing you download "collection packs" which may contain 10, 50 or even 1000 images in just a few clicks`,
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [bulkOne, bulkTwo, bulkThree ],
    links : ["https://bulk-downloader.netlify.app/", "https://github.com/Daviddix/bulk-image-downloader"]
  },
  {
    name : "Mathivities",
    description : `Mathivities is a delightful web-based game designed to enhance the math skills of children aged 7 to 10.
    Through engaging and fun-filled mathematical challenges, young learners can effectively sharpen their abilities while enjoying the learning process.`,
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [mathOne, mathTwo, mathThree ],
    links : ["https://mathivities.netlify.app", "https://github.com/Daviddix/math-game"]
  },
  {
    name : "Daily Weather",
    description : "Not your average weather web app- it's packed with standard features like displaying the current temperature and weather details plus another cool feature, the ability of the background to adapt based on the current temperature or time",
    stack : ["HTML", "CSS", "JavaScript", "Invision Studio"],
    images: [weatherOne, weatherTwo, weatherThree ],
    links : ["https://daily-weather-webapp.netlify.app/", "https://github.com/Daviddix/weather-app"]
  }])

  const mappedProjects = projects.map(({name, description, stack, images, links})=>{
    return <SingleProject key={name} name={name} description={description} stack={stack} images={images} links={links} />
  })
  return (
    <section className="projects">
        <div className="projects-inner">
            <h1 id="projects">PROJECTS</h1>
            
            <div className="projects-container">
            {mappedProjects}
            </div>

            <a href="https://github.com/Daviddix?tab=repositories" target="_blank" >
              <button className="view-more">
              View more on Github 
              <img src={arrow} alt="" />
            </button>
            </a>
            
        </div>
    </section>
  )
}

export default Projects