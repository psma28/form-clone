export const checkboxBlueprint = {
    type: "checkbox",
    id: "cargo-postulación",
    label: "Cargo(s) a postular",
    items: [
        {
            label: "Examinador",
            value: "examinador"
        },
        {
            label: "Apoyo técnico",
            value: "apoyo-tecnico"
        },
        {
            label: "Supervisor",
            value: "supervisor"
        },
    ]
};

export const comboboxBlueprint = {
    type: "combobox",
    id: "estado-civil",
    label: "Estado Civil",
    placeholder: "estado civil",
    items: [
        {
            label: "Examinador",
            value: "examinador"
        },
        {
            label: "Apoyo técnico",
            value: "apoyo-tecnico"
        },
        {
            label: "Supervisor",
            value: "supervisor"
        },
    ]
};

export const textFieldBlueprint = {
    type: "textfield",
    id: "nombres",
    label: "Nombres",
    validators: ["letter", "completion"]
};

export const telephoneFieldBlueprint = {
    type: "textfield",
    id: "telefono",
    label: "Telefono",
    datatype: "tel",
    validators: ["number", "completion"]
};

export const dateFieldBlueprint = {
    type: "textfield",
    id: "fecha-nacimiento",
    label: "Fecha de Nacimiento",
    datatype: "date",
    validators: ["completion"]
};

export const emailBlueprint = {
    type: "textfield",
    id: "email",
    label: "Correo Electrónico",
    validators: ["email", "completion"]
};

export const fieldRow = [
    {
        ...emailBlueprint
    },
    {
        ...dateFieldBlueprint
    }
]