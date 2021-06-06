import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import UpcomingLaunches from "../components/UpcomingLaunches";
import axios from "axios";

export default function upcoming({ upcoming }) {
  return (
    <Layout>
      <Head
        title="Upcoming"
        description="Get ready for the next SpaceX launch. Here you can find a list of upcoming launches by SpaceX. The list contains the launch date and more info on each launch."
      />
      <main className="backgoundImage">
        <UpcomingLaunches data={upcoming} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
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
