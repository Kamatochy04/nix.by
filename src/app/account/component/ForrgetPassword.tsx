import { FC } from "react";

import styles from "./forms.module.scss";
import { ForgotPasswordForm } from "@/components/ForgotPasswordForm";
import { Portal } from "@/components/Portal";

type Props = {
  onClouse: () => void;
};

export const ForgetPassword: FC<Props> = ({ onClouse }) => {
  return (
    <Portal>
      <div className={styles.form}>
        <div className={styles.form__container}>
          <ForgotPasswordForm onClouse={onClouse} />
        </div>
      </div>
    </Portal>
  );
};
