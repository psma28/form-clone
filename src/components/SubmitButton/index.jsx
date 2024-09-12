import "./index.css";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export const SumbmitButton = () => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
  const { sendForm } = useContext(FormHandlerContext);
  return getFieldStatus() === true ? (
    <div className="submit-section">
      <button
        onClick={() => sendForm(setLoading)}
        className="submit-button font-calibri"
      >
        Enviar postulación
      </button>
    </div>
  ) : (
    <></>
  );
};
