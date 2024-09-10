import { useContext, useEffect, useState } from "react";
import { FieldAccessContext } from "../../../context/FieldAccessContext";
import "./index.css";

export const NestedCombobox = ({
  id,
  label,
  placeholder,
  comboboxSchema,
  eventTrigger,
  events = [],
}) => {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const [selection, setSelection] = useState("");
  let items = comboboxSchema.items;

  useEffect(() => {
    setSelection("");
  }, [items]);

  const getEvents = (itemId) => {
    const item = items.find((element) => element.id === itemId);
    if(item.events === undefined || item.events === null) return [];
    return item.events;
  };

  const handleSelection = (itemId) => {
    setSelection(itemId);
    const incomingEvents = getEvents(itemId);
    eventTrigger(id, [...events,...incomingEvents]);
  };

  if (items.length === 0 || items === null || items === undefined) return null;
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
        disabled={!getFieldStatus()}
        id={id}
        name={label}
        value={selection}
        onChange={(e) => handleSelection(e.target.value)}
      >
        <option
          value=""
          disabled={selection !== ""}
          label={`Seleccione ${placeholder}`}
        ></option>
        {items.map((item) => {
          return (
            <option value={item.id} label={item.label} key={item.id}></option>
          );
        })}
      </select>
    </div>
  );
};
