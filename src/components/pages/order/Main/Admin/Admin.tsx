import { useContext } from "react";
import styled from "styled-components";
import { AdminPanel } from "./AdminPanel/AdminPanel";
import { AdminTabs } from "./AdminTabs";
import OrderContext from "../../../../../contexts/OrderContext";

export const Admin = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { isPanelAdminCollapsed, setIsPanelAdminCollapsed } = orderContext;
  return (
    <AdminStyled>
      <AdminTabs
        isCollapsed={isPanelAdminCollapsed}
        setIsCollapsed={setIsPanelAdminCollapsed}
      />
      {!isPanelAdminCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
