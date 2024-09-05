import { createContext, useState, useEffect } from "react";

export const FieldAccessContext = createContext();

export const FieldAccessProvider = ({children})=>{

    const [disabled, setDisabled] = useState(true);

    const toggleFieldAccess = ()=>{
        setDisabled(!disabled);
    };

    const setFieldAccess = (value)=>{
        setDisabled(value);
    };

    const getFieldStatus = ()=>{
        return disabled ;
    };

    useEffect(()=>{
        console.log("FieldStatus", disabled);
        
    },[disabled]);

    return(
        <FieldAccessContext.Provider value={{toggleFieldAccess, setFieldAccess, getFieldStatus}}>
            {children}
        </FieldAccessContext.Provider>
    );
}