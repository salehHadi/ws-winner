import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [productCount, setProductCount] = useState(1);

  const decreaseCount = () =>
    setProductCount((pre) => (pre >= 2 ? pre - 1 : pre));

  const addCount = () => setProductCount((pre) => pre + 1);

  const value = {
    addCount,
    decreaseCount,
    productCount,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
