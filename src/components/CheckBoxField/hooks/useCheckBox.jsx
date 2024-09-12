import { useState } from "react";

export const useCheckBox = () => {
  const [checked, setChecked] = useState("");
  const handleCheck = (value) => {
    setChecked(value);
  };

  const getCheck = () => {
    return checked;
  };

  return { handleCheck, getCheck };
};
