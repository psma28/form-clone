import { NestedCombobox } from "./components/NestedCombobox";
import { useComboboxEventQueue } from "./hooks/useComboboxEventQueue";
import { useNestedSchema } from "./hooks/useNestedSchema";

export const NestedComboBoxGenerator = ({ data }) => {
  const { pushEvents, collapseEvents } = useComboboxEventQueue();
  const { getCombobox } = useNestedSchema(data);

  /**
   * This function manages the status of the event queue, meaning that
   * with an incoming event from certain actor (combobox id or item id)
   * the queue should update (collapse events, rollback every triggered event
   * , add incoming event(s) and execute every action that includes the
   * combobox items adding).
   * @param {String} actor
   * @param {Array} incomingEvents
   */
  const manageEventQueue = (actorId, incomingEvents) => {
    if (incomingEvents.length === 0) return;
    const rollbackEventClusters = collapseEvents(actorId).reverse();
    rollbackEventClusters.forEach((eventCluster) => {
      eventCluster.events.forEach((event) => {
        const targetId = event.target;
        const targetCombobox = getCombobox(targetId);
        targetCombobox.items = [];
      });
    });

    incomingEvents.forEach((event) => {
      const targetId = event.target;
      const targetCombobox = getCombobox(targetId);
      console.log("Evento incoming", event);
      
      console.log("tipo de la carga", Array.isArray(event.payload));
      if( Array.isArray(event.payload)) targetCombobox.items = event.payload;
      
    });
    pushEvents(actorId, incomingEvents);
  };
  const nestedComponents = data.map((combobox) => {
    return (
      <NestedCombobox
        id={combobox.id}
        key={combobox.id}
        label={combobox.label}
        comboboxSchema={combobox}
        eventTrigger={manageEventQueue}
        placeholder={combobox.placeholder}
      />
    );
  });

  return nestedComponents;
};
