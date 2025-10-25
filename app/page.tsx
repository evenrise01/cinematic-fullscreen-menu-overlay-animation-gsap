export default function Home() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Evenrise</a>
        </div>

        <div className="menu-toggle">
          <p id="menu-open">Menu</p>
          <p id="menu-open">Close</p>
        </div>
      </nav>
      {/* Clip path to the the menu-overlay and tilt animation to the menu-content*/}
      <div className="menu-overlay">
        <div className="menu-content">
          <div className="menu-items">
            <div className="col-lg">
              <div className="menu-preview-img">
                <img src="/img-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm">
              <div className="menu-links">
                <div className="link">
                  <a href="#" data-img="/img-1.jpg">
                    Visions
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-2.jpg">
                    Core
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-3.jpg">
                    Work
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-4.jpg">
                    Connect
                  </a>
                </div>
              </div>
              <div className="menu-socials">
                <div className="social">
                  <a href="#" data-img="/img-1.jpg">
                    Behance
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-2.jpg">
                    Dribble
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-3.jpg">
                    Instagram
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-4.jpg">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="menu-footer">
                <div className="col-lg">
                  <a href="#">Run Sequence</a>
                </div>
                <div className="col-sm">
                  <a href="#">Origin</a>
                  <a href="#">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="hero">
          <div className="hero-img">
            <img src="/hero.jpg" alt="" />
          </div>
          <h1>Elevate your websites with Intention.</h1>
        </section>
      </div>
    </>
  );
}
