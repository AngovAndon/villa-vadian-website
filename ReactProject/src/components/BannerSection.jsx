import styles from "./BannerSection.module.css";
import BottomPart from "./BannerSection/BottomPart/BottomPart";
import MiddlePart from "./BannerSection/MiddlePart/MiddlePart";
import PageNav from "./BannerSection/PageNav/PageNav";

function BannerSection() {
  return (
    <div className={styles.fullBanner}>
      <PageNav />
      <MiddlePart />
      <BottomPart />
    </div>
  );
}

export default BannerSection;
