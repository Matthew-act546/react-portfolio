import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faGithub,
  faLinkedin,
  faHashnode
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import myImage from "../images/my-image.png";

export default function Home() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row">
          <div className="col-md-7 intros mt-5 order-2 order-md-1">
            <h1 className="display-2">
              <span className="display-2--intro">
                Welcome! <br /> I'm Matthew
              </span>
              <span className="display-2--description lh-base">
                Welcome to my world of web development, where every project
                tells a story. Explore my portfolio to see how I can help
                elevate your business with dynamic, user-centric websites that
                leave a lasting impression.
              </span>
            </h1>

            <div className="d-flex gap-2 mb-3">
              <a
                href="https://www.facebook.com/LearnToCodeWithMatthew/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="fs-1 link-logo" />
              </a>

              <a
                href="https://www.youtube.com/@LearningToCodeWithMatthew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="fs-1 link-logo" />
              </a>

              <a
                href="https://github.com/Matthew-act546"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="fs-1 link-logo" />
              </a>

              <a
                href="https://www.linkedin.com/in/matthew-act546"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="fs-1 link-logo" />
              </a>

              <a
                href="https://hashnode.com/@chewwwy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hashnode"
              >
                <FontAwesomeIcon icon={faHashnode} className="fs-1 link-logo" />
              </a>

              <a
                href="mailto:learntocodewithmatthew@gmail.com"
                aria-label="Email"
              >
                
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fs-1 link-logo"
                />
                
              </a>
            </div>

            <a
              href="#contact"
              className="btn btn-rounded"
              style={{ textDecoration: "none", borderRadius: "10px" }}
            >
              Get in touch
              <span>
                <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
              </span>
            </a>
          </div>

          <div className="col-md-5 mt-4 order-1 order-md-2 intros d-flex justify-content-center align-items-center">
            <div className="circle-border mx-auto">
              <img
                src={myImage}
                alt="video illustration"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,96C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
