import React from "react";
import { createContext } from "react";

interface OrderContextProps {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Array<Product>>>;
  addProduct: (newProduct: Product) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  products: [],
  setProducts: () => {},
  addProduct: () => {},
});

export default OrderContext;
