import { createContext, useContext } from "react";

export const UIContext = createContext();

export const useUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  <UIContext.Provider value={""}>{children}</UIContext.Provider>;
};
