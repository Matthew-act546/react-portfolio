import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faHashnode,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="container">
        <div className="row">
          {/* Mobile Number */}
          <div className="col-12 col-md-4 col-lg-4 pt-1 contact-box d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              {/* SVG stays as is */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <div className="contanct__info">
              <a href="#" className="contact-box__info--title">
                +63 9934683106
              </a>
              <p className="contact-box__info--subtitle">Mon-Fri 9am-6pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="col-12 col-md-4 col-lg-4 pt-1 contact-box d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              {/* SVG stays as is */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail-opened"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
                <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                <path d="M3 19l6 -6" />
                <path d="M15 13l6 6" />
              </svg>
            </div>
            <div className="contanct__info">
              <a
                href="mailto:learntocodewithmatthew@gmail.com"
                className="contact-box__info--title"
              >
                learntocodewithmatthew@gmail.com
              </a>
              <p className="contact-box__info--subtitle">Online Support</p>
            </div>
          </div>

          {/* Location */}
          <div className="col-12 col-md-4 col-lg-4 pt-1 contact-box d-md-block d-lg-flex d-flex">
            <div className="contact-box__icon">
              {/* SVG stays as is */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-2"
                viewBox="0 0 24 24"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                <path d="M9 4v13" />
                <path d="M15 7v5.5" />
                <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                <path d="M19 18v.01" />
              </svg>
            </div>
            <div className="contanct__info">
              <a href="#" className="contact-box__info--title">
                Metro Manila, Philippines
              </a>
              <p className="contact-box__info--subtitle">
                Katarungan Village 2, Muntinlupa City
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div style={{ backgroundColor: "#212121" }} className="footer-sm">
        <div className="container">
          <div className="row py-4 mt-4 text-center">
            <div className="col-lg-5 col-md-6 mb-4 mb-md-0 text-white">
              <p>Let's Connect on social media!</p>
            </div>
            <div className="col-lg-7 col-md-6 mb-4">
              <a
                href="https://www.facebook.com/LearnToCodeWithMatthew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="link-logo me-2 fs-1" />
              </a>
              <a href="https://github.com/Matthew-act546/">
                <FontAwesomeIcon icon={faGithub} className="link-logo me-2 fs-1" />
              </a>
              <a href="https://www.linkedin.com/in/matthew-act546/">
                <FontAwesomeIcon icon={faLinkedin} className="link-logo me-2 fs-1" />
              </a>
              <a href="https://hashnode.com/@chewwwy">
                <FontAwesomeIcon icon={faHashnode} className="link-logo me-2 fs-1" />
              </a>
              <a
                href="https://www.youtube.com/@LearningToCodeWithMatthew"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="link-logo fs-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom pb-5 pt-5">
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-12">
              <div className="footer-bottom__copyright">
                &copy; Copyright 2024-2025 Created by{" "}
                <a href="#" title=";)">
                  Matthew
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
