import React from "react";
import styles from "../../styles/Layout.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <h1>Footer Everywhere</h1>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
