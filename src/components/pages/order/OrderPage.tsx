import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../assets/styles/theme/theme-design";
import { Navbar } from "./Navbar/Navbar";
import { Main } from "./Main/Main";
import { fakeMenu } from "../../../assets/datas/menu";
import OrderContext from "../../../contexts/OrderContext";
import { EMPTY_PRODUCT } from "./Main/Admin/AdminPanel/AddProduct/empty_product";

export const OrderPage = () => {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [products, setProducts] = useState(fakeMenu);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const addProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
  };

  const removeProduct = (productId: string) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const generateNewProducts = () => {
    setProducts(fakeMenu);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    currentTabSelected,
    setCurrentTabSelected,
    products,
    addProduct,
    removeProduct,
    generateNewProducts,
    newProduct,
    setNewProduct,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
};
const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  padding: 24px 56px;
  height: calc(100vh - 48px);

  .container {
    position: relative;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    width: 100%;
  }
`;
