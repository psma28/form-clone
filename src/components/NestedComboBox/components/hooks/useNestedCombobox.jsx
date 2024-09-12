import { useState, useEffect } from "react";

export const useNestedCombobox = (itemSchema) => {
  const [selection, setSelection] = useState("");
  const [items, setItems] = useState(itemSchema);

  useEffect(() => {
    setSelection("");
    setItems(itemSchema);
  }, [itemSchema]);

  const getEvents = (item) => {
    return item?.events ?? [];
  };

  const getItemFromSchema = (itemId) => {
    return items.find((element) => "" + element.id === itemId);
  };

  return { selection, setSelection, getItemFromSchema, getEvents, items };
};
