import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import axios from "axios";

export default function missions({ missions }) {
  const handleClick = (e) => {
    const cardElem = e.target.parentElement.parentElement;

    const hiddenElem = cardElem.querySelector(".missions__card--hidden");
    hiddenElem.classList.toggle("missions__card--show");
  };
  return (
    <Layout>
      <Head title="Missions" />
      <main className="backgoundImage missions">
        <h1 className="missions__heading">SpaceX's Missions</h1>
        <div className="missions__wrapper">
          {missions.map((data) => {
            return (
              <div key={data.mission_id}>
                <div className="missions__btn-wrapper">
                  <button
                    type="button"
                    onClick={(e) => handleClick(e)}
                    className="missions__btn"
                  >
                    {data.mission_name}
                  </button>
                </div>
                <div className="missions__card missions__card--hidden">
                  <h2 className="missions__subheading">{data.mission_name}</h2>
                  <p className="missions__description">{data.description}</p>
                  <div className="missions__links">
                    {data.twitter ? (
                      <a
                        className="missions__link"
                        target="_blank"
                        href={data.twitter}
                      >
                        Twitter
                      </a>
                    ) : null}
                    {data.website ? (
                      <a
                        className="missions__link"
                        target="_blank"
                        href={data.website}
                      >
                        Website
                      </a>
                    ) : null}
                    {data.wikipedia ? (
                      <a
                        className="missions__link"
                        target="_blank"
                        href={data.wikipedia}
                      >
                        Wikipedia
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let missions;

  try {
    const getMissions = await axios.get(BASE_URL + "/missions");

    missions = getMissions.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      missions: missions,
    },
  };
}
