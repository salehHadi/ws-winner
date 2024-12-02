import { createContext, useContext, useState } from "react";
import productData from "../../data/data.json";

export const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [allProductsData, setAllProductsData] = useState(productData);
  const [cartProducts, setCartProducts] = useState([]);

  const decreaseCount = (id) => {
    setAllProductsData((pre) => {
      return pre.map((el) =>
        el.id === id ? { ...el, count: el.count >= 2 ? el.count - 1 : 1 } : el
      );
    });
  };

  const addCount = (id) =>
    setAllProductsData((pre) => {
      return pre.map((el) =>
        el.id === id ? { ...el, count: el.count >= 99 ? 99 : el.count + 1 } : el
      );
    });

  const addToCart = (product) => {
    const checkProduct = cartProducts.find((e) => e.id === product.id);

    !checkProduct && setCartProducts((pre) => [...pre, product]);
  };

  const value = {
    addCount,
    decreaseCount,
    allProductsData,
    setAllProductsData,
    setCartProducts,
    cartProducts,
    addToCart,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
