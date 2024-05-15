import styles from "./ThirdSection.module.css";

function ThirdSection() {
  return (
    <div className={styles.thirdSection}>
      <div className={styles.leftSide}>
        <div className={styles.natGeoRectangle}></div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.upperHalf}>
          <div className={styles.logoTextMiddle}>
            <svg
              className={styles.logo66}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 66 60"
            >
              <path d="M56.7939 0H0C4.12214 0.91603 7.02289 4.58015 7.02289 8.70229V60C12.6717 54.3511 15.7252 46.8702 15.7252 38.9313V10.229C15.7252 9.46565 16.3359 8.70229 17.2519 8.70229C18.0152 8.70229 18.7786 9.31297 18.7786 10.229V48.3969C24.4275 42.7481 27.4809 35.2672 27.4809 27.3282V10.229C27.4809 9.46565 28.0916 8.70229 29.0076 8.70229C29.771 8.70229 30.5343 9.31297 30.5343 10.229V36.7939L38.1679 29.1603C38.4733 28.855 38.6259 28.5496 38.7786 28.2443V28.0916C39.084 27.6336 39.084 27.1756 39.2366 26.5649C40 16.6412 48.2443 8.70229 58.4733 8.70229H65.6488L56.7939 0Z" />
            </svg>
            <p className={styles.paragraphHH}>
              Experience modern luxury and timeless charm in this cherished
              Prdejci villa, just minutes from Gevgelija's attractions. Relax by
              the pool, explore the area, or unwind in the lush gardens.
            </p>
          </div>
        </div>
        <div className={styles.lowerHalf}>
          <div className={styles.quotesParagraph}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
            >
              <path
                d="M1.3889 10.9656C0.485194 10.0057 0 8.92915 0 7.18403C0 4.11318 2.15574 1.36082 5.29063 0L6.07414 1.20904C3.14806 2.79184 2.576 4.8458 2.34788 6.14082C2.81904 5.89691 3.43584 5.8118 4.04036 5.86795C5.62316 6.01448 6.87081 7.31388 6.87081 8.92915C6.87081 9.74359 6.54727 10.5247 5.97137 11.1006C5.39548 11.6765 4.6144 12 3.79996 12C3.34956 11.9961 2.90444 11.9026 2.49051 11.725C2.07658 11.5474 1.70212 11.2892 1.3889 10.9656ZM10.1628 10.9656C9.25905 10.0057 8.77385 8.92915 8.77385 7.18403C8.77385 4.11318 10.9296 1.36082 14.0645 0L14.848 1.20904C11.9219 2.79184 11.3499 4.8458 11.1217 6.14082C11.5929 5.89691 12.2097 5.8118 12.8142 5.86795C14.397 6.01448 15.6447 7.31388 15.6447 8.92915C15.6447 9.74359 15.3211 10.5247 14.7452 11.1006C14.1693 11.6765 13.3882 12 12.5738 12C12.1234 11.9961 11.6783 11.9026 11.2644 11.725C10.8504 11.5474 10.476 11.2892 10.1628 10.9656Z"
                fill="#376601"
              />
            </svg>
            <p className={styles.smallParagraph}>
              Forget the Maldives, Gevgelija's got
              <br />
              your dream escape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
