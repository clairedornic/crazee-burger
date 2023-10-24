import { theme } from "../../../../../assets/styles/theme/theme-design";
import styled from "styled-components";


export const AdminPanel = () => {
  return (
    <AdminPanelStyled>
        ADMIN PANEL
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    height: 250px;
    z-index: 1;
    border: 1px solid ${theme.colors.extraLightGray};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
`;