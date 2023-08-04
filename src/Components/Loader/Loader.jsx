import "./Loader.css"

function Loader({isLoading}) {
  return (
    <div 
    onTransitionEnd={()=> {
      // setTimeout(() => {
      //   document.getAnimations().forEach((a)=> {
      //     a.play()          
      //   })
      // }, 500);
        
    }}
    className={isLoading? "overlay" : "overlay finished"}>

      <div class="hypnotic"></div>

      <p>Loading Portfolio...</p>
    </div>
  )
}

export default Loader