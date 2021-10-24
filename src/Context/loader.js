import { createContext, useContext } from "react";

export const loaderContext = createContext({});

export const useLoader = () => {
  return useContext(loaderContext);
};
