import styled from "styled-components";
import { AdminPanel } from "./AdminPanel";
import { theme } from "../../../../../assets/styles/theme/theme-design";


export const Admin = () => {
  return (
    <AdminStyled>
        <AdminPanel/>
    </AdminStyled>
  )
}

const AdminStyled = styled.div`
    position: absolute;
    bottom: 0;
    height: 250px;
    width: 100%;
    z-index: 1;
    border: 1px solid ${theme.colors.extraLightGray};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    box-sizing: border-box;
`;