import email from "../../assets/icons/email-icon.svg" 
import arrow from "../../assets/icons/view-more-arrow.svg"
import twitter from "../../assets/icons/twitter-icon.svg"
import github from "../../assets/icons/github-2-icon.svg"

function ContactMe() {
  return (
    <section>
        <div className="contact-me-inner">
            <h1>CONTACT ME</h1>

            <div className="contact-container">
                <div className="email">
                    <div className="icon-container">
                        <img src={email} alt="email icon" />
                    </div>

                    <a href="" className="email-link">
                        Send me an email <img src={arrow} alt="" />
                    </a>
                </div>

                <div className="twitter">
                    <div className="icon-container">
                        <img src={twitter} alt="twitter icon" />
                    </div>

                    <a href="" className="twitter-link">
                        Message me on Twitter <img src={arrow} alt="" />
                    </a>
                </div>

                <div className="github">
                    <div className="icon-container">
                        <img src={github} alt="github icon" />
                    </div>

                    <a href="" className="github-link">
                        Send me an github <img src={arrow} alt="" />
                    </a>
                </div>
            </div>

            <p className="attr">
                Designed and built by Emmanuel Nsikan-David
            </p>
        </div>
    </section>
  )
}

export default ContactMe