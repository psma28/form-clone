import { useContext } from "react";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { LoadingContext } from "../../context/LoadingContext";

export const SumbmitButton = ({ sendForm }) => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { setLoading } = useContext(LoadingContext);
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
