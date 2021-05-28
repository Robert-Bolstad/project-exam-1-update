import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo-wrapper">
          <Link href="/">
            <a className="footer__logo">
              <span className="footer__logo--yellow">LAUNCH</span>PREP
            </a>
          </Link>
        </div>
        <ul className="footer__list">
          <li className="footer__item">
            <Link href="/">
              <a className="footer__link">Home</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/past">
              <a className="footer__link">Previous Launches</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/upcoming">
              <a className="footer__link">Upcoming Launches</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/about">
              <a className="footer__link">SpaceX</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/history">
              <a className="footer__link">History</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/missions">
              <a className="footer__link">Missions</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link className="footer__link" href="/contact">
              <a className="footer__link">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="footer__wrapper">
          <div className="footer__info">
            <a
              target="_blank"
              href="https://www.spacex.com/
            "
            >
              <img
                className="footer__spacex-logo"
                src="./spacex.svg"
                alt="spaceX logo"
              />
            </a>

            <p className="footer__description">
              Follow SpaceX on their social media platforms
            </p>
          </div>
          <div className="footer__social">
            <div className="footer__icon-wrapper">
              <a target="_blank" href="https://twitter.com/spacex">
                <img src="./twitter.svg" alt="twitter icon" />
              </a>
            </div>
            <div className="footer__icon-wrapper">
              <a
                target="_blank"
                href="https://www.youtube.com/user/spacexchannel"
              >
                <img src="./youtube.svg" alt="twitter icon" />
              </a>
            </div>
            <div className="footer__icon-wrapper">
              <a target="_blank" href="https://www.instagram.com/spacex/">
                <img src="./instagram.svg" alt="instagram.svg" />
              </a>
            </div>
            <div className="footer__icon-wrapper">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/spacex/"
              >
                <img src="./linkedin.svg" alt="linkedin.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Microsite for SpaceX Powered by:{" "}
          <a
            className="footer__bottom-link"
            href="https://api.spacexdata.com/v3"
          >
            https://api.spacexdata.com/v3{" "}
          </a>
          Developed by: Robert Bolstad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
