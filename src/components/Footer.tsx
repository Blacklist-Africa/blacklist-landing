import React from "react";
import { config } from "../constants/config";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Blacklist</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a
            target="_blank"
            rel="noreferrer"
            href={config.social.youtube}
            className="youtube"
          >
            <i className="bi bi-youtube"></i>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={config.social.instagram}
            className="instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://www.linkedin.com/in/michael-nwuju">Michael Nwuju</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
