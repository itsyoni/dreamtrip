import { Link } from "react-scroll";

function Navbar() {
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="navbar-logo-globe"></div>
        <div className="navbar-logo-titles">
          <div className="navbar-logo-title">
            <span className="fc">DREAM</span>
            <span className="sc">TRIP</span>
          </div>
          <span className="navbar-logo-subtitle bold sc">
            חלום שהופך למציאות
          </span>
        </div>
      </div>
      <ul className="nav-links">
        <li className="link fc">
          <Link activeClass="active" smooth spy to="contact-us">
            צור קשר
          </Link>
        </li>
        <li className="link fc">
          <Link activeClass="active" smooth spy to="what-said">
            ביקורות
          </Link>
        </li>
        <li className="link fc">
          <Link activeClass="active" smooth spy to="our-service">
            השירות שלנו
          </Link>
        </li>
        <li className="link fc">
          <Link activeClass="active" smooth spy to="why-choose">
            ?למה אנחנו
          </Link>
        </li>
        <li className="link sc">
          <Link activeClass="active" smooth spy to="hero-content">
            ראשי
          </Link>
        </li>
      </ul>
      <div className="contact-info-navbar">
        <span className="contact-info">0523293219</span>
        <div className="contanct-info-br"></div>
        <span className="contact-info">dreamtrip.org@gmail.com</span>
      </div>
    </div>
  );
}

export default Navbar;
