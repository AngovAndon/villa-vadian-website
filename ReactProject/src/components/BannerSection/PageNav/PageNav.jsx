import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <svg
        className={styles.logo}
        viewBox="0 0 80 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M69.2093 0H0C5.02326 1.11628 8.55812 5.58139 8.55812 10.6046V73.1163C15.4418 66.2326 19.1628 57.1163 19.1628 47.4419V12.4651C19.1628 11.5349 19.907 10.6046 21.0232 10.6046C21.9535 10.6046 22.8837 11.3488 22.8837 12.4651V58.9767C29.7674 52.093 33.4884 42.9767 33.4884 33.3023V12.4651C33.4884 11.5349 34.2326 10.6046 35.3488 10.6046C36.2791 10.6046 37.2093 11.3488 37.2093 12.4651V44.8372L46.5116 35.5349C46.8837 35.1628 47.0698 34.7907 47.2558 34.4186V34.2326C47.6279 33.6744 47.6279 33.1163 47.8139 32.3721C48.7442 20.2791 58.7907 10.6046 71.2558 10.6046H80L69.2093 0Z" />
      </svg>
      <ul className={styles.navList}>
        <li>
          <a href="/about">Home</a>
        </li>
        <li>
          <a href="/services">Availability</a>
        </li>
        <li>
          <a href="/portfolio">Reviews</a>
        </li>
        <li>
          <a href="/contact">Gallery</a>
        </li>
        <li>
          <a href="/contact">Book Now</a>
        </li>
      </ul>
      <svg
        className={styles.menuIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="18"
        viewBox="0 0 27 18"
        fill="none"
      >
        <path
          d="M1.19531 1H25.1953M1.19531 9H25.1953M1.19531 17H25.1953"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </nav>
  );
}

export default PageNav;
