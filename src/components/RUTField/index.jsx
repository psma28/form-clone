import "./index.css";
import { useContext, useState } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { getValue, RUTFormatter } from "../../utils/RUTFormatter";
import { validateRUT } from "../../utils/RUTValidator";
import { RUTIndicators } from "./data/RUTIndicators";

export const RUTField = () => {
  const { setFieldAccess } = useContext(FieldAccessContext);

  const [value, setValue] = useState("");
  const [indicator, setIndicator] = useState(RUTIndicators.waiting);

  const handleIndicator = (status) => {
    setIndicator(status);
  };
  const handleInputChange = (value) => {
    setValue(value);
  };
  const handleRUTVerification = () => {
    if (validateRUT(getValue(value))) {
      handleIndicator(RUTIndicators.verified);
      setFieldAccess(true);
    } else {
      handleIndicator(RUTIndicators.failed);
      setFieldAccess(false);
    }
  };

  return (
    <div className="rut-field">
      <div className="rut-label">
        <span className="text-form-title">RUT</span>
      </div>
      <div className="rut-container">
        <div className="rut-input">
          <input
            type="text"
            maxLength={12}
            placeholder="xx.xxx.xxx-x"
            value={RUTFormatter(value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleRUTVerification();
              }
            }}
            onChange={(e) => handleInputChange(e.target.value)}
            onBlur={() => handleRUTVerification()}
          />
        </div>
        <div className="rut-indicator">
          <span className={"font-calibri " + indicator.color}>
            {indicator.message}
          </span>
        </div>
      </div>
    </div>
  );
};
