import styled from "styled-components";
import { theme } from "../../../../assets/styles/theme/theme-design";
import { Menu } from "./Menu/Menu.tsx";
import { Basket } from "./Basket/Basket";
import { Admin } from "./Admin/Admin.tsx";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext";

export const Main = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { isModeAdmin } = orderContext;

  return (
    <MainStyled className="main">
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        {isModeAdmin && <Admin />}
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr;
  height: calc(100% - 98px);
  background-color: ${theme.colors.lightGray};
  border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.strong};

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
  }
`;
