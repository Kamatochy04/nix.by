import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./card.module.scss";

type ProductCardProps = {
  title: string;
  date: string;
  owner: string;
  price: number;
  imgUrl: StaticImageData;
  statusText: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  imgUrl,
  title,
  date,
  owner,
  price,
  statusText,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Image src={imgUrl} alt={title} layout="fill" />
      </div>

      <div className={styles.card__content}>
        <p className={styles.card__name}>{title}</p>
        <p className={styles.card__owner}>
          {owner} <span className={styles.dote}></span>
          {date}
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.price}>{price} ₽</p>
        <div className={styles.status}>{statusText}</div>
      </div>
    </div>
  );
};
