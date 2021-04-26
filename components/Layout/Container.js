import React from "react";
import styles from "../../styles/Layout.module.css";

function Header({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        {children}
      </main>
    </div>
  );
}

export default Header;
