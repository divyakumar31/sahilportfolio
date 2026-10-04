import { useEffect, useState } from "react";

const Preloader = () => {
  const [exit, setExit] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => {
      setExit(true);
    }, 1900);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 2700);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`premium-preloader ${exit ? "is-exiting" : ""}`}>
      {/* Top metadata */}
      <div className="preloader-meta preloader-meta-left">
        <span>SAHIL.DEV</span>
      </div>

      <div className="preloader-meta preloader-meta-right">
        <span>01 / 01</span>
      </div>

      {/* Vertical line */}
      <div className="preloader-line-vertical" />

      {/* Main typography */}
      <div className="preloader-center">
        <div className="preloader-name">
          <span className="name-sahil">SAHIL</span>
          <span className="name-dot">.</span>
          <span className="name-dev">DEV</span>
        </div>

        <div className="preloader-subtitle">
          SOFTWARE DEVELOPER
        </div>
      </div>

      {/* Bottom metadata */}
      <div className="preloader-bottom-left">
        <span>FRONTEND DEVELOPER</span>
      </div>

      <div className="preloader-bottom-right">
        <span>AHMEDABAD / INDIA</span>
      </div>

      {/* Reveal layer */}
      <div className="preloader-reveal" />
    </div>
  );
};

export default Preloader;