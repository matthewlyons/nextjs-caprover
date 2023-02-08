import React from "react";

export default function Hero() {
  return (
    <div class="wp-block-lazyblock-hero lazyblock-hero-1GbvWO">
      <div
        class="Hero__Container"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://empirelodging.com/wp-content/uploads/2021/04/capital-building-panorama-scaled.jpeg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        role="img"
        aria-label="Panorama view of the United States Capitol building reflected on the reflection pool."
      >
        <div class="Hero__Inner Container">
          <h1 class="Hero__Header"></h1>
          <h3 class="Hero__SubHeader">Government Services</h3>
          <h3 class="Hero__Paragraph"></h3>
        </div>
      </div>
    </div>
  );
}
