import "./index.css";

export function FormStructure({title, children}){

    return(
        <div className="form-container">
            <div className="form-title">
                <span className="text-form-title">{title}</span>
            </div>
            <div className="form-fields">
                {children}
            </div>
        </div>
    );
}