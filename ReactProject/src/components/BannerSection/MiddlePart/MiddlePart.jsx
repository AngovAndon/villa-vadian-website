import LeftSideMiddle from "./LeftSide/LeftSideMiddle";
import styles from "./MiddlePart.module.css";
import RightSideMiddle from "./RightSide/RightSideMiddle";

function MiddlePart() {
  return (
    <div className={styles.middlePartContent}>
      <LeftSideMiddle />
      <RightSideMiddle />
    </div>
  );
}

export default MiddlePart;
