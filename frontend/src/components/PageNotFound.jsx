import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

export default function PageNotFound() {
  
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 border border-3 border-primary ">
          <h1>404 Not found </h1>
          <div className="d-flex justify-content-center">
            <a>
              <Link to="/">
              <button type="button" className="rounded-pill border-primary btn-rounded">
                Go back to Home
                <span>
                  <i><FontAwesomeIcon icon={faArrowUp} className="rotate-icon" /></i>
                </span>
              </button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}


