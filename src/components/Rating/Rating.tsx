import styles from "./Rating.module.scss";
import Image from "next/image";
import starEmpty from "@/assets/star.svg";
import starfill from "@/assets/starfill.svg";
import { useEffect, useState } from "react";

type Props = {
  count: number;
  rate: number;
};

const Rating = (props: Props) => {
  const rate = Math.round(props.rate);
  const [starsFill, setStarsFill] = useState<number[]>([]);
  const [stars, setStars] = useState<number[]>([]);

  const stFill: Array<number> = [];
  const stEmpty: Array<number> = [0, 1, 2, 3, 4];

  for (let i = 0; i < rate; i++) {
    stFill.push(i);
    stEmpty.pop();
  }

  useEffect(() => {
    setStarsFill(stFill);
    setStars(stEmpty);
  }, []);

  return (
    <div className={styles.rating}>
      {starsFill.map((star, index) => (
        <Image
          src={starfill}
          alt="Star"
          className={styles.star}
          width={14}
          height={14}
          key={index}
        />
      ))}
      {stars.map((star, index) => (
        <Image
          src={starEmpty}
          alt="Star"
          className={styles.star}
          width={14}
          height={14}
          key={index}
        />
      ))}
      <h5 className={styles.rate}>{props.count} отзывов</h5>
    </div>
  );
};

export default Rating;
