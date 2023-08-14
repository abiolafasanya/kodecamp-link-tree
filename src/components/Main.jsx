import ProfileImage from "../assets/profile__img.svg";
import Socials from "./main/Socials";
import styles from "./Main.module.scss";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_profile}>
        <img src={'/public/profile__img.svg'} alt="profile image" />
        <h5>John Doe</h5>
      </div>
        <Socials />
        <Footer />
    </div>
  );
};

export default Main;
