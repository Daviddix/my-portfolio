import { useState } from "react"
import SingleProject from "../SingleProject/SingleProject"
import "./Projects.css"
import imageOne from "../../assets/images/15shots_so.jpg"
import imageTwo from "../../assets/images/120shots_so.jpg"
import imageThree from "../../assets/images/471shots_so.jpg"
import arrow from "../../assets/icons/view-more-arrow.svg"


function Projects() {
  const [projects, setProjects] = useState([{
    name : "Remindr",
    description : "Remindr is a web application made to help web users remember important information / tasks they keep forgetting due to their busy web activity. It uses push notifications to remind them based on the time interval they set",
    stack : ["ReactJS", "CSS", "Invision Studio"],
    images: [imageOne, imageTwo, imageThree ]
  }])

  const mappedProjects = projects.map(({name, description, stack, images})=>{
    return <SingleProject name={name} description={description} stack={stack} images={images} />
  })
  return (
    <section className="projects">
        <div className="projects-inner">
            <h1>PROJECTS</h1>
            
            <div className="projects-container">
            {mappedProjects}
            </div>

            <button className="view-more">
              View more on Github 
              <img src={arrow} alt="" />
            </button>
        </div>
    </section>
  )
}

export default Projects