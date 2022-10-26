import React from "react";

export default function Header() {
  return (
    <header>
      <section className="DesktopNav__Container">
        <div className="DesktopNav__LogoContainer">
          <a href="/">
            <img
              src="https://empirelodging.com/wp-content/uploads/2022/01/Empire-Logo-LS-C-Lodging.png"
              className="DesktopNav__Logo"
            />
          </a>
        </div>
        <nav className="DesktopNav__NavContainer">
          <ul className="DesktopNav__Nav">
            <li className="DesktopNav__Item ">
              <a href="/" title="Home" className="DesktopNav__ItemLink ">
                Home
              </a>
            </li>
            <li className="DesktopNav__Item ">
              <a
                href="https://empirelodging.com/government-services/"
                title="Government Services"
                className="DesktopNav__ItemLink "
              >
                Government Services
              </a>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <a
                href="https://empirelodging.com/corporate-housing/"
                title="Corporate Housing"
                className="DesktopNav__ItemLink "
              >
                Corporate Housing
              </a>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/corporate-housing/"
                    title="Corporate Housing"
                  >
                    Corporate Housing
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/travel-nurse-housing/"
                    title="Healthcare and Medical Professionals"
                  >
                    Healthcare and Medical Professionals
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/furnishings/"
                    title="Furnishings"
                  >
                    Furnishings
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/corporate-housing-faqs/"
                    title="Corporate Housing FAQs"
                  >
                    Corporate Housing FAQs
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/corporate-housing-request-information/"
                    title="Corporate Housing Request Information"
                  >
                    Corporate Housing Request Information
                  </a>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <a
                href="https://empirelodging.com/emergency-lodging/"
                title="Emergency Lodging"
                className="DesktopNav__ItemLink "
              >
                Emergency Lodging
              </a>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/emergency-lodging/"
                    title="Emergency Lodging"
                  >
                    Emergency Lodging
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/emergency-lodging-faqs/"
                    title="Emergency Lodging FAQs"
                  >
                    Emergency Lodging FAQs
                  </a>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <a
                href="https://empirelodging.com/business-travel/"
                title="Business Travel"
                className="DesktopNav__ItemLink "
              >
                Business Travel
              </a>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/business-travel/"
                    title="Business Travel"
                  >
                    Business Travel
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/business-travel-request-information/"
                    title="Business Travel Request Information"
                  >
                    Business Travel Request Information
                  </a>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren DesktopNav__Item--Edge ">
              <a
                href="https://empirelodging.com/about/"
                title="About"
                className="DesktopNav__ItemLink "
              >
                About
              </a>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <a href="https://empirelodging.com/about/" title="About">
                    About
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/meet-the-team/"
                    title="Meet the Team"
                  >
                    Meet the Team
                  </a>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/articles-and-updates/"
                    title="Articles &amp; Updates"
                  >
                    Articles &amp; Updates
                  </a>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--Edge ">
              <a
                href="https://empirelodging.com/contact/"
                title="Contact"
                className="DesktopNav__ItemLink "
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="MobileNav__Container">
        <section className="MobileNav__Header">
          <div className="MobileNav__LogoContainer">
            <img
              src="https://empirelodging.com/wp-content/uploads/2022/01/Empire-Logo-LS-C-Lodging.png"
              className="MobileNav__Logo"
            />
          </div>
          <div className="MobileNav__Burger" onclick="openMobileNav()">
            <i className="fas fa-bars"></i>
          </div>
        </section>

        <div id="MobileNav__NavContainer" className="MobileNav__NavContainer">
          <div className="MobileNav__Close" onclick="closeMobileNav()">
            <i className="fas fa-times"></i>
          </div>
          <ul className="MobileNav__Nav">
            <li className="MobileNav__Item">
              <a href="/" title="Home" className="MobileNav__ItemLink">
                Home
              </a>
            </li>
            <li className="MobileNav__Item">
              <a
                href="https://empirelodging.com/government-services/"
                title="Government Services"
                className="MobileNav__ItemLink"
              >
                Government Services
              </a>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <a
                href="https://empirelodging.com/corporate-housing/"
                title="Corporate Housing"
                className="MobileNav__ItemLink"
              >
                Corporate Housing
              </a>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/travel-nurse-housing/"
                    title="Healthcare and Medical Professionals"
                  >
                    Healthcare and Medical Professionals
                  </a>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/furnishings/"
                    title="Furnishings"
                  >
                    Furnishings
                  </a>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/corporate-housing-faqs/"
                    title="Corporate Housing FAQs"
                  >
                    Corporate Housing FAQs
                  </a>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/corporate-housing-request-information/"
                    title="Corporate Housing Request Information"
                  >
                    Corporate Housing Request Information
                  </a>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <a
                href="https://empirelodging.com/emergency-lodging/"
                title="Emergency Lodging"
                className="MobileNav__ItemLink"
              >
                Emergency Lodging
              </a>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/emergency-lodging-faqs/"
                    title="Emergency Lodging FAQs"
                  >
                    Emergency Lodging FAQs
                  </a>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <a
                href="https://empirelodging.com/business-travel/"
                title="Business Travel"
                className="MobileNav__ItemLink"
              >
                Business Travel
              </a>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/business-travel-request-information/"
                    title="Business Travel Request Information"
                  >
                    Business Travel Request Information
                  </a>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <a
                href="https://empirelodging.com/about/"
                title="About"
                className="MobileNav__ItemLink"
              >
                About
              </a>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/meet-the-team/"
                    title="Meet the Team"
                  >
                    Meet the Team
                  </a>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <a
                    href="https://empirelodging.com/articles-and-updates/"
                    title="Articles &amp; Updates"
                  >
                    Articles &amp; Updates
                  </a>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item">
              <a
                href="https://empirelodging.com/contact/"
                title="Contact"
                className="MobileNav__ItemLink"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
