import Marquee from "react-fast-marquee";

function HeroContent() {
  return (
    <div className="hero-section-content">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=0.1"
      ></meta>
      <div className="hero-section-title">
        <span className="title fc bold">תכנון וארגון טיולים לחו"ל</span>
        <span className="title fc bold">בהתאמה אישית</span>
      </div>
      <div className="hero-section-images">
        <Marquee gradient={false}>
          <img className="hero-section-image" src=".\assets\hsi1.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi2.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi3.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi4.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi5.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi6.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi7.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi8.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi9.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi10.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi11.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi12.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi13.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi14.png" alt="" />
          <img className="hero-section-image" src=".\assets\hsi15.png" alt="" />
        </Marquee>
      </div>
      <button className="hero-section-button bold">
        למידע נוסף <span className="sc bold"> לחצו כאן </span>
      </button>
      <div className="hero-section-icons">
        <div className="hero-section-icon">
          <img src=".\.\assets\grandparents.png" alt="" />
          <span className="hero-section-icon-text bold">
            טיולים לגיל השלישי
          </span>
        </div>
        <div className="hero-section-icon">
          <img src=".\.\assets\family.png" alt="" />
          <span className="hero-section-icon-text bold">טיולי משפחות</span>
        </div>
        <div className="hero-section-icon">
          <img src=".\.\assets\friends.png" alt="" />
          <span className="hero-section-icon-text bold">טיולי חברים/ות</span>
        </div>
        <div className="hero-section-icon">
          <img src=".\.\assets\boy.png" alt="" />
          <span className="hero-section-icon-text bold">טיולי בודדים</span>
        </div>
        <div className="hero-section-icon">
          <img src=".\.\assets\nature.png" alt="" />
          <span className="hero-section-icon-text bold">טיולי טבע</span>
        </div>
        <div className="hero-section-icon">
          <img src=".\.\assets\cheers.png" alt="" />
          <span className="hero-section-icon-text bold">טיולים רומנטיים</span>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
