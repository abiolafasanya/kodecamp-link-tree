import Socials from "./main/Socials";
import styles from "./Main.module.scss";
import Footer from "./Footer";
import ProfilePic from "../../public/profile__img.svg";
import ShareArrow from "../../public/shareArrow.svg";

const Main = () => {
  return (
    <div className={styles.main}>
      <article className={styles.main_profile}>
        <img src={ProfilePic} alt="profile image" />
        <h5>John Doe</h5>
      <div className={styles.main_shareIcon}>
        <img src={ShareArrow} alt="share arrow" />
        <span>...</span>
      </div>
      </article>
      <Socials />
      <Footer />
    </div>
  );
};

export default Main;
