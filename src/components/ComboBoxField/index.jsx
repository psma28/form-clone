import "./index.css";
import { useSelection } from "./hooks/useSelection";

export function ComboBoxField({
  label,
  placeholder,
  items,
  active,
  stateHandler,
}) {
  const { selected, handleSelection } = useSelection(stateHandler);

  return (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
      </div>
      <select
        className="field-select text-field-label"
        name={label}
        id={label}
        value={selected}
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
