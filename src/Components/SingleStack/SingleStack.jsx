import "./SingleStack.css"

function SingleStack({icon, name}) {
  return (
    <div className="single-stack">
        <img src={icon} alt={`icon of ${name}`} />
        <p>{name}</p>
    </div>
  )
}

export default SingleStack