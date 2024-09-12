import "./index.css";
import { InfoPopup } from "../InfoPin";
import { useContext } from "react";
import { FieldAccessContext } from "../../context/FieldAccessContext";
import { FormHandlerContext } from "../../context/FormHandlerContext";

export function DocumentRow({ id, label, info }) {
  const { getFieldStatus } = useContext(FieldAccessContext);
  const { updateForm } = useContext(FormHandlerContext);
  return (
    <article className="document-row">
      <div className="document-info text-field-label">
        {label}
        {info && <InfoPopup info={info} />}
      </div>
      <div className="document-upload">
        <input
          disabled={!getFieldStatus()}
          onChange={(e) => updateForm(id, e.target.files[0])}
          className="document-input"
          type="file"
        />
      </div>
    </article>
  );
}
