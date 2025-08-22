import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark linear-background shadow fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src={logo} style={{ height: "65px" }} alt="logo image" />

            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-start">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#faq">Faq</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://coding-story.hashnode.dev/" target="_blank">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="resume.html" target="_blank">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    </>
  )
}