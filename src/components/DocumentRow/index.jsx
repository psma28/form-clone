import { InfoPopup } from "../InfoPin";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";

import "./index.css";

export function DocumentRow({label, info}){
    const { getFieldStatus } = useContext(FieldAccessContext);

    return(
        <article className="document-row">
            <div className="document-info text-field-label">
                {label}{info && <InfoPopup info={info}/>}
            </div>
            <div className="document-upload">
                <input 
                disabled={!getFieldStatus()}
                className="document-input" 
                type="file"/>
            </div>
        </article>
    );
}