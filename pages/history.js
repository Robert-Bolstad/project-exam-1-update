import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import axios from "axios";

export default function history({ history }) {
  const reverseBtn = (e) => {
    const cardsElem = e.target.parentElement.querySelector(".history__cards");

    cardsElem.classList.toggle("history__cards--reverse");
  };

  return (
    <Layout>
      <Head title="History" />
      <main className="backgoundImage history">
        <h1 className="history__heading">Timeline Of Events</h1>
        <div className="history__wrapper">
          <button
            type="button"
            onClick={(e) => reverseBtn(e)}
            className="history__reverse-btn"
          >
            Reverse List v
          </button>
          <div className="history__cards">
            {history.map((data) => {
              return (
                <div key={data.id} className="history__card">
                  <h2 className="history__subheading">{data.title}</h2>
                  <span className="history__date">
                    {data.event_date_utc.slice(0, 10)}
                  </span>
                  <p className="history__description">{data.details}</p>
                  <div className="history__underline"></div>
                  <p className="history__description">
                    Click on the buttons below to get more information on this
                    event
                  </p>
                  <div className="history__links">
                    {data.links.article ? (
                      <a
                        className="history__btn"
                        target="_blank"
                        href={data.links.article}
                      >
                        Article
                      </a>
                    ) : null}
                    {data.links.reddit ? (
                      <a
                        className="history__btn"
                        target="_blank"
                        href={data.links.reddit}
                      >
                        Reddit
                      </a>
                    ) : null}
                    {data.links.wikipedia ? (
                      <a
                        className="history__btn"
                        target="_blank"
                        href={data.links.wikipedia}
                      >
                        Wikipedia
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let history;

  try {
    const getHistory = await axios.get(BASE_URL + "/history");

    history = getHistory.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      history: history,
    },
  };
}
