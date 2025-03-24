import { FC } from "react";

import styles from "./advertising.module.scss";
import { CustomButton, IButtonTheme } from "@/components/CustomButton";

interface AdvertisingType extends IButtonTheme {
  title: string;
  text: string;
  buttonText: React.ReactNode;
  buttonClick: () => void;
}

export const Advertising: FC<AdvertisingType> = ({
  title,
  text,
  theme,
  buttonText,
  buttonClick,
}) => {
  return (
    <div className={styles.advertising__block}>
      <p className={styles.advertising__title}>{title}</p>
      <p className={styles.advertising__text}>{text}</p>
      <CustomButton
        theme={theme}
        className={styles.advertising__button}
        onClick={buttonClick}
      >
        {buttonText}
      </CustomButton>
    </div>
  );
};
