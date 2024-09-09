import { useState } from "react";

class NCEvent {
  #triggers;
  #changesVisibility;
  #data;
  constructor(triggers, changesVisibility, data) {
    this.triggers = triggers;
    this.changesVisibility = changesVisibility;
    this.data = data;
  }
}

class NestedOption {
  #label;
  #value;
  #events = [];
  constructor(label, value, events) {
    this.#label = label;
    this.#value = value;
    this.#events = events;
  }
}

export const data = [
  {
    id: "combobox1",
    label: "letras",
    visibility: true,
    items: [
      {
        label: "A",
        value: "a",
        events: [
          {
            triggers: "combobox2",
            changesVisibility: true,
            data: [{ label: 1 }, { label: 2 }],
          },
        ],
      },
      {
        label: "B",
        value: "b",
        events: [
          {
            triggers: "combobox3",
            changesVisibility: false,
          },
        ],
      },
    ],
  },
  {
    id: "combobox2",
    label: "numeros",
    visibility: false,
    items: [],
  },
  {
    id: "combobox3",
    label: "simbolos",
    visibility: true,
    items: [],
  },
];

export const NestedComboBox = ({
  id,
  label,
  visibility,
  items = [],
  events = [],
}) => {
  const [content, setContent] = useState({ items });
  
};

export const NestedComboBoxGenerator = () => {
  const json = data;
  const baseStage = json.map((combobox) => {
    const component = (
      <NestedComboBox
        id={combobox.id}
        key={combobox.id}
        label={combobox.label}
        visibility={true}
        items={[...combobox.items]}
        events={[...combobox.events]}
      />
    );
    return { id: combobox.id, component };
  });
};
