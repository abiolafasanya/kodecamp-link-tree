import ProfileImage from "../assets/profile__img.svg";
import Socials from "./main/Socials";
import styles from "./Main.module.scss";
import Kodehauz from '../assets/kodehauz.svg'
import Logo from '../assets/logo.svg'
import Footer from "./Footer";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_profile}>
        <img src={ProfileImage} alt="profile image" />
        <h5>John Doe</h5>
      </div>
        <Socials />
        <Footer />
    </div>
  );
};

export default Main;
