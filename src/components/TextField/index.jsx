import "./index.css";
import { useContext } from "react";
import { InfoPopup } from "../InfoPin";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { dumbValidator } from "../../services/validators/dumbValidator";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export function TextField({
  id,
  label,
  info,
  props,
  validators = [dumbValidator],
}) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
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
      updateForm(id, content);
    } else {
      updateForm(id, null);
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
