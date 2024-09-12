import { useContext } from "react";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { useCheckBox } from "./hooks/useCheckBox";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export const CheckBoxField = ({ id, label, items }) => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
  const { handleCheck, getCheck } = useCheckBox();
  return (
    <div className="checkbox-container">
      <div className="checkbox-label">
        <span className="text-field-label">{label}</span>
      </div>
      <div
        className={
          "checkbox-items " +
          (getFieldStatus() === false ? " disabled-checkbox" : "")
        }
      >
        {items.map((item, index) => {
          return (
            <label key={index} className="checkbox-element font-calibri">
              <input
                type="checkbox"
                disabled={!getFieldStatus()}
                checked={getCheck() === item.value}
                onChange={() => {
                  updateForm(id, item.value);
                  handleCheck(item.value);
                }}
              />
              {item.label}
            </label>
          );
        })}
      </div>
    </div>
  );
};
