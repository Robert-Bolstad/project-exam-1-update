import React from "react";

const PastLaunches = ({ data }) => {
  const handleClick = (e) => {
    const buttonElem = e.target;
    const cardElem =
      e.target.parentElement.parentElement.parentElement.parentElement;

    const hiddenElem = cardElem.querySelector(".past-launches__card--hidden");
    hiddenElem.classList.toggle("past-launches__card--show");

    const video = cardElem.querySelector(".past-launches__video");
    video.src = `https://www.youtube.com/embed/${video.dataset.url}`;
    video.style.display = "block";

    if (hiddenElem.classList.contains("past-launches__card--show")) {
      buttonElem.innerText = "Show Less";
    } else {
      buttonElem.innerText = "Show More";
    }
  };

  const reverseBtn = (e) => {
    const cardsElem = e.target.parentElement.querySelector(
      ".past-launches__cards"
    );

    cardsElem.classList.toggle("past-launches__cards--reverse");
  };
  return (
    <div className="past-launches">
      <h1 className="past-launches__heading">Upcoming Launches</h1>
      <div className="past-launches__list">
        <button
          type="button"
          onClick={(e) => reverseBtn(e)}
          className="past-launches__reverse-btn"
        >
          Reverse List v
        </button>
        <div className="past-launches__cards">
          {data.map((data) => {
            return (
              <div key={Math.random()} className="past-launches__card-wrapper">
                <div className="past-launches__card">
                  <div className="past-launches__wrapper">
                    <p className="past-launches__info">
                      Flight Nr:{" "}
                      <span className="past-launches__detail">
                        {data.flight_number}
                      </span>
                    </p>
                    <p className="past-launches__info">
                      Mission:{" "}
                      <span className="past-launches__detail">
                        {data.mission_name}
                      </span>
                    </p>
                    <p className="past-launches__info">
                      Launch Year:{" "}
                      <span className="past-launches__detail">
                        {data.launch_year}
                      </span>
                    </p>
                    <div className="past-launches__btn-wrapper">
                      <button
                        type="button"
                        onClick={(e) => handleClick(e)}
                        className="past-launches__btn"
                      >
                        Show More
                      </button>
                    </div>
                  </div>
                  <div className="past-launches__wrapper past-launches__wrapper--right">
                    <img
                      className="past-launches__img"
                      src={data.links.mission_patch_small}
                      alt="spacex logo"
                    />
                  </div>
                </div>
                <div className="past-launches__card past-launches__card--hidden">
                  <div className="past-launches__wrapper-hidden">
                    <div className="past-launches__img-wrapper">
                      <img
                        className="past-launches__img-inner"
                        src={data.links.mission_patch_small}
                        alt="spacex logo"
                      />
                    </div>
                    <div className="past-launches__info-wrapper">
                      <p className="past-launches__info past-launches__info--hidden">
                        Flight Nr:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.flight_number}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Mission:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.mission_name}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Launch Data:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.launch_date_local.slice(0, 10)}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Rocket Name:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.rocket.rocket_name}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Rocket Type:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.rocket.rocket_type}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Launch Site:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.launch_site.site_name_long}
                        </span>
                      </p>
                      <p className="past-launches__info past-launches__info--hidden">
                        Mission Details:{" "}
                        <span className="past-launches__detail past-launches__detail--hidden">
                          {data.details
                            ? data.details
                            : "No description of the mission yet."}
                        </span>
                      </p>
                    </div>
                    <div className="past-launches__video-wrapper">
                      <iframe
                        className="past-launches__video"
                        data-url={data.links.youtube_id}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="past-launches__links">
                      {data.links.wikipedia ? (
                        <a
                          className="past-launches__link"
                          href={data.links.wikipedia}
                        >
                          Wikipedia
                        </a>
                      ) : null}
                      {data.links.article_link ? (
                        <a
                          className="past-launches__link"
                          href={data.links.article_link}
                        >
                          Article
                        </a>
                      ) : null}
                    </div>
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

export default PastLaunches;
