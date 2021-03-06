import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import { BASE_URL } from "../settings/api";
import Countdown from "../components/Countdown";
import UpcomingList from "../components/UpcomingList";
import axios from "axios";

export default function index({ nextLaunch, upcomingLaunch }) {
  return (
    <Layout>
      <Head
        title="Home"
        description="Welcome to LaunchPrep. This website is a microsite for SpaceX that provides information on SpaceX's upcoming rocket launches and more."
      />
      <main className="backgoundImage">
        <Countdown data={nextLaunch} />
        <UpcomingList data={upcomingLaunch} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
  let nextLaunch;
  let upcomingLaunch;

  try {
    const getNextLaunch = await axios.get(BASE_URL + "/launches/next");
    const getUpcomingLaunch = await axios.get(BASE_URL + "/launches/upcoming");

    nextLaunch = getNextLaunch.data;
    upcomingLaunch = getUpcomingLaunch.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      nextLaunch: nextLaunch,
      upcomingLaunch: upcomingLaunch,
    },
  };
}
