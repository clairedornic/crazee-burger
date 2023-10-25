import React from "react";
import { createContext } from "react";

interface OrderContextProps {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  isEditSelected: boolean;
  setIsEditSelected: React.Dispatch<React.SetStateAction<boolean>>;
  isAddSelected: boolean;
  setIsAddSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderContext = createContext<OrderContextProps | undefined>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isEditSelected: false,
  setIsEditSelected: () => {},
  isAddSelected: false,
  setIsAddSelected: () => {},
});

export default OrderContext;
