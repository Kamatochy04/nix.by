"use client";

import { FC } from "react";

import { FormWithContentWrapper } from "../FormWithContentWrapper";
import { RegistrationForm } from "../RegistrationForm";

interface IProps {
  activeForm: string;
}

export const SwitchRegistrationForm: FC<IProps> = ({ activeForm }) => {
  switch (activeForm) {
    default:
      return (
        <FormWithContentWrapper key={activeForm}>
          <RegistrationForm />
        </FormWithContentWrapper>
      );
  }
};
