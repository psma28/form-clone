import "./index.css";
import { useContext, useState } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { getValue, RUTFormatter } from "../../utils/RUTFormatter";
import { validateRUT } from "../../utils/RUTValidator";

export const RUTField = ()=> {
    const {setFieldAccess} = useContext(FieldAccessContext);
    const [value, setValue] = useState("");
    const handleInputChange = (value)=>{
        setValue(value)
    };
    const handleRUTVerification = ()=>{
        if(validateRUT(getValue(value))){
            setFieldAccess(false)
        }else{
            setFieldAccess(true)
        }
    };
    
    return(
        <div className="rut-container">
            <div className="rut-field">
                <div className="rut-label"></div>
                <div className="rut-input">
                    <input type="text" 
                    maxLength={12}
                    value = {RUTFormatter(value)}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            handleRUTVerification()
                        }
                    }}
                    onChange={(e)=>handleInputChange(e.target.value)}
                    onBlur={()=>handleRUTVerification()}/>
                </div>
            </div>
        </div>

    );
}