import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import PastLaunches from "../components/PastLaunches";
import axios from "axios";

export default function past({ past }) {
  return (
    <Layout>
      <Head title="Past" />
      <main className="backgoundImage">
        <PastLaunches data={past} />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  let past;

  try {
    const getPastLaunch = await axios.get(BASE_URL + "/launches/past");

    past = getPastLaunch.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      past: past,
    },
  };
}
