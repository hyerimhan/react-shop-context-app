import { createContext, useMemo, useState } from "react";

export const OrderContext = createContext();

export function OrderContextProvider(props) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      // get option Map and make a copy
      const oldOrderMap = orderCounts[optionType];
      const newOrderMap = new Map(oldOrderMap);

      // update the copied Map
      newOrderMap.set(itemName, parseInt(newItemCount));

      // create new object with the old orderCounts plus new map
      const newOrderCounts = { ...orderCounts };
      newOrderCounts[optionType] = newOrderMap;

      // update state
      setOrderCounts(newOrderCounts);
    }
    return [{ ...orderCounts }, updateItemCount];
  }, [orderCounts]);

  return <OrderContext.Provider value={value} {...props} />;
}
