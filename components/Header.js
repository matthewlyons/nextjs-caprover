import React from "react";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section className="DesktopNav__Container">
        <div className="DesktopNav__LogoContainer">
          <Link href="/">
            <img src="./Empire-Logo.webp" className="DesktopNav__Logo" />
          </Link>
        </div>
        <nav className="DesktopNav__NavContainer">
          <ul className="DesktopNav__Nav">
            <li className="DesktopNav__Item ">
              <Link href="/" title="Home" className="DesktopNav__ItemLink ">
                Home
              </Link>
            </li>
            <li className="DesktopNav__Item ">
              <Link
                href="/government-services/"
                title="Government Services"
                className="DesktopNav__ItemLink "
              >
                Government Services
              </Link>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <Link
                href="https://empirelodging.com/corporate-housing/"
                title="Corporate Housing"
                className="DesktopNav__ItemLink "
              >
                Corporate Housing
              </Link>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/corporate-housing/"
                    title="Corporate Housing"
                  >
                    Corporate Housing
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/travel-nurse-housing/"
                    title="Healthcare and Medical Professionals"
                  >
                    Healthcare and Medical Professionals
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/furnishings/"
                    title="Furnishings"
                  >
                    Furnishings
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/corporate-housing-faqs/"
                    title="Corporate Housing FAQs"
                  >
                    Corporate Housing FAQs
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/corporate-housing-request-information/"
                    title="Corporate Housing Request Information"
                  >
                    Corporate Housing Request Information
                  </Link>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <Link
                href="https://empirelodging.com/emergency-lodging/"
                title="Emergency Lodging"
                className="DesktopNav__ItemLink "
              >
                Emergency Lodging
              </Link>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/emergency-lodging/"
                    title="Emergency Lodging"
                  >
                    Emergency Lodging
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/emergency-lodging-faqs/"
                    title="Emergency Lodging FAQs"
                  >
                    Emergency Lodging FAQs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren ">
              <Link
                href="https://empirelodging.com/business-travel/"
                title="Business Travel"
                className="DesktopNav__ItemLink "
              >
                Business Travel
              </Link>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/business-travel/"
                    title="Business Travel"
                  >
                    Business Travel
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/business-travel-request-information/"
                    title="Business Travel Request Information"
                  >
                    Business Travel Request Information
                  </Link>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--HasChildren DesktopNav__Item--Edge ">
              <Link
                href="https://empirelodging.com/about/"
                title="About"
                className="DesktopNav__ItemLink "
              >
                About
              </Link>
              <ul className="DesktopNav__SubMenu">
                <li className="DesktopNav__SubMenuItem">
                  <Link href="https://empirelodging.com/about/" title="About">
                    About
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/meet-the-team/"
                    title="Meet the Team"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li className="DesktopNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/articles-and-updates/"
                    title="Articles &amp; Updates"
                  >
                    Articles &amp; Updates
                  </Link>
                </li>
              </ul>
            </li>
            <li className="DesktopNav__Item DesktopNav__Item--Edge ">
              <Link
                href="https://empirelodging.com/contact/"
                title="Contact"
                className="DesktopNav__ItemLink "
              >
                Contact
              </Link>
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
          <div className="MobileNav__Burger">
            <i className="fas fa-bars"></i>
          </div>
        </section>

        <div id="MobileNav__NavContainer" className="MobileNav__NavContainer">
          <div className="MobileNav__Close">
            <i className="fas fa-times"></i>
          </div>
          <ul className="MobileNav__Nav">
            <li className="MobileNav__Item">
              <Link href="/" title="Home" className="MobileNav__ItemLink">
                Home
              </Link>
            </li>
            <li className="MobileNav__Item">
              <Link
                href="/government-services"
                title="Government Services"
                className="MobileNav__ItemLink"
              >
                Government Services
              </Link>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <Link
                href="https://empirelodging.com/corporate-housing/"
                title="Corporate Housing"
                className="MobileNav__ItemLink"
              >
                Corporate Housing
              </Link>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/travel-nurse-housing/"
                    title="Healthcare and Medical Professionals"
                  >
                    Healthcare and Medical Professionals
                  </Link>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/furnishings/"
                    title="Furnishings"
                  >
                    Furnishings
                  </Link>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/corporate-housing-faqs/"
                    title="Corporate Housing FAQs"
                  >
                    Corporate Housing FAQs
                  </Link>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/corporate-housing-request-information/"
                    title="Corporate Housing Request Information"
                  >
                    Corporate Housing Request Information
                  </Link>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <Link
                href="https://empirelodging.com/emergency-lodging/"
                title="Emergency Lodging"
                className="MobileNav__ItemLink"
              >
                Emergency Lodging
              </Link>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/emergency-lodging-faqs/"
                    title="Emergency Lodging FAQs"
                  >
                    Emergency Lodging FAQs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <Link
                href="https://empirelodging.com/business-travel/"
                title="Business Travel"
                className="MobileNav__ItemLink"
              >
                Business Travel
              </Link>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/business-travel-request-information/"
                    title="Business Travel Request Information"
                  >
                    Business Travel Request Information
                  </Link>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item MobileNav__Item--HasChildren">
              <Link
                href="https://empirelodging.com/about/"
                title="About"
                className="MobileNav__ItemLink"
              >
                About
              </Link>
              <ul className="MobileNav__SubMenu">
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/meet-the-team/"
                    title="Meet the Team"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li className="MobileNav__SubMenuItem">
                  <Link
                    href="https://empirelodging.com/articles-and-updates/"
                    title="Articles &amp; Updates"
                  >
                    Articles &amp; Updates
                  </Link>
                </li>
              </ul>
            </li>
            <li className="MobileNav__Item">
              <Link
                href="https://empirelodging.com/contact/"
                title="Contact"
                className="MobileNav__ItemLink"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
