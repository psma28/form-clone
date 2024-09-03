import { useState } from "react";
import "./index.css";

export function TextField({label, info, active}){
    const [hovered, setHovered] = useState(false);

    return(
        <div className="field-container">
            <div className="field-label">
                <span className="text-field-label">{ label }</span>
                {
                    info && (
                        <div className="info-icon" 
                        onMouseEnter={()=>{setHovered(true)}}
                        onMouseLeave={()=>{setHovered(false)}}>
                            <span>i</span>
                        </div>

                    )
                }
            </div>
            <input className="field-input">
                
            </input>

            {
                hovered && (
                    <div className="field-info">
                        <span className="text-field-label">{info}</span>
                    </div>
                )
            }
        </div>
    )
}