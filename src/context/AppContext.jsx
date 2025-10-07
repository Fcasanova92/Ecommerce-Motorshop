import React, { createContext, useState, useContext } from "react";

// 1️⃣ Creamos el contexto
const AppContext = createContext(null);

// 2️⃣ Provider que envuelve toda la app
export const AppProvider = ({ children }) => {
  const [productInCart, setProductInCart] = useState([]);
  const agregarProducto = (data) => setProductInCart(prev => [...prev, data])

  return (
    <AppContext.Provider value={{ productInCart, setProductInCart, agregarProducto }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Hook para consumir el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);
