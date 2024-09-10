import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormFactory } from "./FormFactory";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form/:formId" element={<FormFactory />} />
        <Route path="/*" element={<NotFoundPage message={"Página no encontrada"}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
