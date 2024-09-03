import "./index.css";

export function FormRow({children}){
    return(
        <div className={"form-row " + (children.length !== undefined ? "item-group-row" : "one-item-row")}>
            {children}
        </div>
    )
}