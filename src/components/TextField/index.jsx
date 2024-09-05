import { useContext } from "react";
import { InfoPopup } from "../InfoPin";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";

export function TextField({ label, info, props, stateHandler }) {
  const { getFieldStatus } = useContext(FieldAccessContext);

  return (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
        {info && <InfoPopup info={info} />}
      </div>
      <input
        className={
          "field-input text-field-label" +
          (getFieldStatus() === true ? " disabled-input" : "") +
          ({ ...props }.type === "tel" ? " telephone-input" : "")
        }
        type={{ ...props }.type}
        disabled={getFieldStatus()}
        maxLength={{ ...props }.type === "tel" ? "8" : "30"}
        onBlur={(e) => stateHandler(label, e.target.value)}
      ></input>
    </div>
  );
}
