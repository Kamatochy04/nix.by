import { FC } from "react";

import styles from "./comment.module.scss";

import GoldStarIcon from "@/assets/icons/stars/GoldStarIcon.svg";
import GrayStarIcon from "@/assets/icons/stars/GrayStar.svg";

type CommentProps = {
  text: string;
  subText: string;
  senderName: string;
  senderTime: string;
  countOfStars: number;
  senderDate: string;
  isBorder?: boolean;
};

export const Comment: FC<CommentProps> = ({
  text,
  subText,
  senderName,
  senderTime,
  senderDate,
  countOfStars,
  isBorder = true,
}) => {
  const starsCount = Math.max(0, Math.min(5, countOfStars));

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < starsCount) {
      return <GoldStarIcon key={index} />;
    } else {
      return <GrayStarIcon key={index} />;
    }
  });

  return (
    <div className={`${isBorder ? styles.border : ""} ${styles.reviews__item}`}>
      <div className={styles.stars}>{stars}</div>
      <p className={styles.text}>{text}</p>

      <div className={styles.footer}>
        <p className={styles.footer__accaunt}>{subText}</p>
        <p className={styles.footer__time}>
          {senderName} <span className={styles.dote}></span> {senderDate} в{" "}
          {senderTime}
        </p>
      </div>
    </div>
  );
};
