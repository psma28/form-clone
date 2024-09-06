import { useState } from "react";

export const useCheckBox = () => {
  const [selected, setSelected] = useState({});
  const handleSelection = (value) => {
    setSelected(value);
  };

  const getSelection = ()=>{
    return selected;
  }

  return {handleSelection, getSelection}
};
