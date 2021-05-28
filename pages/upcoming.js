import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import UpcomingLaunches from "../components/UpcomingLaunches";
import axios from "axios";

export default function upcoming({ upcoming }) {
  return (
    <Layout>
      <Head title="Upcoming" />
      <main className="backgoundImage">
        <UpcomingLaunches data={upcoming} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let upcoming;

  try {
    const getUpcomingLaunch = await axios.get(BASE_URL + "/launches/upcoming");

    upcoming = getUpcomingLaunch.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      upcoming: upcoming,
    },
  };
}
