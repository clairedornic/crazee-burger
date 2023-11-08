import React from "react";
import { createContext } from "react";

interface OrderContextProps {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;
  products: Array<Products>;
  setProducts: React.Dispatch<React.SetStateAction<Array<Products>>>;
}

const OrderContext = createContext<OrderContextProps | undefined>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  products: [],
  setProducts: () => {},
});

export default OrderContext;
