"use client";

import { useState } from "react";

import { AUTH_PATHS } from "../../constants/AUTH_PATHS";
import { SwitchRegistrationForm } from "../SwitchRegistrationForm";

export const RegistrationPath = () => {
  const [activeForm] = useState(AUTH_PATHS.registrationSteps.registration);

  return <SwitchRegistrationForm activeForm={activeForm} />;
};
