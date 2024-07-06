import * as React from "react";
import { config } from "../constants/config";
import { challenges } from "../constants/challenges";
import { routes } from "../constants/routes";

const Header = () => {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const handleMenu = () => {
    const body = window!.document!.querySelector("body");

    const mobileNavToggleBtn =
      window!.document!.querySelector(".mobile-nav-toggle");

    if (body) {
      body.classList.toggle("mobile-nav-active");

      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Blacklist</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
                <br />
              </a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li className="dropdown">
              <a href="/challenges" className={openDropdown ? "active" : ""}>
                <span>Challenges</span>{" "}
                <i
                  onClick={event => {
                    event.preventDefault();

                    setOpenDropdown(!openDropdown);
                  }}
                  className="bi bi-chevron-down toggle-dropdown"
                ></i>
              </a>
              <ul className={openDropdown ? "dropdown-active" : ""}>
                {challenges.map(challenge => (
                  <li key={challenge.identifier}>
                    <a href={`/challenges/${challenge.identifier}`}>
                      {challenge.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a href={routes.contact}>Contact</a>
            </li>
          </ul>
          <i
            onClick={handleMenu}
            className="mobile-nav-toggle d-xl-none bi bi-list"
          ></i>
        </nav>

        <div className="header-social-links d-flex align-items-center">
          <a href={config.social.youtube} className="youtube">
            <i className="bi bi-youtube"></i>
          </a>

          <a href={config.social.instagram} className="instagram">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
