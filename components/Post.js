import React from "react";
import Link from "next/link";
import styles from "../styles/Post.module.css";

function Post({ post }) {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <a className={styles.card}>
          <h3>{post.title}</h3>
        </a>
      </Link>
    </>
  );
}

export default Post;
