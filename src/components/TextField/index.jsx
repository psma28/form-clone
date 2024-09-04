  import { InfoPopup } from "../InfoPin";
import "./index.css";

export function TextField({ label, info, active, props, stateHandler }) {
  
  return (
    <div className="field-container">
      <div className="field-label">
        <span className="text-field-label">{label}</span>
        {info && (
          <InfoPopup info={info}/>
        )}
      </div>
        <input
        className={
          "field-input text-field-label " +  
          ({...props}.type==="tel" ? "telephone-input" : "")
        }
        type={{ ...props }.type}
        
        maxLength={{...props}.type==="tel" ? "8" : "30"}
        onBlur={(e)=>stateHandler(label, e.target.value)}
        ></input>
    
    </div>
  );
}
