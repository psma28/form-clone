import { InfoPopup } from "../InfoPin";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";

import "./index.css";

export function DocumentRow({ id, label, info, formHandler }) {
  const { getFieldStatus } = useContext(FieldAccessContext);

  return (
    <article className="document-row">
      <div className="document-info text-field-label">
        {label}
        {info && <InfoPopup info={info} />}
      </div>
      <div className="document-upload">
        <input
          disabled={!getFieldStatus()}
          onChange={(e) => formHandler(id, e.target.files[0])}
          className="document-input"
          type="file"
        />
      </div>
    </article>
  );
}
