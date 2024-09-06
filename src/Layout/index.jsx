import "./index.css";
import { FormHeader } from "../components/FormHeader";
import { LoadingScreen } from "../components/LoadScreen";
import { LoadingContext } from "../context/LoadingContext";
import { useContext } from "react";

export function Layout({ title, children }) {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="layout-container">
      {isLoading === true ? <LoadingScreen /> : <></>}
      <FormHeader title={title} />
      <div className="container-fluid">{children}</div>
    </div>
  );
}
