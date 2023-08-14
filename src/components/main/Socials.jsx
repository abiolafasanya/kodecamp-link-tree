import React from "react";
import { socials } from "../../data/social";
import styles from "./Socials.module.scss";
import Github from "../../assets/github.svg";
import Slack from "../../assets/slack.svg";

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
      <img src={Github} alt="github" />
      <img src={Slack} alt="slack" />
    </div>
  );
};
export default Socials;
