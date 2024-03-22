import { createContext, useState, useCallback } from "react";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(
    () => setCounter((prevCounter) => prevCounter + 1),
    []
  );

  return (
    <ShopContext.Provider
      value={{
        counter,
        increment,
        reset: () => setCounter(0),
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
