import videoTutorial from "../images/services/video-tutorial-62.png";
import codingImage from "../images/services/coding-2-31.png";
import uiDesignImage from "../images/services/ui-design-26.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold">My Services</h1>
          <div className="heading-line mb-1"></div>
        </div>
      </div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3">
              <h2 className="fw-bold text-capitalize text-center">
                Transforming Ideas into Stunning, High-Performance Websites
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-white p-1 text-start">
              <p className="fw-light">
                I create high-performance, user-friendly websites that blend stunning design
                with seamless functionality. As a full-stack developer, I handle everything
                from UI/UX to back-end optimization, ensuring fast, scalable, and future-proof
                solutions that drive engagement and results.
              </p>
            </div>
          </div>
        </div>

        {/* Tutorials Section */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 services mt-4">
            <div className="services__content pt-5">
              <i className="fa-solid fa-person-chalkboard icon d-block"></i>
              <h3 className="display-3--title mt-1">Tutoring</h3>
              <p className="lh-lg">
                I have tutoring services in{" "}
                <a
                  href="https://www.facebook.com/LearnToCodeWithMatthew"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learning to Code with Matthew.
                </a>{" "}
                I teach web development, HTML, CSS, Bootstrap 5, JavaScript, PHP, and responsive
                websites. Other than that, I teach programming languages too, C++ and Python.
                I make the tutoring session beginner-friendly, clear, and enjoyable! What are you
                waiting for? Click to learn more!
              </p>
              <a href="tutorial.html">
                <button type="button" className="rounded-pill border-primary btn-rounded">
                  Learn More!
                  <span>
                    <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 services text-end">
            <div className="services__pic">
              <img src={videoTutorial} alt="tutoring illustration" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* Web Development Section */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 services text-start">
            <div className="services__pic">
              <img src={codingImage} alt="Web Development illustration" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 services mt-4">
            <div className="services__content pt-5">
              <i className="fas fa-code icon d-block"></i>
              <h3 className="display-3--title mt-1">Full Stack Web Development</h3>
              <p className="lh-lg">
                I provide full-stack web development services, creating fast, responsive,
                and user-friendly websites tailored to your needs. From front-end design
                using HTML, CSS, SCSS, Bootstrap, Figma, and React.js to back-end development
                with Python, Django, MySQL, and MongoDB, I ensure seamless functionality
                and scalability.
              </p>
              <a href="full-stack.html">
                <button type="button" className="rounded-pill border-primary btn-rounded">
                  Learn More!
                  <span>
                    <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* UI/UX Design Section */}
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 services mt-4">
            <div className="services__content pt-5">
              <i className="fa-solid fa-palette icon d-block"></i>
              <h3 className="display-3--title mt-1">UI/UX Design</h3>
              <p className="lh-lg">
                I offer UI/UX design services focused on creating visually appealing,
                intuitive, and user-friendly digital experiences. I specialize in designing
                responsive and modern interfaces that enhance usability and engagement.
                My approach includes user research, accessibility best practices, and seamless
                design-to-development handoff using tools like Figma.
              </p>
              <a href="design.html">
                <button type="button" className="rounded-pill border-primary btn-rounded">
                  Learn More!
                  <span>
                    <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 services mt-4 text-end">
            <div className="services__pic pt-5">
              <img src={uiDesignImage} alt="UI/UX illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
