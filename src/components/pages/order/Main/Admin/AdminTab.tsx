interface AdminTabsProps {
    title?: string
    icon: React.ReactNode;
}

import { theme } from "../../../../../assets/styles/theme/theme-design";
import styled from "styled-components";

export const AdminTab: React.FC<AdminTabsProps> = ({title}) => {
  return (
    <AdminTabContentStyled>
        {title}
    </AdminTabContentStyled>
  )
}

const AdminTabContentStyled = styled.div`
    height: 100%;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    border: 1px solid #E4E5E9;
`;