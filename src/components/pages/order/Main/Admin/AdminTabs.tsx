import styled from "styled-components";
import { Tab } from "../../../../reusable-ui/Tab/Tab";
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { FiChevronUp } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';
import { theme } from "../../../../../assets/styles/theme/theme-design";

interface AdminTabsProps {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminTabs:React.FC<AdminTabsProps> = ({isCollapsed, setIsCollapsed}) => {

  return (
    <AdminTabsStyled>
        <Tab 
          title="" 
          Icon={isCollapsed ? <FiChevronDown/> : <FiChevronUp/>} 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={!isCollapsed ? "is-active" : ""}
        />
        <Tab 
          title="Ajouter un produit" 
          Icon={<AiOutlinePlus/>} 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={!isCollapsed ? "is-active" : ""}
        />
        <Tab 
          title="Modifier un produit" 
          Icon={<MdModeEditOutline/>} 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={!isCollapsed ? "is-active" : ""}
        />
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    position: relative;
    top: 1px;
    display: flex;
    align-items: center;
    padding-left: 5%;

    .is-active {
      background: ${theme.colors.darkGray};
    }
`;