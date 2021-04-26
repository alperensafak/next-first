import React from "react";
import Post from "./Post";
import styles from "../styles/PostList.module.css";

function PostList({ posts }) {
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default PostList;
