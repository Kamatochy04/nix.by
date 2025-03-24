import Link from "next/link";
import { FC } from "react";

import { CustomButton } from "../CustomButton";
import styles from "./notifications.module.scss";
import { CustomSwitch } from "../CustomSwitch";

import ClouseIcon from "@/assets/icons/CloseIcon.svg";
import LogoIcon from "@/assets/icons/LogoIcon.svg";
import TelegramIcon from "@/assets/icons/socials/TelegramIcon.svg";

type NotificationFormProps = {
  onClouse: (isCloused: boolean) => void;
};
export const NotificationForm: FC<NotificationFormProps> = ({ onClouse }) => {
  return (
    <form className={styles.form}>
      <Link href="/" className={styles.logoLink}>
        <LogoIcon className={styles.logo} />
      </Link>

      <CustomButton
        theme={"imageOutline"}
        onClick={() => {
          onClouse(false);
        }}
        className={styles.clouse_icon}
      >
        <ClouseIcon />
      </CustomButton>

      <h3 className={styles.title}>Уведомления</h3>
      <div className={styles.block}>🔔 Будем уведомлять о новых сообщениях</div>

      <div className={styles.form__footer}>
        <CustomButton theme={"imageOutline"} onClick={() => {}}>
          <TelegramIcon />
        </CustomButton>
        <div className={styles.form__wrapper}>
          <h4 className={styles.form__title}>Telegram</h4>
          <p className={styles.name}>
            @enigie
            <span>Изменить</span>
          </p>
          <p className={styles.form__inf}>
            Уведомления присылает телеграм-бот Nixbuy
          </p>
        </div>

        <div className={styles.switch}>
          <CustomSwitch />
        </div>
      </div>
    </form>
  );
};
