import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormFactory } from "./FormFactory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form/:formId" element={<FormFactory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
