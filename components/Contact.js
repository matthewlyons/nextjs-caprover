import React from "react";

export default function Contact() {
  return (
    <div className="wp-block-lazyblock-contact lazyblock-contact-Z1rb8sB">
      <section
        className="Row__Container Row__Container--Dark Row__Container--Spacer Row__Container--BgImage"
        style={{
          backgroundImage: "url('./HotelBG.webp')",
          backgroundPosition: "center",
        }}
      >
        <div className="Row__InnerShadow"></div>
        <div className="Row__Inner">
          <div className="Card">
            <div className="Grid__Half Grid__Half--Gap">
              <div className="ContactForm__Container">
                <h3 className="Header Text--Center">Get In Touch</h3>

                <form
                  className="ContactForm__Form"
                  id="Contact__Form"
                  action="https://formspree.io/f/xdoyezer"
                  method="POST"
                >
                  <label htmlFor="name">Name*</label>
                  <input
                    name="name"
                    type="text"
                    value=""
                    className="ContactForm__Input"
                    placeholder="NAME"
                    aria-required="true"
                    aria-invalid="false"
                    required=""
                    onChange={() => {
                      console.log;
                    }}
                  />
                  <label htmlFor="email">Email Address*</label>
                  <input
                    name="email"
                    type="text"
                    value=""
                    className="ContactForm__Input"
                    placeholder="EMAIL ADDRESS"
                    aria-required="true"
                    aria-invalid="false"
                    required=""
                    onChange={() => {
                      console.log;
                    }}
                  />
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    name="phone"
                    type="text"
                    value=""
                    className="ContactForm__Input"
                    placeholder="PHONE NUMBER"
                    aria-required="true"
                    aria-invalid="false"
                    required=""
                    onChange={() => {
                      console.log;
                    }}
                  />
                  <label htmlFor="message">Message*</label>
                  <textarea
                    name="message"
                    type="textarea"
                    value=""
                    className="ContactForm__Input"
                    placeholder="MESSAGE"
                    aria-required="true"
                    aria-invalid="false"
                    rows="10"
                    cols="50"
                    onChange={() => {
                      console.log;
                    }}
                  ></textarea>
                  <div>
                    <button className="Button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
                <div id="Form__Status"></div>
              </div>
              <div className="InfoCard__Container">
                <div className="InfoCard__Inner">
                  <div className="InfoCard__Text">
                    <p>
                      <a href="tel:+1-888-305-7101">+1-888-305-7101</a>
                    </p>
                    <p>
                      <a href="mailto:sales@ehotelgroup.com">
                        sales@ehotelgroup.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
