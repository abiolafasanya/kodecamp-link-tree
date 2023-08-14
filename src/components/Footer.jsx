import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={'/public/logo.svg'} alt="kodecamp logo" />
      </div>
      <div>KodeCamp Internship Task</div>
      <div className={styles.KodehauzImg}>
        <img src={'/public/kodehauz.svg'} alt="kodehauz logo" />
      </div>
    </footer>
  );
};

export default Footer;
