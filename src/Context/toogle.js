import { useContext, createContext } from "react";

export const toggleContext = createContext({});
export const UseToggle = () => {
  return useContext(toggleContext);
};
