import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function GetStarted() {
  return (
    <section className="get-started" id="contact">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-capitalize">Get Started</h1>
          <div className="heading-line"></div>
          <p className="lh-lg">Getting touch with me here!</p>

          <div className="row text-start text-white">
            {/* Left Column */}
            <div className="col-12 col-lg-6 gradient shadow p-3">
              <div className="cta-info">
                <h4 className="display-4 fw-bold">Commitment to your growth</h4>
                <p className="lh-lg">
                  My goal is to assist you in developing practical, long-lasting skills. Every session is designed to
                  support your learning journey and assist you in reaching your objectives, regardless of whether
                  you're just starting or looking to level up.
                </p>
                <h3 className="display-3--brief">What will be the next step?</h3>
                <ul className="cta-info__list">
                  <li>
                    <i className="fas fa-check"></i> We’ll review your needs
                  </li>
                  <li>
                    <i className="fas fa-check"></i> We’ll tailor a plan for you
                  </li>
                  <li>
                    <i className="fas fa-check"></i> You’ll begin learning with confidence
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="col-12 col-lg-6 bg-white shadow p-3">
              <div className="form pb-2">
                <h4 className="display-3--title text-center mb-5">Start your Project</h4>
                <form
                  action="https://formspree.io/f/xjkwzvzo"
                  id="get-started-form"
                  method="POST"
                  className="row"
                >
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      id="inputFirstName"
                      className="shadow form-control-lg form-control"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      id="inputLastName"
                      className="shadow form-control-lg form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      id="inputEmail"
                      className="shadow form-control-lg form-control"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      cols="30"
                      rows="8"
                      className="shadow form-control-lg form-control"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button type="submit" className="btn btn-primary rounded-pill pt-3 pb-3">
                      Submit <i><FontAwesomeIcon icon={faPaperPlane} /></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
