import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Post from "../components/Post";
import { sanityClient } from "../sanity";
import { Props } from "../typings";

const Home = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:p-6">
        {posts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

// SSR

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    description,
    mainImage,
    slug,
    author -> {
      name,
      image
    }
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
