import { FC } from "react";

import styles from "./forms.module.scss";
import { Portal } from "@/components/Portal";
import { TwoFactorAuthenticationForm } from "@/components/TwoFactorAuthenticationForm";

type Props = {
  onClouse: () => void;
};

export const TwoFacroty: FC<Props> = ({ onClouse }) => {
  return (
    <Portal>
      <div className={styles.form}>
        <div className={styles.form__container}>
          <TwoFactorAuthenticationForm onClouse={onClouse} />
        </div>
      </div>
    </Portal>
  );
};
