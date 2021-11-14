import React from "react";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={`row centered ${styles.footer}`}>
      <p className={styles.text}>
        If you have an account,{" "}
        <a href="/" style={{ color: "#6CEEC7" }}>
          Log In
        </a>
      </p>
    </div>
  );
};

export default Footer;
