export function formBrowser(id) {
  let forms = require("../data/forms.json").forms;
  return forms.find((form) => "" + form.id === "" + id);
}
