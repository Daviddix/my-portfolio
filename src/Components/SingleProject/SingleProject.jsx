import "./SingleProject.css"
import controlArrow from "../../assets/icons/slider-controls.svg"
import link from "../../assets/icons/link.svg"
import github from "../../assets/icons/github-1-icon.svg"

function SingleProject({name, description, stack, images}) {
    const mappedStack = stack.map((stack)=>{
        return <span>{stack}</span>
    }) 

    const mappedImages = images.map((image)=>{
        return <img src={image} alt="" />
    })
  return (
    <div className="single-project">
        <div className="image-and-controls">
        <div className="images-container">
            {mappedImages}
            </div>
                   

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
                    <button>Live Site <img src={link} /></button>

                    <button>Source Code <img src={github} /></button>
                </div>

        </div>
        </div>
  )
}

export default SingleProject