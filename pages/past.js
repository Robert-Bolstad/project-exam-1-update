import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BASE_URL } from "../settings/api";
import PastLaunches from "../components/PastLaunches";
import axios from "axios";

export default function past({ past }) {
  return (
    <Layout>
      <Head
        title="Past"
        description="Want to know about SpaceX's past launches? Here you can find a list of all launches by SpaceX. The list contains information, videos and links to articles."
      />
      <main className="backgoundImage">
        <PastLaunches data={past} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps() {
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
