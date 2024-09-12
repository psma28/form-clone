import { useEffect, useState } from "react";

export const useNestedSchema = (schema)=>{

     const [ nestSchema, setNestSchema ] = useState(schema);

      useEffect(()=>{
         console.log("El nest schema ha cambiado", nestSchema);
         
      },[nestSchema])

     const getNestSchema = ()=>{
        return nestSchema;
     }

     const updateBoxContent = (comboboxId, content)=>{
      console.log("Updating box content", "id", comboboxId, "content", content);
      
      setNestSchema((prevSchema) => {
         const updatedSchema = prevSchema.map((combobox) => {
           if (combobox.id === comboboxId) {
             console.log("Encontrado el combobox a cambiar", combobox);
             console.log("Cambiando ", { ...combobox, items: content });
             return { ...combobox, items: content }; 
           }
           return combobox;
         });
         return updatedSchema;
       });
       
     }

     const getCombobox = (comboboxId) =>{
      return nestSchema.find((combobox) => combobox.id === comboboxId) || null;
     }

    return { getNestSchema, updateBoxContent, getCombobox };
}