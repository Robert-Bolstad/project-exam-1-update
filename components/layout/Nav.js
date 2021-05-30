import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burger, setBurger] = useState(
    <>
      <span className="nav__burger-line1"></span>
      <span className="nav__burger-line2"></span>
      <span className="nav__burger-line3"></span>
    </>
  );
  const openNav = () => {
    const list = document.querySelector(".nav__list");
    list.classList.toggle("nav__list--open");

    if (!burgerOpen) {
      setBurgerOpen(true);
      setBurger(
        <>
          <span className="nav__burger-line1 nav__burger-line1--active"></span>
          <span className="nav__burger-line2 nav__burger-line2--active"></span>
          <span className="nav__burger-line3 nav__burger-line3--active"></span>
        </>
      );
    } else {
      setBurgerOpen(false);
      setBurger(
        <>
          <span className="nav__burger-line1"></span>
          <span className="nav__burger-line2"></span>
          <span className="nav__burger-line3"></span>
        </>
      );
    }
  };
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          <Link href="/">
            <a className="nav__logo--link">
              <span className="nav__logo--yellow">LAUNCH</span>PREP
            </a>
          </Link>
        </div>
        <button onClick={() => openNav()} type="button" className="nav__burger">
          {burger}
        </button>
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/past">
              <a className="nav__link">Previous Launches</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/upcoming">
              <a className="nav__link">Upcoming Launches</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/about">
              <a className="nav__link">SpaceX</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/history">
              <a className="nav__link">History</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/missions">
              <a className="nav__link">Missions</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" href="/contact">
              <a className="nav__link">Contact</a>
            </Link>
          </li>
          <li className="nav__list--end">
            <div onFocus={() => openNav()} tabIndex="0"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
