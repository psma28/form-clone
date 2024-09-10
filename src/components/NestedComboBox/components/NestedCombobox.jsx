import { useContext, useEffect, useState } from "react";
import { FieldAccessContext } from "../../../context/FieldAccessContext";

export const NestedCombobox = ({
  id,
  label,
  placeholder,
  comboboxSchema,
  eventTrigger,
  events = [],
}) => {
  //const { getFieldStatus } = useContext(FieldAccessContext);
  const [selection, setSelection] = useState("");
  let items = comboboxSchema.items;

  useEffect(() =>{
    setSelection("");
  },[items]);

  const getEvents = (itemId) =>{
    const item = items.find((element)=>element.id === itemId);
    return item.events;
  }

  const handleSelection = (itemId) => {
    console.log("cambiaso", itemId);
    setSelection(itemId);
    const incomingEvents = getEvents(itemId)
    console.log("Eventos de la seleccion", incomingEvents);
    if(incomingEvents.length > 0) eventTrigger (id, incomingEvents);
  };

  if (items.length === 0 || items === null || items === undefined) return null;
  return (
    <div>
      <div>
        <span>{label}</span>
      </div>
      <select
        id={id}
        name={label}
        value={selection}
        onChange={(e) => handleSelection(e.target.value)}
      >
        <option value="" disabled={selection!==""} label={`Seleccione ${placeholder}`}></option>
        {items.map((item) => {
          return (
            <option value={item.id} label={item.label} key={item.id}></option>
          );
        })}
      </select>
    </div>
  );
};
