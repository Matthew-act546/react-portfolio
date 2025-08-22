import hotPotatoImg from '../images/portfolio/hot-potato.png';
import plmunConnectImg from '../images/portfolio/plmun-connect.png';
import stsImg from '../images/portfolio/sts.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="text-center">
          <h1 className="display-3 fw-bold">Latest Work</h1>
          <div className="heading-line mb-4"></div>
          <p className="lead mb-5">These are my latest work!</p>
        </div>

        {/* Portfolio items */}
        <div className="row">

          {/* Project 1 */}
          <div className="col-lg-5 col-md-6">
            <div className="portfolio-box shadow">
              <img
                src={hotPotatoImg}
                alt="Hot Potato project"
                title="Portfolio 1 image"
                className="img-fluid"
              />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>Hot potato Muntinlupa</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div>
              <h2 className="display-3--title">Hot potato Muntinlupa</h2>
              <p>
                Visit Website:{" "}
                <a
                  href="https://hot-potato-muntinlupa.vercel.app/"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://hot-potato-muntinlupa.vercel.app/
                </a>
              </p>
              <div className="d-flex gap-2 mb-2">
                <i className="devicon-react-original fs-1 colored"></i>
                <i className="devicon-sass-original fs-1 colored"></i>
                <i className="devicon-bootstrap-plain fs-1 colored"></i>
                <i className="devicon-html5-plain fs-1 colored"></i>
                <i className="devicon-javascript-plain fs-1 colored"></i>
                <i className="devicon-python-plain fs-1 colored"></i>
                <i className="devicon-django-plain fs-1 colored"></i>
              </div>
              <p>
                Hot Potato is a website designed to showcase and promote the offerings of Hot Potato Muntinlupa, a business
                known for its mouth-watering fries. This project includes sections for viewing the available products,
                learning about the business, and reaching out for inquiries.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-5 col-md-6">
            <div className="portfolio-box shadow">
              <img
                src={plmunConnectImg}
                alt="PLMun Connect project"
                title="Portfolio 2 image"
                className="img-fluid"
              />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>PLMun Connect</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div>
              <h2 className="display-3--title">PLMun Connect</h2>
              <p>
                GitHub link:{" "}
                <a
                  href="https://github.com/Matthew-act546/final-plmun-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  final-plmun-connect
                </a>
              </p>
              <div className="d-flex gap-2 mb-2">
                <i className="devicon-html5-plain fs-1 colored"></i>
                <i className="devicon-css3-plain fs-1 colored"></i>
                <i className="devicon-bootstrap-plain fs-1 colored"></i>
                <i className="devicon-javascript-plain fs-1 colored"></i>
                <i className="devicon-php-plain fs-1 colored"></i>
                <i className="devicon-mysql-plain-wordmark fs-1 colored"></i>
              </div>
              <p>
                PLMUN Connect is a web-based event registration and management system designed for students and organizations
                at Pamantasan ng Lungsod ng Muntinlupa (PLMun). The platform allows users to register for events, manage
                created events, and handle user accounts with ease. It aims to streamline communication and participation
                between student organizations and the student body.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-5 col-md-6">
            <div className="portfolio-box shadow">
              <img
                src={stsImg}
                alt="STS project"
                title="Portfolio 3 image"
                className="img-fluid"
              />
              <div className="portfolio-info">
                <div className="caption">
                  <h4>STS project</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6">
            <div>
              <h2 className="display-3--title">STS project</h2>
              <p>
                Website link:{" "}
                <a
                  href="https://sts-project-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  https://sts-project-ten.vercel.app/
                </a>
              </p>
              <div className="d-flex gap-2 mb-2">
                <i className="devicon-html5-plain fs-1 colored"></i>
                <i className="devicon-css3-plain fs-1 colored"></i>
                <i className="devicon-javascript-plain fs-1 colored"></i>
              </div>
              <p>
                The Journal, a digital handbook for Accountancy designed by students of Bachelor of Science in Accountancy at
                Polytechnic University of the Philippines - San Pedro, provides students and professionals with a comprehensive
                and accessible reference on various accounting topics, including core principles, standards, taxation,
                auditing, financial management, software guidance, practical examples, and interactive features.
              </p>
            </div>
          </div>

        </div>

        {/* View More Button */}
        <div className="d-flex justify-content-center">
          <a href="viewProjects.html">
            <button type="button" className="rounded-pill border-primary btn-rounded">
              View more projects!
              <span>
                <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
