// import React from 'react'
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <span><img src={'/public/logo.svg'} alt="image logo" /></span>
        <span>Frontend</span>
        <span>{Arrow}</span>
        <span>stage 1 Task</span>
      </div>
      <div className={styles.header_bottom}>
        <h2 className={styles.header_bottom_title}>Stage 1 Task</h2>
        <p className={styles.header_bottom_text}>Create a page like Linktree that allows a person show their personal profile and link to various digital things that they sell.</p>
      </div>
    </header>
  );
};

const Arrow = (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3113 16.5348L9.89599 15.1379L15.7227 9.31116H0.632103V7.28928H15.7227L9.89599 1.48097L11.3113 0.0656587L19.5459 8.30022L11.3113 16.5348Z"
      fill="#101828"
    />
  </svg>
);

export default Header;
