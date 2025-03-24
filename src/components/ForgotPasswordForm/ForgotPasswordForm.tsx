import Link from "next/link";
import { FC, useState } from "react";

import { CustomButton } from "../CustomButton";
import { CustomInput } from "../CustomInput";
import styles from "./forgotPassword.module.scss";

import ClouseIcon from "@/assets/icons/CloseIcon.svg";
import LogoIcon from "@/assets/icons/LogoIcon.svg";

type ForgotPasswordFormProps = {
  onClouse: (isClouse: boolean) => void;
};

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  onClouse,
}) => {
  // Состояние для хранения всех значений формы
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange =
    (fieldName: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [fieldName]: e.target.value,
      });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <p className={styles.title}>Изменить пароль</p>
      <div className={styles.form__wrapper}>
        <CustomInput
          type="password"
          placeholder="Текущий пароль"
          value={formData.currentPassword}
          className={styles.input}
          onChange={handleChange("currentPassword")}
        />
        <CustomInput
          type="password"
          className={styles.input}
          placeholder="Новый пароль"
          value={formData.newPassword}
          onChange={handleChange("newPassword")}
        />
        <CustomInput
          type="password"
          placeholder="Подтвердите новый пароль"
          value={formData.confirmNewPassword}
          className={styles.input}
          onChange={handleChange("confirmNewPassword")}
        />
      </div>

      <CustomButton theme={"tertiary"} className={styles.button} type="submit">
        Изменить пароль
      </CustomButton>

      <p className={styles.worget_password}>Забыли пароль?</p>
    </form>
  );
};
