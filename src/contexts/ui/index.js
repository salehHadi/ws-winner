import { createContext, useContext, useState } from "react";
import productData from "../../data/data.json";

export const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [allProductsData, setAllProductsData] = useState(productData);
  const [productCount, setProductCount] = useState(1);

  console.log(allProductsData, "all");

  const decreaseCount = () =>
    setProductCount((pre) => (pre >= 2 ? pre - 1 : pre));

  const addCount = () => setProductCount((pre) => pre + 1);

  const value = {
    addCount,
    decreaseCount,
    productCount,
    allProductsData,
    setAllProductsData,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
