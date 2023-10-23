interface AdminTabsProps {
    title?: string
    icon: React.ReactNode;
}

import { theme } from "../../../../assets/styles/theme/theme-design";
import styled from "styled-components";

export const AdminTab: React.FC<AdminTabsProps> = ({title}) => {
  return (
    <AdminTabContentStyled>
        {title}
    </AdminTabContentStyled>
  )
}

const AdminTabContentStyled = styled.div`
    background: ${theme.colors.white};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
    border: 1px solid #E4E5E9;
`;