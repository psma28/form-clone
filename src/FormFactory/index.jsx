import { useParams } from "react-router-dom";
import { formBrowser } from "../utils/formBrowser";
import { useForm } from "../hooks/useForm";
import { LoadingProvider } from "../context/LoadingContext";
import { FieldAccessProvider } from "../context/FieldAccessContext";
import { Layout } from "../Layout";
import { FormHelpText } from "../components/FormHelpText";
import { RUTField } from "../components/RUTField";
import { CheckBoxField } from "../components/CheckBoxField";
import { TextField } from "../components/TextField";
import { FormStructure } from "../components/FormStructure";
import { completionValidator } from "../services/validators/completionValidator";
import { emailValidator } from "../services/validators/emailValidator";
import { letterCharValidator } from "../services/validators/letterCharValidator";
import { numericCharValidator } from "../services/validators/numericCharValidator";
import { FormRow } from "../components/FormRow";

export const FormFactory = () => {
  const { handleForm, sendForm } = useForm();
  const { formId } = useParams();
  const form = formBrowser(formId);

  if (form === null || form === undefined) {
    return <div>Formulario no encontrado</div>;
  }

  const componentGenerator = (components) => {
    return components.content.map((element) => {
      console.log("Elemento a component generator: ", element);

      const componentName = element.component;
      switch (componentName) {
        case "checkbox":
          console.log("Detectado checkbox: ", element);
          return (
            <CheckBoxField
              id={element.id}
              key={element.id}
              label={element.label}
              items={element.items}
              formHandler={handleForm}
            />
          );
        case "text":
          return (
            <TextField
              id={element.id}
              key={element.id}
              label={element.label}
              info={element.info}
              validators={validatorMapper(element.validators)}
              formHandler={handleForm}
            />
          );
        case "form-row":
          return <FormRow>{componentGenerator(element)}</FormRow>;
        default:
          return <></>;
      }
    });
  };

  const validatorMapper = (validators) => {
    console.log("Validadores a mapear", validators);
    if (validators === undefined || validators === null){
        return [];
    }
    const mappedValidators = validators.map((validator) => {
      switch (validator) {
        case "letter":
          return letterCharValidator;
        case "completion":
          return completionValidator;
        case "number":
          return numericCharValidator;
        case "email":
          return emailValidator;
        default:
          break;
      }
    });
    console.log("mapped validator: ", mappedValidators);
    return mappedValidators;
  };

  return (
    <LoadingProvider>
      <FieldAccessProvider>
        <Layout title={form.title}>
          <FormHelpText text={form["form-intro"]} />
          <RUTField />
          {form["form-groups"].map((structure) => {
            return (
              <FormStructure title={structure.label}>
                {componentGenerator(structure)}
              </FormStructure>
            );
          })}
        </Layout>
      </FieldAccessProvider>
    </LoadingProvider>
  );
};
