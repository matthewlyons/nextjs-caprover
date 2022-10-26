import React from "react";

export default function AboutSection() {
  return (
    <div className="wp-block-lazyblock-row lazyblock-row-Z1kCQgU">
      <section
        className="Row__Container Row__Container--Light  Row__Container--Spacer Row__Container--BgImage"
        style={{
          backgroundImage: "url('./HotelBG.webp')",
          backgroundPosition: "center",
        }}
      >
        <div className="Row__Inner">
          <div className="wp-block-lazyblock-card lazyblock-card-2jDet">
            <div className="Card Card--Center Card--Light">
              <div className="wp-block-lazyblock-header lazyblock-header-23E8y5">
                <h3 className="Header">
                  Your home away from home is just a click away.
                </h3>
              </div>

              <div className="wp-block-lazyblock-spacer lazyblock-spacer-Z23Spqk">
                <div className="Spacer"></div>
              </div>

              <div className="wp-block-lazyblock-rich-text-paragraph lazyblock-rich-text-paragraph-ZIeD7e">
                <p>
                  Whatever your housing requirements are, Empire is ready and
                  able to source exactly what you need, where and when you need
                  it. From urgent placement and disaster relief, to long-term
                  stays for work, study, or medical treatment, we’ve got you
                  covered – literally!
                </p>
                <p>
                  Simply tell us your specific needs and our team of experts
                  will respond promptly to take the stress out of your
                  relocation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
