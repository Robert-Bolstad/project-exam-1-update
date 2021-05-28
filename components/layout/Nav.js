import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const openNav = () => {
    const list = document.querySelector(".nav__list");
    list.classList.toggle("nav__list--open");
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link href="/">
          <a className="nav__logo--link">
            <span className="nav__logo--yellow">LAUNCH</span>PREP
          </a>
        </Link>
      </div>
      <button onClick={() => openNav()} type="button" className="nav__burger">
        <img className="nav__burger-icon" src="./burger.svg" alt="" />
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
      </ul>
    </nav>
  );
};

export default Nav;
