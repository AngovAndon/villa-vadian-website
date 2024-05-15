import CirclePictures from "./BannerSection/MiddlePart/RightSide/CirclePictures/CirclePictures";
import ReviewCard from "./BannerSection/MiddlePart/RightSide/ReviewCard/ReviewCard";
import styles from "./InstaSection.module.css";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Marc",
    date: "1 week ago",
    text: "Close to highway, not far from a village center, clean comfy, friendly hosts.",
    imageUrl: "/TopReviews/marc.png",
  },
  {
    id: 2,
    name: "Marek",
    date: "2 weeks ago",
    text: "Nice, clean and cosy. Swimming pool for refreshment during hot weather or after table tennis game.",
    imageUrl: "/TopReviews/marek.png",
  },
  {
    id: 3,
    name: "Vesna",
    date: "6 months ago",
    text: "Great hosts, easy communication. Location is perfect, near the highway but still calm and quiet, easy to find. Clean, comfortable and spacious.",
    imageUrl: "/TopReviews/vesna.png",
  },
  {
    id: 4,
    name: "Dragana",
    date: "1 year ago",
    text: "This place is a relaxing oasis if you are in transit, or wish to spend some time in this location. Particularly many thanks to Andon for providing all information and support.",
    imageUrl: "/TopReviews/dragana.png",
  },
  {
    id: 5,
    name: "Ivan",
    date: "2 years ago",
    text: "Great place to stay, we didn't expect this kind of hospitality. Everything was great, the place has everything you need and more. All recommendations, clean 10, see you again next year for sure 🤩",
    imageUrl: "/TopReviews/ivan.png",
    logoUrl: "",
  },
];

function InstaSection() {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const handleReviewChange = (id) => {
    console.log("Received ID:", id);
    const review = reviews.find((r) => r.id === id);
    console.log("Found review:", review);
    if (review) {
      setSelectedReview(review);
      console.log("Set review:", review);
    } else {
      console.error(`No review found for if ${id}`);
    }
    setOrder((prevOrder) => [...prevOrder.slice(1), prevOrder[0]]);
  };

  return (
    <>
      <div className={styles.fullSection}>
        <div className={styles.innerContent}>
          <h2 className={styles.sectionHeader}>Discover your Experience</h2>
          <p className={styles.text1}>
            &#x2022; Outdoor & indoor
            <br />
            day & night!
          </p>
          <p className={styles.text2}>&#x2022; Fun never ends!</p>
          <p className={styles.text3}>
            &#x2022; Happy guests,
            <br />
            happy Villa!
          </p>
          <p className={styles.text4}>
            &#x2022; Amenities to satisfy
            <br />
            each & every taste!
          </p>
          <img src="/InstaStoriesMockups.png" alt="" />
          <button className={styles.sectionButton}>Gallery</button>
        </div>
      </div>
      {/* mobilnaVerzija */}
      <div className={styles.secondMobileSection}>
        <div className={styles.firstThird}>
          <div className={styles.rightContent}>
            <div className={styles.starsTextCircleImagesOfReview}>
              <p className={styles.numReviews}>80 verified reviews</p>
              <CirclePictures onImageClick={handleReviewChange} order={order} />
            </div>
            {selectedReview ? (
              <ReviewCard review={selectedReview} />
            ) : (
              <p>Loading review...</p>
            )}
          </div>
        </div>
        <div className={styles.secondThird}>
          <div className={styles.header}>
            <p className={styles.headerParagraph}>Discover your Experience</p>
          </div>
          <div className={styles.images}>
            <img
              className={styles.story1}
              src="/Story1.png"
              alt="Guests story"
            />
            <img
              className={styles.story2}
              src="/Story2.png"
              alt="Guests story"
            />
          </div>
          <div className={styles.galleryButton}>
            <button className={styles.buttonItself}>Gallery</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstaSection;
