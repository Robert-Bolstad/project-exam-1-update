import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import { BASE_URL } from "../settings/api";
import axios from "axios";

export default function about({ info }) {
  return (
    <Layout>
      <Head title="About" />
      <main className="backgoundImage about">
        <h1 className="about__heading">SpaceX</h1>
        <div className="about__container">
          <Image
            src="/illustration.jpg"
            alt="Illustration of space base"
            width={1700}
            height={1043}
          />
          <div className="about__wrapper-info">
            <div className="about__spacex">
              <h2 className="about__subheading">About SpaceX</h2>
              <p className="about__description">
                SpaceX desighs, manufactures and launches advanced rockets and
                spacecrafts. the company was foundes in 2020 to revoluitonize
                space technology, with the ultimate gold of enabeling people to
                live on other planets.
              </p>
            </div>
            <div className="about__company">
              <h2 className="about__subheading">Company Info</h2>
              <p className="about__item">
                Name:<span className="about__detail">{" " + info.name}</span>
              </p>
              <p className="about__item">
                Founder:
                <span className="about__detail">{" " + info.founder}</span>
              </p>
              <p className="about__item">
                Founded:
                <span className="about__detail">{" " + info.founded}</span>
              </p>
              <p className="about__item">
                Employees:
                <span className="about__detail">{" " + info.employees}</span>
              </p>
              <p className="about__item">
                Vehicles:
                <span className="about__detail">{" " + info.vehicles}</span>
              </p>
              <p className="about__item">
                Launch Sites:
                <span className="about__detail">{" " + info.launch_sites}</span>
              </p>
              <p className="about__item">
                Test Sites:
                <span className="about__detail">{" " + info.test_sites}</span>
              </p>
              <p className="about__item">
                CEO:<span className="about__detail">{" " + info.ceo}</span>
              </p>
              <p className="about__item">
                CTO:<span className="about__detail">{" " + info.cto}</span>
              </p>
              <p className="about__item">
                COO:<span className="about__detail">{" " + info.coo}</span>
              </p>
              <p className="about__item">
                CTO Propulsion:
                <span className="about__detail">
                  {" " + info.cto_propulsion}
                </span>
              </p>
              <p className="about__item">
                Valuation($):
                <span className="about__detail">{" " + info.valuation}</span>
              </p>
            </div>
            <div className="about__location">
              <h2 className="about__subheading">Headquarter Location</h2>
              <p className="about__item">
                Adress:
                <span className="about__detail">
                  {" " + info.headquarters.address}
                </span>
              </p>
              <p className="about__item">
                City:
                <span className="about__detail">
                  {" " + info.headquarters.city}
                </span>
              </p>
              <p className="about__item">
                State:
                <span className="about__detail">
                  {" " + info.headquarters.state}
                </span>
              </p>
              <object
                className="about__map"
                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7946032963177!2d-118.33047334887027!3d33.92068553200331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5dee46db32d%3A0x5589bf4232c10232!2sSpacex!5e0!3m2!1sno!2sno!4v1"
              ></object>
            </div>
          </div>
          <div className="about__links">
            <h2 className="about__subheading">More Info</h2>
            <p className="about__links-description">
              For more information and images from SpaceX's space Program,
              please visit the links below.
            </p>
            <div className="about__links-wrapper">
              <a
                className="about__link"
                target="_blank"
                href={info.links.website}
              >
                SpaceX's website
              </a>
              <a
                className="about__link"
                target="_blank"
                href={info.links.flickr}
              >
                Images from spaceX
              </a>
              <a
                className="about__link"
                target="_blank"
                href={info.links.twitter}
              >
                SpaceX's twitter
              </a>
              <a
                className="about__link"
                target="_blank"
                href={info.links.elon_twitter}
              >
                Elon Musk's twitter
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let info;

  try {
    const getInfo = await axios.get(BASE_URL + "/info");

    info = getInfo.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      info: info,
    },
  };
}
