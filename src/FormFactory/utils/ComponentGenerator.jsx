import { CheckBoxField } from "../../components/CheckBoxField";
import { ComboBoxField } from "../../components/ComboBoxField";
import { FormRow } from "../../components/FormRow";
import { TextField } from "../../components/TextField";
import { validatorMapper } from "./ValidatorMapper";
import { DocumentManager } from "../../components/DocumentManager";
import { DocumentRow } from "../../components/DocumentRow";
import { BlankComponent } from "../../components/BlankComponent";

export const componentGenerator = (components, formHandler) => {
  const componentContent = components.content;
  return componentContent.map((element) => {
    const componentName = element.component;
    switch (componentName) {
      case "checkbox":
        return (
          <CheckBoxField
            id={element.id}
            key={element.id}
            label={element.label}
            items={element.items}
            formHandler={formHandler}
          />
        );
      case "text":
        return (
          <TextField
            id={element.id}
            key={element.id}
            label={element.label}
            info={element.info}
            props={{ type: element.type }}
            validators={validatorMapper(element.validators)}
            formHandler={formHandler}
          />
        );
      case "combobox":
        return (
          <ComboBoxField
            id={element.id}
            key={element.id}
            items={element.items}
            label={element.label}
            placeholder={element.placeholder}
            formHandler={formHandler}
          />
        );
      case "form-row":
        return <FormRow key={Math.random()}>{componentGenerator(element, formHandler)}</FormRow>;
      case "document-manager":
        return <DocumentManager key={Math.random()}>{componentGenerator(element, formHandler)}</DocumentManager>;
      case "document-row":
        return (
          <DocumentRow
            id={element.id}
            key={element.id}
            label={element.label}
            info={element.info}
            formHandler={formHandler}
          />
        );
      default:
        return <BlankComponent/>;
    }
  });
};
