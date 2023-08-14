import React from "react";
import { socials } from "../../data/social";
import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <>
      <div className={styles.container}>
        {socials.map((text, index) => (
          <Social key={index} text={text} />
        ))}
      </div>
      <SocialPlatform />
    </>
  );
};

const Social = (props) => {
  return <div className={styles.social}>{props.text}</div>;
};

const SocialPlatform = () => {
  return (
    <div className={styles.platforms}>
      <img src={'/public/github.svg'} alt="github" />
      <img src={'/public/slack.svg'} alt="slack" />
    </div>
  );
};
export default Socials;
