import React, { useMemo } from "react";

export default function ImageRow({
  children,
  header,
  spacing = true,
  img,
  position,
}) {
  let cardClass = useMemo(() => {
    if (spacing) {
      return "Card Card--Light";
    }
    return "Card Card--Light Card--NoSpacing";
  }, []);
  return (
    <div className="wp-block-lazyblock-row-image lazyblock-row-image-Z1kR9Q5">
      <section className="Row__Container Row__Container--Light Row__Container--Spacer">
        <div className="Row__Inner">
          <div className="Grid__Half Grid__Half--Gap">
            {position === "left" ? (
              <>
                <img
                  className="Image Image__Shadow"
                  src={img.src}
                  alt={img.alt}
                  aria-label={img.alt}
                />
                <div className={cardClass}>
                  {header && (
                    <>
                      <div className="wp-block-lazyblock-header lazyblock-header-1kUntf">
                        <h3 className="Header">{header}</h3>
                      </div>

                      <div className="wp-block-lazyblock-spacer lazyblock-spacer-1VTkww">
                        <div className="Spacer"></div>
                      </div>
                    </>
                  )}

                  <div className="wp-block-lazyblock-rich-text-paragraph lazyblock-rich-text-paragraph-Z2kg1vn">
                    {children}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={cardClass}>
                  {header && (
                    <>
                      <div className="wp-block-lazyblock-header lazyblock-header-1kUntf">
                        <h3 className="Header">{header}</h3>
                      </div>

                      <div className="wp-block-lazyblock-spacer lazyblock-spacer-1VTkww">
                        <div className="Spacer"></div>
                      </div>
                    </>
                  )}

                  <div className="wp-block-lazyblock-rich-text-paragraph lazyblock-rich-text-paragraph-Z2kg1vn">
                    {children}
                  </div>
                </div>
                <img
                  className="Image Image__Shadow"
                  src={img.src}
                  alt={img.alt}
                  aria-label={img.alt}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
