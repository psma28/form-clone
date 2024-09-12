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
  const [ items, setItems ] = useState(comboboxSchema.items);

  useEffect(() => {
    setSelection("");
    setItems(comboboxSchema.items)
  }, [comboboxSchema.items]);

  const getEvents = (item) => {
    return item?.events ?? [];

  };

  const getItem = (itemId) => {
    return items.find((element) => ""+element.id === itemId);
  }

  const handleSelection = (itemId) => {
    setSelection(itemId);
    const fullItem = getItem(itemId);
    const incomingEvents = getEvents(fullItem);
    eventTrigger(id, fullItem.value,[...events,...incomingEvents]);
  };

  if (!items || items.length === 0) return null;
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
