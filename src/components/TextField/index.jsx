import { useContext } from "react";
import { InfoPopup } from "../InfoPin";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { dumbValidator } from "../../services/validators/dumbValidator";

export function TextField({ id, label, info, props, formHandler, validators=[dumbValidator] }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const handleInput = (content) => {
    let validation = true;
    validators.map((validator) => {
      if (!validator(content)) {
        validation = false;
      }
      return validator;
    });
    console.log("Validating field", validation);
    if (validation) {
      formHandler(id, content);
    } else {
      formHandler(id, null);
    }
  };

  return (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
        {info && <InfoPopup info={info} />}
      </div>
      <div
        className={
          "field-input text-field-label" +
          (getFieldStatus() === false ? " disabled-input" : "") +
          ({ ...props }.type === "tel" ? " telephone-input" : "")
        }
      >
        {{ ...props }.type === "tel" ? (
          <span className="text-field-label">+569</span>
        ) : (
          <></>
        )}
        <input
          type={{ ...props }.type}
          disabled={!getFieldStatus()}
          maxLength={{ ...props }.type === "tel" ? "8" : "30"}
          
          onBlur={(e) => handleInput(e.target.value)}
        ></input>
      </div>
    </div>
  );
}
