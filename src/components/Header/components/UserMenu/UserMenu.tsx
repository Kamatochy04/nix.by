"use client";

import classNames from "classnames";

import { userMenuData, userNotificationData } from "./constants";
import styles from "./UserMenu.module.scss";
import { CustomDropdownForNotification } from "@/components/CustomDropdownForNotification";
import CustomDropdownForUserMenu from "@/components/CustomDropdownForUserMenu/CustomDropdownForUserMenu";

export const UserMenu = () => {
  return (
    <div className={classNames(styles.wrapper)}>
      <CustomDropdownForUserMenu
        userName="Леша 33"
        userMenuData={userMenuData}
      />
      <CustomDropdownForNotification
        userNotificationData={userNotificationData}
        hasImage
      />
    </div>
  );
};
