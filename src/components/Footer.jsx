import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../public/logo.svg"
import Kodehauz from '../../public/kodehauz.svg'


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
