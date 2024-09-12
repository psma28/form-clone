import { CheckBoxField } from "../../components/CheckBoxField";
import { ComboBoxField } from "../../components/ComboBoxField";
import { FormRow } from "../../components/FormRow";
import { TextField } from "../../components/TextField";
import { validatorMapper } from "./ValidatorMapper";
import { DocumentManager } from "../../components/DocumentManager";
import { DocumentRow } from "../../components/DocumentRow";
import { BlankComponent } from "../../components/BlankComponent";
import { NestedComboBoxGenerator } from "../../components/NestedComboBox/NestedComboboxGenerator";

export const componentGenerator = (components) => {
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
          />
        );
      case "nested-combobox":
        return (
          <NestedComboBoxGenerator key={element.id} data={element.content} />
        );
      case "form-row":
        return (
          <FormRow key={crypto.randomUUID()}>
            {componentGenerator(element)}
          </FormRow>
        );
      case "document-manager":
        return (
          <DocumentManager key={Math.random()}>
            {componentGenerator(element)}
          </DocumentManager>
        );
      case "document-row":
        return (
          <DocumentRow
            id={element.id}
            key={element.id}
            label={element.label}
            info={element.info}
          />
        );
      default:
        return <BlankComponent />;
    }
  });
};
