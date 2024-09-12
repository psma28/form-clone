import { useContext } from "react";
import { functionExecutor } from "../../utils/APIFunctionLibrary";
import { comboboxResponseMapper } from "../../utils/ComboboxResponseMapper";
import { NestedCombobox } from "./components/NestedCombobox";
import { useComboboxEventQueue } from "./hooks/useComboboxEventQueue";
import { useNestedSchema } from "./hooks/useNestedSchema";
import { LoadingContext } from "../../context/LoadingContext";

export const NestedComboBoxGenerator = ({ data }) => {
  const { pushEvents, collapseEvents } = useComboboxEventQueue();
  const { getNestSchema, getCombobox, updateBoxContent } =
    useNestedSchema(data);
  const { setLoading } = useContext(LoadingContext);
  /**
   * This function manages the status of the event queue, meaning that
   * with an incoming event from certain actor (combobox id or item id)
   * the queue should update (collapse events, rollback every triggered event
   * , add incoming event(s) and execute every action that includes the
   * combobox items adding). The selecion value is the parameter introduced
   * to the event functions as parameter.
   * @param {String} actor
   * @param {String} selectionValue
   * @param {Array} incomingEvents
   */
  const manageEventQueue = (actorId, selectionValue, incomingEvents) => {
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
      if (Array.isArray(event.payload))
        updateBoxContent(targetId, event.payload);

      if (typeof event.payload === "string") {
        setLoading(true);
        functionExecutor(event.payload, selectionValue)
          .then((res) => {
            updateBoxContent(targetId, comboboxResponseMapper(res));
          })
          .then(() => setLoading(false));
      }
    });
    pushEvents(actorId, incomingEvents);
  };
  const nestedComponents = getNestSchema().map((combobox) => {
    return (
      <NestedCombobox
        id={combobox.id}
        key={combobox.id}
        label={combobox.label}
        comboboxSchema={combobox}
        eventTrigger={manageEventQueue}
        placeholder={combobox.placeholder}
        events={combobox.events}
      />
    );
  });

  return nestedComponents;
};
