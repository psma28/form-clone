import "./index.css";
import { useSelection } from "./hooks/useSelection";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export function ComboBoxField({ id, label, placeholder, items }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
  const { selected, handleSelection } = useSelection(updateForm);
  return (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
      </div>
      <select
        className={
          "field-select text-field-label " +
          (getFieldStatus() === false ? "disabled-combobox" : "")
        }
        name={label}
        id={label}
        value={selected}
        disabled={!getFieldStatus()}
        onChange={(e) => handleSelection(id, e.target.value)}
      >
        <option value="" label={`Seleccione ${placeholder}`}></option>
        {items.map((item, index) => {
          return (
            <option value={item.value} label={item.label} key={index}></option>
          );
        })}
      </select>
      <div></div>
    </div>
  );
}
