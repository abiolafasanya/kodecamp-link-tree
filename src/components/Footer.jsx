import React from "react";
import styles from "./Footer.module.scss";
import Kodehauz from '../assets/kodehauz.svg'
import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={Logo} alt="kodecamp logo" />
      </div>
      <div>KodeCamp Internship Task</div>
      <div className={styles.KodehauzImg}>
        <img src={Kodehauz} alt="kodehauz logo" />
      </div>
    </footer>
  );
};

export default Footer;
