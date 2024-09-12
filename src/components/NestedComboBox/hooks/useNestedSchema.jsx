import { useState } from "react";

export const useNestedSchema = (schema) => {
  const [nestSchema, setNestSchema] = useState(schema);

  const getNestSchema = () => {
    return nestSchema;
  };

  const updateBoxContent = (comboboxId, content) => {
    setNestSchema((prevSchema) => {
      const updatedSchema = prevSchema.map((combobox) => {
        if (combobox.id === comboboxId) return { ...combobox, items: content };
        return combobox;
      });
      return updatedSchema;
    });
  };

  const getCombobox = (comboboxId) => {
    return nestSchema.find((combobox) => combobox.id === comboboxId) || null;
  };

  return { getNestSchema, updateBoxContent, getCombobox };
};
