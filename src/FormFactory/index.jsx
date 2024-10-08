import { useParams } from "react-router-dom";
import { formBrowser } from "../utils/formBrowser";
import { NotFoundPage } from "../pages/NotFoundPage";
import { LoadingProvider } from "../context/LoadingContext";
import { FieldAccessProvider } from "../context/FieldAccessContext";
import { Layout } from "../Layout";
import { FormHelpText } from "../components/FormHelpText";
import { RUTField } from "../components/RUTField";
import { componentGenerator } from "./utils/ComponentGenerator";
import { FormStructure } from "../components/FormStructure";
import { SumbmitButton } from "../components/SubmitButton";
import { FormHandlerProvider } from "../context/FormHandlerContext";

export const FormFactory = () => {
  const { formId } = useParams();
  const form = formBrowser(formId);

  if (form === null || form === undefined) {
    return <NotFoundPage message="No se encontró el formulario" />;
  }

  return (
    <LoadingProvider>
      <FieldAccessProvider>
        <FormHandlerProvider>
          <Layout title={form.title}>
            <FormHelpText text={form["form-intro"]} />
            <RUTField />
            {form["form-groups"].map((structure) => {
              return (
                <FormStructure
                  key={structure.label}
                  title={structure.label}
                  indication={structure.indication}
                >
                  {componentGenerator(structure)}
                </FormStructure>
              );
            })}
          </Layout>
          <SumbmitButton />
        </FormHandlerProvider>
      </FieldAccessProvider>
    </LoadingProvider>
  );
};
