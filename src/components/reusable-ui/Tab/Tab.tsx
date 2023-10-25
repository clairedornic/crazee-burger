import { theme } from "../../../assets/styles/theme/theme-design";
import styled from "styled-components";

interface TabProps {
  title?: string
  icon: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({title, icon}) => {
  return (
    <TabContentStyled>
          {icon} { title && <span>{title}</span> }
    </TabContentStyled>
  )
}

const TabContentStyled = styled.button`
    display: flex;
    align-items: center;
    height: 43px;
    padding: 0px 22px;
    border-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid ${theme.colors.extraLightGray};
    border-bottom: 2px solid ${theme.colors.extraLightGray};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.mediumGray};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-bottom: 2px solid ${theme.colors.white};
      transition: all 0.2s ease-in-out;

      span {
        text-decoration: underline;
        text-underline-offset: 4px;
        text-decoration-thickness: 2px;
        transition: all 0.2s ease-in-out;
      }
    }
    span {
      padding-left: 18px;
      transition: all 0.2s ease-in-out;
    }
`;