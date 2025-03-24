import Link from "next/link";
import { FC } from "react";

import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import styles from "./twoFactor.module.scss";

import ClouseIcon from "@/assets/icons/CloseIcon.svg";
import LogoIcon from "@/assets/icons/LogoIcon.svg";

type TwoFactorAuthenticationFormProps = {
  onClouse: (isClouse: boolean) => void;
};

export const TwoFactorAuthenticationForm: FC<
  TwoFactorAuthenticationFormProps
> = ({ onClouse }) => {
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
      <h3 className={styles.title}>Двухфакторная аутентификация</h3>
      <p className={styles.text}>
        Пожалуйста, введите код из приложения Google Authenticator,
        чтобы подтвердить, что вы — владелец аккаунта
      </p>
      <CustomInput
        placeholder="Код подтверждения"
        value={""}
        className={styles.input}
        onChange={() => {}}
      />

      <CustomButton theme={"tertiary"} className={styles.button}>
        Подтвердить
      </CustomButton>
    </form>
  );
};
