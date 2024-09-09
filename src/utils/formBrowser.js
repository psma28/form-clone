
export function formBrowser(id){
    let forms = require('../data/forms.json').forms
    let index = 0;
    while(index < forms.length) {
        const form = forms[index];        
        if (form.id === +id) {
            return form;
        }
        index ++;
    }
    return null;
}