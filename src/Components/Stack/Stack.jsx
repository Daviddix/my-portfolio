import { useState } from "react"
import html from "../../assets/icons/html5-original.svg"
import css from "../../assets/icons/css3-original.svg"
import js from "../../assets/icons/javascript-original.svg"
import tailwind from "../../assets/icons/tailwindcss-plain.svg"
import react from "../../assets/icons/react-original.svg"
import invision from "../../assets/icons/invision-icon.svg"
import SingleStack from "../SingleStack/SingleStack"
import "./Stack.css"

function Stack() {
    const [stack, setStack] = useState([{name : "HTML", icon : html}, {name : "CSS", icon : css}, {name : "JavaScript", icon : js}, {name: "Tailwind CSS", icon : tailwind}, {name : "ReactJS", icon : react}, {name: "Invision Studio", icon : invision}])

    const mappedStack = stack.map(({icon, name}) => {
        return <SingleStack icon={icon} name ={name} />
    })
  return (
    <section className="stack">
        <div className="stack-inner">
              <h1>TECH STACK</h1>

        <div className="stack-container">
        {mappedStack}
        </div>
        </div>
      
    </section>
  )
}

export default Stack