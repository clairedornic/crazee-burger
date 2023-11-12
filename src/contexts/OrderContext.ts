import React from "react";
import { createContext } from "react";
import { EMPTY_PRODUCT } from "../components/pages/order/Main/Admin/AdminPanel/AddProduct/empty_product";

interface OrderContextProps {
  isModeAdmin: boolean;
  setIsModeAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  currentTabSelected: string;
  setCurrentTabSelected: React.Dispatch<React.SetStateAction<string>>;
  products: Array<Product>;
  addProduct: (newProduct: Product) => void;
  removeProduct: (productId: string) => void;
  generateNewProducts: () => void;
  newProduct: Product;
  setNewProduct: React.Dispatch<React.SetStateAction<Product>>;
}

const OrderContext = createContext<OrderContextProps | undefined>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  generateNewProducts: () => {},
  newProduct: EMPTY_PRODUCT,
  setNewProduct: () => {},
});

export default OrderContext;
