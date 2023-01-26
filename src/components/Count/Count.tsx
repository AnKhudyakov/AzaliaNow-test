import { useState } from "react";
import styles from "./Count.module.scss";

type Props = {
  countItem: number;
  setCountItem: any;
};

const Count = (props:Props) => {
  //const [count, setCount] = useState(1);
  return (
    <div className={styles.btn}>
      <div
        className={styles.minus}
        onClick={() => props.setCountItem(Math.max(props.countItem- 1, 0))}
      ></div>
      <p className={styles.count}>{props.countItem}</p>
      <div className={styles.plus} onClick={() => props.setCountItem(props.countItem + 1)}>
        <div
          className={styles.minus_plus}
          onClick={() => props.setCountItem(props.countItem + 1)}
        ></div>
      </div>
      <div
        className={styles.minus_rotate}
        onClick={() => props.setCountItem(props.countItem + 1)}
      ></div>
    </div>
  );
};

export default Count;
