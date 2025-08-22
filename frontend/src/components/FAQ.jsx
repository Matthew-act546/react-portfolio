export default function FAQ() {
  return (
    <section className="faq">
      <div className="container" id="faq">
        <div className="text-center">
          <h1 className="display-3 fw-bold mt-5">FAQ?</h1>
          <div className="heading-line mb-4"></div>
          <p className="lead">Frequently asked questions, get knowledge beforehand</p>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <div className="accordion accordion-flush" id="accordionFlushExample">

              {/* FAQ Item 1 */}
              <div className="accordion-item shadow my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Who am I? Why hire me?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      I'm <code className="code">Matthew David C. Fernandez</code> from{" "}
                      <code className="code">Muntinlupa City, Philippines</code> and a student in{" "}
                      <code className="code">Pamantasan ng lungsod ng Muntinlupa.</code> 18 yrs old turning 19 this year. I've
                      been coding since 2020 when the pandemic hit. During the pandemic, I learned a lot. Do you want to know more
                      about my story? on how I got into programming click{" "}
                      <a href="#" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        here.
                      </a>{" "}
                      Hire me for full-stack web development because I build fast, responsive, and scalable websites with clean
                      code and seamless functionality. I ensure high performance, security, and user experience from front-end
                      design to back-end integration. Whether you need a custom web app, API integration, or a complete digital
                      solution, I deliver efficient and future-proof results.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item shadow my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What stacks do you know? What is your stack expertise?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      As a full-stack web developer, I am{" "}
                      <code className="code">
                        skilled in JavaScript, React.js, HTML, CSS, SCSS, Bootstrap, Python, Django, MySQL, and MongoDB.
                      </code>{" "}
                      My areas of expertise include using React and Bootstrap to create responsive front-end interfaces, Django
                      to ensure smooth back-end operations, and MySQL and MongoDB for database administration. Also, I concentrate
                      on building scalable web apps that meet corporate objectives, integrating APIs, and improving performance.
                      Do you want to know my stacks? Visit my GitHub{" "}
                      <a
                        href="https://github.com/Matthew-act546/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        here
                      </a>{" "}
                      and see my projects.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item shadow my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How much is your rate? (hr/projects)
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      <code className="code">The complexity, size, and needs of the project all affect my rates.</code> Simple
                      front-end development jobs might cost less, but full-stack web apps that include database administration,
                      API development, and back-end integration will cost more. However, I adjust my rates according to the
                      technical requirements, project's schedule, and other factors. Please{" "}
                      <a href="#contact">get in touch</a> with me if you have a specific project in mind, and I will be happy to
                      send you an estimate tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
