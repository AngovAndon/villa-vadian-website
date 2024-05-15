import BannerSection from "../components/BannerSection";
import FooterSection from "../components/FooterSection";
import FourthSection from "../components/FourthSection";
import InstaSection from "../components/InstaSection";
import ThirdSection from "../components/ThirdSection";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <BannerSection />
      <InstaSection />
      <ThirdSection />
      <FourthSection />
      <FooterSection />
    </div>
  );
}

export default Homepage;
