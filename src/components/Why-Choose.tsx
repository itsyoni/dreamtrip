function WhyChoose() {
  return (
    <div className="why-choose">
      <span className="why-choose-title title bold tc">
        {" "}
        Dream<span className="why-choose-title sc">Trip</span>מדוע לבחור דווקא ב
      </span>
      <div className="why-choose-icons">
        <div className="why-choose-icon-box">
          <img className="why-choose-icon" src=".\assets\clock.png" alt="" />
          <span className="why-choose-icon-text bold">זמינות</span>
        </div>
        <div className="why-choose-icon-box">
          <img className="why-choose-icon" src=".\assets\shield.png" alt="" />
          <span className="why-choose-icon-text bold">אמינות</span>
        </div>
        <div className="why-choose-icon-box">
          <img
            className="why-choose-icon"
            src=".\assets\clockAndMoney.png"
            alt=""
          />
          <span className="why-choose-icon-text bold">חסכון בזמן ובכסף</span>
        </div>
      </div>
      <div className="why-choose-icons">
        <div className="why-choose-icon-box">
          <img className="why-choose-icon" src=".\assets\support.png" alt="" />
          <span className="why-choose-icon-text bold">מענה מקצועי</span>
        </div>
        <div className="why-choose-icon-box">
          <img
            className="why-choose-icon"
            src=".\assets\handshake.png"
            alt=""
          />
          <span className="why-choose-icon-text bold">
            ליווי אישי לכל אורך הדרך
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
