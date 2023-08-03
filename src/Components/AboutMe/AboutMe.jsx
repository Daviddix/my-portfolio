import myImage from "../../assets/images/image.png"
import "./AboutMe.css"

function AboutMe() {
    const d = new Date 
    let years = d.getFullYear() - 2021
  return (
    <section className="about">
        <div className="about-me-inner">
            <h1 id="about">ABOUT ME</h1>

            <div className="about-me-container">
                <img src={myImage} alt="an image of Emmanuel Nsikan-David" />

                <div className="about-me-text-content">
                    <p>
                        Hey there, i'm Emmanuel Nsikan-David, a web developer from Nigeria with {years} years of professional experience in the field. Although I dabbled in web dev before, my true passion emerged when I started taking it seriously. <br />
                        Coding, designing and playing Dream League Soccer fill my days with excitement. <br /><br />
                        Beyond web development, I enjoy watching movies, playing video games and I also immerse myself in the world of music production via FL studio mobile
                    </p>

                    <a href="mailto:en56434@gmail.com" target="_blank"><button>Send me a message</button></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe