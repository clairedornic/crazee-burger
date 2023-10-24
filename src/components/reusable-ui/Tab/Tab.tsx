import { theme } from "../../../assets/styles/theme/theme-design";
import styled from "styled-components";

interface TabProps {
  title?: string
  icon: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({title, icon}) => {
  return (
    <TabContentStyled>
       {/* <button 
          className={isActive ? 'active' : ''}
          onClick={handleChangeOfTab}
        >
          {icon} {title}
        </button> */}
          {icon} {title}
    </TabContentStyled>
  )
}

const TabContentStyled = styled.button`
  height: 43px;
`;