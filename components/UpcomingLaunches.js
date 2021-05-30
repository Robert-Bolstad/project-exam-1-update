import React from "react";

const UpcomingLaunches = ({ data }) => {
  const handleClick = (e) => {
    const buttonElem = e.target;
    const cardElem =
      e.target.parentElement.parentElement.parentElement.parentElement;

    const hiddenElem = cardElem.querySelector(
      ".upcoming-launches__card--hidden"
    );
    hiddenElem.classList.toggle("upcoming-launches__card--show");

    if (hiddenElem.classList.contains("upcoming-launches__card--show")) {
      buttonElem.innerText = "Show Less";
    } else {
      buttonElem.innerText = "Show More";
    }
  };

  const reverseBtn = (e) => {
    const cardsElem = e.target.parentElement.querySelector(
      ".upcoming-launches__cards"
    );

    cardsElem.classList.toggle("upcoming-launches__cards--reverse");
  };
  return (
    <div className="upcoming-launches">
      <h1 className="upcoming-launches__heading">Upcoming Launches</h1>
      <div className="upcoming-launches__list">
        <button
          type="button"
          onClick={(e) => reverseBtn(e)}
          className="upcoming-launches__reverse-btn"
        >
          Reverse List v
        </button>
        <div className="upcoming-launches__cards">
          {data.map((data) => {
            return (
              <div
                key={Math.random()}
                className="upcoming-launches__card-wrapper"
              >
                <div className="upcoming-launches__card">
                  <div className="upcoming-launches__wrapper">
                    <p className="upcoming-launches__info">
                      Flight Nr:{" "}
                      <span className="upcoming-launches__detail">
                        {data.flight_number}
                      </span>
                    </p>
                    <p className="upcoming-launches__info">
                      Mission:{" "}
                      <span className="upcoming-launches__detail">
                        {data.mission_name}
                      </span>
                    </p>
                    <p className="upcoming-launches__info">
                      Launch Data:{" "}
                      <span className="upcoming-launches__detail">
                        {data.launch_date_local.slice(0, 10)}
                      </span>
                    </p>
                  </div>
                  <div className="upcoming-launches__wrapper upcoming-launches__wrapper--right">
                    <img
                      className="upcoming-launches__img"
                      src="/spacex.svg"
                      alt="spacex logo"
                    />
                    <div className="upcoming-launches__btn-wrapper">
                      <button
                        type="button"
                        onClick={(e) => handleClick(e)}
                        className="upcoming-launches__btn"
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                </div>
                <div className="upcoming-launches__card upcoming-launches__card--hidden">
                  <div className="upcoming-launches__wrapper">
                    <img
                      className="upcoming-launches__img-inner"
                      src="/spacex.svg"
                      alt="spacex logo"
                    />
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Flight Nr:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.flight_number}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Mission:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.mission_name}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Launch Data:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.launch_date_local.slice(0, 10)}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Rocket Name:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.rocket.rocket_name}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Rocket Type:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.rocket.rocket_type}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Launch Site:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.launch_site.site_name_long}
                      </span>
                    </p>
                    <p className="upcoming-launches__info upcoming-launches__info--hidden">
                      Description:{" "}
                      <span className="upcoming-launches__detail upcoming-launches__detail--hidden">
                        {data.details
                          ? data.details
                          : "No description of the mission yet."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingLaunches;
