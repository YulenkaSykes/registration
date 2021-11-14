import React from "react";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={`col centered ${styles.header}`}>
      <img src="/logo.png" alt="" />
      <div className={styles.text}>
        <h2>
          <span style={{ color: "#6CEEC7" }}>Sign Up</span> and find the best
          place to rest while traveling
        </h2>
      </div>
    </div>
  );
};

export default Header;
