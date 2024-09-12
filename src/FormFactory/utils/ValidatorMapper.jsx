import { completionValidator } from "../../services/validators/completionValidator";
import { emailValidator } from "../../services/validators/emailValidator";
import { letterCharValidator } from "../../services/validators/letterCharValidator";
import { numericCharValidator } from "../../services/validators/numericCharValidator";

export const validatorMapper = (validators) => {
  if (validators === undefined || validators === null) {
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
        return <></>;
    }
  });
  return mappedValidators;
};
