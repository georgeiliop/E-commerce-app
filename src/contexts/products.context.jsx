import { useState } from "react";
import { createContext } from "react";

import productsData from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {" "}
      {children}
    </ProductsContext.Provider>
  );
};
