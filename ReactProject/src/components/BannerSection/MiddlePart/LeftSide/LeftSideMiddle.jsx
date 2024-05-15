import styles from "./LeftSideMiddle.module.css";

function LeftSideMiddle() {
  return (
    <div className={styles.leftContent}>
      <div className={styles.centerLeftSide}>
        <h1>
          Enter your
          <br />
          private haven
        </h1>
        <p>
          Luxurious villa, minutes from vibrant attractions and unforgettable
          experiences
        </p>
        <button className={styles.cta}>Book Now</button>
      </div>
    </div>
  );
}

export default LeftSideMiddle;
