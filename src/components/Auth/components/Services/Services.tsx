import { FC } from "react";
import { toast } from "react-toastify";

import styles from "./Services.module.scss";
import { googleLogin } from "@/api/inde";
import { CustomButton } from "@/components/CustomButton";
import { CustomParagraph } from "@/components/CustomParagraph";
import { RESPONSE_MESSAGES } from "@/constants/RESPONSE_MESSAGES";

import GoogleIcon from "@/assets/icons/socials/GoogleIcon.svg";
import TelegramIcon from "@/assets/icons/socials/TelegramIcon.svg";
import VKIcon from "@/assets/icons/socials/VKIcon.svg";

interface IProps {
  title: string;
}

export const Services: FC<IProps> = ({ title }) => {
  const onGoogleClick = async () => {
    try {
      const resp = await googleLogin();

      window.location.href = resp.data.redirectUrl;
    } catch (error) {
      toast.error(RESPONSE_MESSAGES.unknownError);
      console.error(error);
    }
  };

  return (
    <div className={styles.root}>
      <CustomParagraph as="b3">{title}</CustomParagraph>
      <div className={styles.btnsWrapper}>
        <CustomButton theme="imageOutline" onClick={onGoogleClick}>
          <GoogleIcon />
        </CustomButton>
        <CustomButton theme="imageOutline">
          <VKIcon />
        </CustomButton>
        <CustomButton theme="imageOutline">
          <TelegramIcon />
        </CustomButton>
      </div>
    </div>
  );
};
