import { useState } from "react";

export const useNestedSchema = (schema)=>{

     const [ nestSchema, setNestSchema ] = useState(schema);

     const getNestSchema = ()=>{
        return nestSchema;
     }

     const updateBoxContent = (comboboxId, content)=>{
        const updatedContent = nestSchema.map((combobox)=>{
            if(combobox.id === comboboxId) combobox.content = content;
            return combobox;
        })
        setNestSchema(updatedContent)
     }

     const getCombobox = (comboboxId) =>{
        console.log("buscando combobox", comboboxId);
        
        let index = 0 ;
        while (index < nestSchema.length){
            if (nestSchema[index].id === comboboxId)return nestSchema[index];
            index++;
        }
        return null;
     }

    return { getNestSchema, updateBoxContent, getCombobox };
}