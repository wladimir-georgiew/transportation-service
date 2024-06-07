function App() {
  return (
    <header className="site-navbar site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="site-logo">
            <a href="index.html" className="text-black">
              <span className="text-primary">Depot</span>
            </a>
          </div>

          <div className="col-12">
            <nav className="site-navigation text-right ml-auto " role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                <li>
                  <a href="#home-section" className="nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services-section" className="nav-link">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#about-section" className="nav-link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#why-us-section" className="nav-link">
                    Why Us
                  </a>
                </li>

                <li>
                  <a href="#testimonials-section" className="nav-link">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#blog-section" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
