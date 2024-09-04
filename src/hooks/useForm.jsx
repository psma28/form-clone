import { useEffect, useState } from "react";

export const useForm=()=>{
    const [formContent, setFormContent] = useState({});
    const handleForm= (key, value)=>{
        setFormContent(()=>({
            ...formContent, [key]:value
        }))
    }
    
    useEffect(()=>{
        console.log(formContent);
    },[formContent])

    return {handleForm}
}