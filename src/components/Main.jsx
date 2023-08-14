import Socials from "./main/Socials";
import styles from "./Main.module.scss";
import Footer from "./Footer";
import ProfilePic from '../../public/profile__img.svg'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_profile}>
        <img src={ProfilePic} alt="profile image" />
        <h5>John Doe</h5>
      </div>
        <Socials />
        <Footer />
    </div>
  );
};

export default Main;
