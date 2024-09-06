import { useEffect, useState } from "react";

export const useForm = () => {
  const [formContent, setFormContent] = useState({});
  const handleForm = (key, value) => {
    setFormContent(() => ({
      ...formContent,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(formContent);
  }, [formContent]);

  const sendForm = (setLoading) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    console.log("Pre envio: ", formContent);
  };

  return { handleForm, sendForm };
};
