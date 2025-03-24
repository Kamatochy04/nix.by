import { FC } from "react";

import styles from "./forms.module.scss";
import { NotificationForm } from "@/components/NotificationsForm";
import { Portal } from "@/components/Portal";

type Props = {
  onClouse: () => void;
};
export const Notification: FC<Props> = ({ onClouse }) => {
  return (
    <Portal>
      <div className={styles.form}>
        <div className={styles.form__container}>
          <NotificationForm onClouse={onClouse} />
        </div>
      </div>
    </Portal>
  );
};
