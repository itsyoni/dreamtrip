function Footer() {
  return (
    <div className="footer">
      <div className="footer-navabr-logo">
        <div className="footer-navabr-logo-globe"></div>
        <div className="footer-navabr-logo-titles">
          <div className="footer-navabr-logo-title">
            <span className="tc">DREAM</span>
            <span className="sc">TRIP</span>
          </div>
          <span className="footer-navabr-logo-subtitle bold">
            חלום שהופך למציאות
          </span>
        </div>
      </div>
      <div className="brd" />
      <div className="footer-navabr">
        <ul className="footer-navbar-links">
          <li></li>
        </ul>
        <div className="footer-navbar-social-links">
          <span className="footer-navbar-social-links-title text bold">
            !הישארו בקשר
          </span>
          <a
            className="footer-navbar-social-link"
            href="https://m.me/117439751268136"
          >
            <img
              className="footer-navbar-social-img"
              src=".\assets\messenger.png"
              alt=""
            />
            <span className="footer-navbar-social-link-text">Mesenger</span>
          </a>
          <a
            className="footer-navbar-social-link"
            href="https://wa.me/972523293219"
          >
            <img
              className="footer-navbar-social-img"
              src=".\assets\whatsapp.png"
              alt=""
            />
            <span className="footer-navbar-social-link-text">Whatsapp</span>
          </a>
          <a
            className="footer-navbar-social-link"
            href="https://t.me/+972523293219"
          >
            <img
              className="footer-navbar-social-img"
              src=".\assets\telegram.png"
              alt=""
            />
            <span className="footer-navbar-social-link-text">Telegram</span>
          </a>
          <a
            className="footer-navbar-social-link"
            href="https://www.instagram.com/dream.trip4u/"
          >
            <img
              className="footer-navbar-social-img"
              src=".\assets\instagram.png"
              alt=""
            />
            <span className="footer-navbar-social-link-text">Instagram</span>
          </a>
          <a
            className="footer-navbar-social-link"
            href="https://m.facebook.com/117439751268136/"
          >
            <img
              className="footer-navbar-social-img"
              src=".\assets\facebook.png"
              alt=""
            />
            <span className="footer-navbar-social-link-text">Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
