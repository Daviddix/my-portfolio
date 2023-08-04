import "./SingleProject.css"
import controlArrow from "../../assets/icons/slider-controls.svg"
import link from "../../assets/icons/link.svg"
import github from "../../assets/icons/github-1-icon.svg"
import { useRef } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

function SingleProject({name, description, stack, images, links}) {
    const mappedStack = stack.map((stack)=>{
        return <span key={stack}>{stack}</span>
    }) 

    const mappedImages = images.map((image)=>{
        return <SplideSlide key={image}><img loading="lazy" key={image} src={image} alt="" /></SplideSlide>
    })
  return (
    <div className="single-project">
        <div className="image-and-controls">
        <Splide className="images-container">
            {mappedImages}
            </Splide>
                   

            <div className="controls">
                
                    <button><img src={controlArrow} alt="move slider back by 1 image" /></button>

                    <button><img src={controlArrow} alt="move slider forward by 1 image" /></button>
                </div>
        </div>

        <div className="text-stuff">

                <div className="project-description">
                    <h1>{name}</h1>

                    <p>{description}</p>
                </div>

                <div className="tags">                    
                    {mappedStack}
                </div>

                <div className="project-buttons">
                    <a target="_blank" href={links[0]}>
                        <button>Live Site <img src={link} /></button>
                        </a>

                    <a target="_blank" href={links[1]}>
                        <button>Source Code <img src={github} /></button>
                    </a>
                </div>

        </div>
        </div>
  )
}

export default SingleProject