import { useContext } from "react";
import OrderContext from "../../../../../contexts/OrderContext";
import { theme } from "../../../../../assets/styles/theme/theme-design";
import styled from "styled-components";
import { tabsConfig, getTabSelected } from "./tabsconfig";

export const AdminPanel = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { currentTabSelected } = orderContext;

  const tabs = tabsConfig;

  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      <div>{tabSelected && tabSelected.content}</div>
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  height: 250px;
  z-index: 1;
  border: 1px solid ${theme.colors.extraLightGray};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;
