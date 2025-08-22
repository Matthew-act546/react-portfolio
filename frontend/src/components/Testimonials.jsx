import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faStar, faLongArrowAltLeft, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import charissImage from "../images/testimonials/chariss.jpeg";
import leslieImage from "../images/testimonials/leslie.jpg";

export default function Testimonials() {
  return (
    <section className="testimonials">
      {/* Top SVG Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,101.3C672,53,768,43,864,48C960,53,1056,75,1152,106.7C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="container text-center text-white">
        <div className="row">
          <span id="testimonials"></span>
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr style={{ width: "100px", height: "3px" }} className="mx-auto" />
          <p className="lead pt-1">What my client saying</p>
        </div>

        {/* Carousel */}
        <div className="row align-items-center">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <div className="testimonials__card">
                  <p className="lh-lg">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-primary"/>  Matthew's technical proficiency and excellent
                    communication skills were crucial in our Science, Technology, and Society group project which
                    involved developing a user-friendly website for accounting learning materials. His dedication
                    and our high grade reflected his success.
                    <FontAwesomeIcon icon={faQuoteRight} className="text-primary"/>

                    <div className="ratings p-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-primary"/>
                      ))}
                    </div>
                  </p>
                </div>
                <div className="testimonials__picture">
                  <img src={charissImage} alt="client-2" className="img-fluid rounded-circle" />
                </div>
                <div className="testimonials__name">
                  <h3>Chariss R. Salvador</h3>
                  <p className="lead">A client (STS Performance Task)</p>
                </div>
              </div>

              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <div className="testimonials__card">
                  <p className="lh-lg">
                    <FontAwesomeIcon icon={faQuoteLeft} className="text-primary"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam labore dicta eos similique blanditiis ad quasi! In maxime dolorem dolorum nisi. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Tempore, magni.
                    <FontAwesomeIcon icon={faQuoteRight} className="text-primary"/> 

                    <div className="ratings p-1">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="text-primary"/>
                      ))}
                    </div>
                  </p>
                </div>
                <div className="testimonials__picture">
                  <img src={leslieImage} alt="client-3" className="img-fluid rounded-circle" />
                </div>
                <div className="testimonials__name">
                  <h3>Leslie Fernandez</h3>
                  <p className="lead">Owner Hot Potato Poblacion branch</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="text-center">
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
              </button>
              <button
                className="btn btn-outline-light"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L48,80C96,128,192,224,288,229.3C384,235,480,149,576,101.3C672,53,768,43,864,48C960,53,1056,75,1152,106.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
