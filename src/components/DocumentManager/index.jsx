import "./index.css";

export function DocumentManager({ children }) {
  return (
    <article className="document-container">
      <div className="text-field-label-white document-header">
          <span>Tipo de documento</span>
          <span>Documento a cargar</span>
      </div>
      <div className="document-content">
        {children}
      </div>
    </article>
  );
}
