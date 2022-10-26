import React from "react";

export default function Footer() {
  return (
    <footer className="Footer__Container">
      <div className="Footer__Inner">
        <section className="Footer__GridContainer">
          <div className="Footer__LeftContainer">
            <h3>Empire Hospitality</h3>
            <div className="Footer__Spacer">
              <div className="Footer__SpacerInner"></div>
            </div>
            <h5>901 Officers Row</h5>
            <h5>Vancouver, WA 98661</h5>
            <div className="Footer__Spacer Footer__Spacer--NoLine"></div>
            <h5>+1-888-305-7101</h5>
            <h5>INFO@EHOTELGROUP.COM</h5>
          </div>
          <div className="Footer__GridDivider"></div>
          <div className="Footer__RightContainer">
            <a
              href="https://empirelodging.com/government-services/"
              title="Government Services"
            >
              <h3>Government Services</h3>
            </a>
            <a
              href="https://empirelodging.com/corporate-housing/"
              title="Corporate Housing"
            >
              <h3>Corporate Housing</h3>
            </a>
            <a
              href="https://empirelodging.com/emergency-lodging/"
              title="Emergency Lodging"
            >
              <h3>Emergency Lodging</h3>
            </a>
            <a
              href="https://empirelodging.com/business-travel/"
              title="Business Travel"
            >
              <h3>Business Travel</h3>
            </a>
            <a href="https://empirelodging.com/about/" title="About">
              <h3>About</h3>
            </a>
            <a href="https://empirelodging.com/contact/" title="Contact">
              <h3>Contact</h3>
            </a>
          </div>
        </section>
        <div className="Footer__Logos">
          <div className="Footer__Logo">
            <img
              src="https://empirelodging.com/wp-content/uploads/2021/11/IATA.png"
              alt="IATA"
            />
          </div>
          <div className="Footer__Logo">
            <img
              src="https://empirelodging.com/wp-content/uploads/2021/11/GSA.png"
              alt="GSA"
            />
          </div>
        </div>
        <h5 className="Footer__Copyright">© 2022 Empire Hospitality</h5>
      </div>
    </footer>
  );
}
