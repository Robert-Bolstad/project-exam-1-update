import React from "react";
import Link from "next/link";

const UpcomingList = ({ data }) => {
  return (
    <section className="upcoming-list">
      <div className="upcoming-list__wrapper">
        <h2 className="upcoming-list__heading">Upcoming Launches</h2>
        <div className="upcoming-list__container">
          <div className="upcoming-list__group">
            <p className="upcoming-list__list-name">Flight Nr:</p>
            <ul className="upcoming-list__list">
              {data.map((data) => {
                return (
                  <li key={Math.random()} className="upcoming-list__item">
                    {data.flight_number}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="upcoming-list__group">
            <p className="upcoming-list__list-name">Rocket Name:</p>
            <ul className="upcoming-list__list">
              {data.map((data) => {
                return (
                  <li key={Math.random()} className="upcoming-list__item">
                    {data.rocket.rocket_name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="upcoming-list__group">
            <p className="upcoming-list__list-name">Launch date:</p>
            <ul className="upcoming-list__list">
              {data.map((data) => {
                return (
                  <li key={Math.random()} className="upcoming-list__item">
                    {data.launch_date_local.slice(0, 10)}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Link href="/upcoming">
          <a className="upcoming-list__btn">Learn More</a>
        </Link>
      </div>
    </section>
  );
};

export default UpcomingList;
