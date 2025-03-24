import { FC } from "react";

import styles from "./forms.module.scss";
import { InviteFriendForm } from "@/components/InviteFriendForm";
import { Portal } from "@/components/Portal";

type Props = {
  onClouse: () => void;
};

export const FriendForm: FC<Props> = ({ onClouse }) => {
  return (
    <Portal>
      <div className={styles.form}>
        <div className={styles.form__container}>
          <InviteFriendForm onClouse={onClouse} />
        </div>
      </div>
    </Portal>
  );
};
