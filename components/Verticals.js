import React from "react";
import Link from "next/link";

export default function Verticals() {
  return (
    <div className="wp-block-lazyblock-verticals lazyblock-verticals-Z19IzQw">
      <section className="Verticle__Container">
        <Link href="https://empirelodging.com/government-services/">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Government Services</h1>
            <img
              className="Verticle__Image"
              src="./GovernmentServices.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
        <Link href="https://empirelodging.com/emergency-lodging/">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Emergency Lodging</h1>
            <img
              className="Verticle__Image"
              src="./BusinessTravel.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
        <Link href="/Corporate-housing">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Corporate Housing</h1>
            <img
              className="Verticle__Image"
              src="./CorpHousing.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
        <Link href="https://empirelodging.com/business-travel/">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Business Travel</h1>
            <img
              className="Verticle__Image"
              src="./BusinessTraveler.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
        <Link href="https://empirelodging.com/team-travel/">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Team Travel</h1>
            <img
              className="Verticle__Image"
              src="./TeamTravel.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
        <Link href="https://empirelodging.com/contact/" className="MobileOnly">
          <div className="Verticle__Item">
            <h1 className="Verticle__Text">Contact Us</h1>
            <img
              className="Verticle__Image"
              src="./Contact.webp"
              alt=""
              aria-label=""
            />
          </div>
        </Link>
      </section>
    </div>
  );
}
