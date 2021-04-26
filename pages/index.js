import Head from "next/head";
import styles from "../styles/Home.module.css";
import PostList from "../components/PostList";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/React.svg" />
      </Head>
      <h1 className={styles.title}>POSTS</h1>

      {console.log(posts)}

      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
