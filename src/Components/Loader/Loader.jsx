import "./Loader.css"

function Loader({isLoading}) {
  return (
    <div 
    onTransitionEnd={()=> {
      document.body.style.overflowY = "scroll"
        
    }}
    className={isLoading? "overlay" : "overlay finished"}>

      <div className="hypnotic"></div>

      <p>Loading Portfolio...</p>
    </div>
  )
}

export default Loader