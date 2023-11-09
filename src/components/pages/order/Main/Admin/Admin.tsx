import { useState } from "react";
import styled from "styled-components";
import { AdminPanel } from "./AdminPanel/AdminPanel";
import { AdminTabs } from "./AdminTabs";

export const Admin = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
