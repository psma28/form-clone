import { useContext } from "react";
import "./index.css";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { useCheckBox } from "./hooks/useCheckBox";

export const CheckBoxField = ({ id, label, items, formHandler }) => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { handleSelection, getSelection } = useCheckBox();
  console.log("CREANDO CHECKBOX");
  
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
                checked={getSelection() === item.value}
                onChange={() => {
                  handleSelection(item.value);
                  formHandler(id, item.value);
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
