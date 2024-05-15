import styles from "./CirclePictures.module.css";

function CirclePictures({ onImageClick, order }) {
  const images = [
    { id: 1, src: "/TopReviews/marc.png", alt: "Top reviewer, named Marc" },
    { id: 2, src: "/TopReviews/marek.png", alt: "Top reviewer, named Marek" },
    { id: 3, src: "/TopReviews/vesna.png", alt: "Top reviewer, named Vesna" },
    {
      id: 4,
      src: "/TopReviews/dragana.png",
      alt: "Top reviewer, named Dragana",
    },
    { id: 5, src: "/TopReviews/ivan.png", alt: "Top reviewer, named Ivan" },
  ];

  const safeOrder = order || [0, 1, 2, 3, 4];

  return (
    <div className={styles.reviewsComponent}>
      {safeOrder.map((index, position) => (
        <img
          key={index}
          onClick={() => onImageClick(images[index].id)}
          className={`${styles.topReviewers} ${
            position === 0 ? styles.marc : ""
          }`}
          src={images[index].src}
          alt={images[index].alt}
        />
      ))}
    </div>
  );
}

export default CirclePictures;
