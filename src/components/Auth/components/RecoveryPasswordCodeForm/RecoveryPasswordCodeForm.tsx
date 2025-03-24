"use client";

import { useFormik } from "formik";
import { FC } from "react";

import styles from "./RecoveryPasswordCodeForm.module.scss";
import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { CustomParagraph } from "@/components/CustomParagraph";
import { CustomTitle } from "@/components/CustomTitle";
import { useAppDispatch } from "@/store/hooks/hooks";
import { setRecoveryPasswordCode } from "@/store/slices/auth/recoveryPasswordSlice";

interface IProps {
  setActiveFormHandler: (value: string) => void;
}

export const RecoveryPasswordCodeForm: FC<IProps> = ({
  setActiveFormHandler,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (data) => {
      dispatch(setRecoveryPasswordCode(data.code));
      setActiveFormHandler(AUTH_PATHS.recoveryPassSteps.createNewPass);
    },
  });

  return (
    <form className={styles.root} onSubmit={formik.handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <CustomTitle as="h4" className={styles.colorBtn}>
            Восстановить пароль
          </CustomTitle>
          <CustomParagraph as="b3">
            Мы отправили вам сообщение с кодом. Пожалуйста, введите ниже код с
            почты
          </CustomParagraph>
        </div>
        <CustomInput
          id="code"
          name="code"
          placeholder="Код подтверждения"
          value={formik.values.code}
          errorText={formik.errors.code}
          isError={!!formik.errors.code}
          onChange={formik.handleChange}
          className={styles.input}
        />
      </div>
      <CustomButton
        type="submit"
        theme="tertiary"
        isDisabled={!formik.isValid || !formik.dirty}
        className={styles.submitBtn}
      >
        Подтвердить
      </CustomButton>
    </form>
  );
};
