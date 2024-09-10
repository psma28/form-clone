import { useState } from "react";
import { NestedCombobox } from "./components/NestedCombobox";
import { useComboboxEventQueue } from "./hooks/useComboboxEventQueue";
import { numberSeeder } from "./services/numberSeeder";
import { useNestedSchema } from "./hooks/useNestedSchema";

export const data = [
  {
    id: "combobox1",
    placeholder: "combobox1",
    label: "letras",
    items: [
      {
        id: "a1",
        label: "A",
        value: "a",
        events: [
          {
            target: "combobox2",
            payload: [{
              id: "triangulito",
              label: "Triangulo",
              value: "Y",
              events: []
            }],
          },
        ],
      },
      {
        id: "b1",
        label: "B",
        value: "b",
        events: [
          {
            target: "combobox3",
            payload: [{
              id: "cuadradito",
              label: "Cuadrado",
              value: "O",
              events: [{
                target: "combobox4",
                payload: [
                  {
                    id: "loquesea",
                    label: "Lo que sea",
                    value: "12341234",
                    events: []
                  }
                ]
              
              }]
            }],
          },
        ],
      },
    ],
  },
  {
    id: "combobox2",
    label: "simbolos",
    placeholder: "simbolo",
    items: [],
  },
  {
    id: "combobox3",
    label: "numeros",
    placeholder: "numero",
    items: [],
  },
  {
    id: "combobox4",
    label: "loquesea",
    placeholder: "lo que sea",
    items: [],
  },
];

export const NestedComboBoxGenerator = () => {
  const { getEventQueue, pushEvents, collapseEvents } = useComboboxEventQueue();
  const { getNestSchema, updateBoxContent, getCombobox } =
    useNestedSchema(data);

  /**
   * This function manages the status of the event queue, meaning that
   * with an incoming event from certain actor (combobox id or item id)
   * the queue should update (collapse events, rollback every triggered event
   * , add incoming event(s) and execute every action that includes the 
   * combobox items adding).
   * @param {String} actor 
   * @param {Array} incomingEvents 
   */  
  const manageEventQueue = (actorId, incomingEvents)=>{
    console.log("Actor to manage:" , actorId) 
    console.log( "Events to manage", incomingEvents);

    const rollbackEventClusters = collapseEvents(actorId).reverse();
    console.log("events to rollback", rollbackEventClusters.length);
    rollbackEventClusters.forEach((eventCluster)=>{
      eventCluster.events.forEach((event)=>{
        const targetId = event.target
        const targetCombobox = getCombobox(targetId)
        targetCombobox.items = []
      })
    })

    incomingEvents.forEach((event)=>{
      const targetId = event.target
      const targetCombobox = getCombobox(targetId)
      targetCombobox.items = event.payload
    });
    pushEvents(actorId, incomingEvents)
    
  }

  function test() {
    const list = getCombobox("combobox1").items.push({
      id: Math.random(),
      label: "asfdasdas",
      value: "asdfasd",
    });
    updateBoxContent("combobox1", list);
  }
  return (
    <div>
      {data.map((combobox) => {
        return (
          <NestedCombobox
            id={combobox.id}
            key={combobox.id}
            label={combobox.label}
            comboboxSchema={combobox}
            eventTrigger = {manageEventQueue}
            placeholder={combobox.placeholder}
          />
        );
      })}

      <button onClick={() => test()}>test</button>
    </div>
  );
};
