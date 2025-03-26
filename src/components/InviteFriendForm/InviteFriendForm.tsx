"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { CustomButton } from "../CustomButton";
import styles from "./inviteFriendForm.module.scss";

import ClouseIcon from "@/assets/icons/CloseIcon.svg";
import LogoIcon from "@/assets/icons/LogoIcon.svg";
import CopyIcon from "@/assets/icons/СopyIcon.svg";

type InviteFriendFormProps = {
  onClouse: (isClouse: boolean) => void;
};

export const InviteFriendForm: FC<InviteFriendFormProps> = ({ onClouse }) => {
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = "https://nixbuy.com/referral?ref=uniqueID123123123";

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        // Fallback для старых браузеров
        const textArea = document.createElement("textarea");
        textArea.value = referralLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      });
  };

  return (
    <form className={styles.form}>
      <Link href="/" className={styles.logoLink}>
        <LogoIcon className={styles.logo} />
      </Link>
      <CustomButton
        theme={"imageOutline"}
        onClick={() => onClouse(false)}
        className={styles.clouse_icon}
      >
        <ClouseIcon />
      </CustomButton>
      <h3 className={styles.title}>Приглашай друзей и зарабатывай</h3>
      <div className={styles.inf}>
        <p>
          Получай 5% от покупок нового пользователя и 1% от его последующих
          покупок.
        </p>
        <p>
          Начисления происходят моментально, а ты решаешь, выводить ли их или
          использовать для новых покупок. Зарабатывай на приглашении друзей —
          это просто!
        </p>
      </div>
      <div className={styles.link}>
        <p className={styles.link__label}>Ссылка на приглашение</p>
        <div className={styles.link__box}>
          <div className={styles.link__wrapper}>
            <p>{referralLink}</p>
          </div>

          <div className={styles.link__icon} onClick={handleCopyClick}>
            <CopyIcon />
            {isCopied && (
              <span className={styles.copy_notification}>Скопировано!</span>
            )}
          </div>
        </div>
      </div>
      <div className={styles.statistic}>
        <p className={styles.statistic__title}>Статистика</p>

        <div className={styles.statistic__wrapper}>
          <div className={styles.statistic__box}>
            <p className={styles.count}>0</p>
            <p className={styles.text}>Регистрации</p>
          </div>
          <div className={styles.statistic__box}>
            <p className={styles.count}>0</p>
            <p className={styles.text}>Купленные товары</p>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <CustomButton theme={"tertiary"}>
          Доход: <span> 0 RUB</span>
        </CustomButton>
        <CustomButton theme={"tertiary"}>Перевести на баланс</CustomButton>
      </div>
    </form>
  );
};
