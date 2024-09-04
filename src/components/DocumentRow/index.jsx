import "./index.css";

export function DocumentRow({label}){

    return(
        <div className="document-row">
            <div className="document-info text-field-label">{label}</div>
            <div className="document-upload">
                <input className="document-input" type="file"></input>
            </div>
        </div>
    );
}