import "./Loader.css"

function Loader() {
  return (
    <div 
    onAnimationEnd={()=> {
      document.body.style.overflowY = "scroll"
        
    }}
    className={"overlay finished"}>

      <div className="hypnotic"></div>

      <p>Loading Portfolio...</p>
    </div>
  )
}

export default Loader