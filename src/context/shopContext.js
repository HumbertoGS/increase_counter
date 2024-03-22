import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <ShopContext.Provider
      value={{
        counter,
        increment: () => setCounter((current) => current + 1),
        reset: () => setCounter(0),
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
