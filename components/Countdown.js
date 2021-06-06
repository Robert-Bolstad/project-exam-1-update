import { useState } from "react";
import Link from "next/link";

const Countdown = ({ data }) => {
  const [timer, setTime] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  // getting the next launch date form JSON and storing it into a variable
  const getLaunchDate = data.launch_date_local;

  //setting the launch date by using the info from the variable (getLaunchDate)
  const launchDate = new Date(getLaunchDate).getTime();

  // using "setInterval" fuction to update every second

  setInterval(() => {
    // getting the day from today and storing it into a variable
    const TimeNow = new Date().getTime();

    // distance from now to launch date
    const distance = launchDate - TimeNow;

    // time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // displaying the result

    setTime({
      ...timer,
      days: days,
      hours: hours,
      min: mins,
      sec: seconds,
    });
  }, 1000);

  return (
    <section className="timer">
      <img
        className="timer__img"
        src={data.links.mission_patch_small}
        alt="image of mission patch"
      />

      <div className="timer__info">
        <h1 className="timer__heading">Upcoming Launch:</h1>
        <p className="timer__name">{data.mission_name}</p>
        <div className="timer__countdown">
          <div className="timer__count">
            <p>Days:</p>
            <p className="timer__counter">{timer.days}</p>
          </div>
          <div className="timer__count">
            <p>Hours:</p>
            <p className="timer__counter">{timer.hours}</p>
          </div>
          <div className="timer__count">
            <p>Min:</p>
            <p className="timer__counter">{timer.min}</p>
          </div>
          <div className="timer__count">
            <p>Sec:</p>
            <p className="timer__counter">{timer.sec}</p>
          </div>
        </div>
        <p className="timer__description">
          Live feed of Launch will be available on SpaceX's Youtube channel on
          launch day
        </p>
        <Link href="https://www.youtube.com/user/spacexchannel">
          <a target="_blank" className="timer__btn">
            SpaceX's Channel
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Countdown;
