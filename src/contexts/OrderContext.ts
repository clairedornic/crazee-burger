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
  updateProduct: (productId: string) => void;
  generateNewProducts: () => void;
  newProduct: Product;
  setNewProduct: React.Dispatch<React.SetStateAction<Product>>;
  isPanelAdminCollapsed: boolean;
  setIsPanelAdminCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  productSelected: string;
  setProductSelected: React.Dispatch<React.SetStateAction<string>>;
}

const OrderContext = createContext<OrderContextProps | undefined>({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  updateProduct: () => {},
  generateNewProducts: () => {},
  newProduct: EMPTY_PRODUCT,
  setNewProduct: () => {},
  isPanelAdminCollapsed: false,
  setIsPanelAdminCollapsed: () => {},
  productSelected: "",
  setProductSelected: () => {},
});

export default OrderContext;
