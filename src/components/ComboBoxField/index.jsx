import "./index.css";
import { useSelection } from "./hooks/useSelection";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";

export function ComboBoxField({ label, placeholder, items, stateHandler }) {
  const { selected, handleSelection } = useSelection(stateHandler);
  const { getFieldStatus } = useContext(FieldAccessContext);
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
        onChange={(e) => handleSelection(label, e.target.value)}
      >
        <option value="" label={`Seleccione ${placeholder}`}></option>
        {items.map((item, index) => {
          return <option value={item} label={item} key={index}></option>;
        })}
      </select>
      <div></div>
    </div>
  );
}
