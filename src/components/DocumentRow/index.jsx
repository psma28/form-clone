import { InfoPopup } from "../InfoPin";
import "./index.css";

export function DocumentRow({label, info}){

    return(
        <article className="document-row">
            <div className="document-info text-field-label">
                {label}{info && <InfoPopup info={info}/>}
            </div>
            <div className="document-upload">
                <input className="document-input" type="file"></input>
            </div>
        </article>
    );
}