"use client";
import { FC, useEffect, useState } from "react";

import styles from "./accauntHeader.module.scss";
import { generateAvatarName } from "@/utils/transformUserName";

import StarIcon from "@/assets/icons/stars/StarIcon.svg";

type AccauntHeaderProps = {
  userName: string;
  raiting: number;
};

export const AccauntHeader: FC<AccauntHeaderProps> = ({
  userName,
  raiting,
}) => {
  const [avatarName, setAvatarName] = useState("");

  useEffect(() => {
    setAvatarName(generateAvatarName(userName));
  }, [userName]);

  return (
    <div className={styles.user__header}>
      <div className={styles.sercle}>{avatarName}</div>

      <div className={styles.user__info}>
        <p className={styles.user__name}>{userName}</p>
        <p className={styles.user__last_time}>с 12 января 2024</p>
      </div>

      <div className={styles.user__raiting}>
        <StarIcon />
        {raiting.toFixed(1)}
      </div>
    </div>
  );
};
