import React, { useState } from "react";

import styles from "./switch.module.scss";

interface SwitchProps {
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const CustomSwitch: React.FC<SwitchProps> = ({
  initialChecked = false,
  onChange,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    if (!disabled) {
      const newChecked = !checked;
      setChecked(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <div
      className={`${styles.switch} ${checked ? styles.active : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={handleToggle}
    >
      <div className={styles.thumb} />
    </div>
  );
};
