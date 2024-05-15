import CirclePictures from "./BannerSection/MiddlePart/RightSide/CirclePictures/CirclePictures";
import ReviewCard from "./BannerSection/MiddlePart/RightSide/ReviewCard/ReviewCard";
import styles from "./SecondMobileSection.module.css";

function SecondMobileSection() {
  return (
    <div className={styles.secondMobileSection}>
      <div className={styles.firstThird}>
        <div className={styles.rightContent}>
          <div className={styles.starsTextCircleImagesOfReview}>
            <p className={styles.numReviews}>80 verified reviews</p>
            <CirclePictures />
          </div>
          <ReviewCard />
        </div>
      </div>
      <div className={styles.secondThird}>
        <div className={styles.header}>
          <p className={styles.headerParagraph}>Discover your Experience</p>
        </div>
        <div className={styles.images}>
          <img className={styles.story1} src="/Story1.png" alt="Guests story" />
          <img className={styles.story2} src="/Story2.png" alt="Guests story" />
        </div>
        <div className={styles.galleryButton}>
          <button className={styles.buttonItself}>Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default SecondMobileSection;
