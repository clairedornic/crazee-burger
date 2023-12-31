import { useContext } from "react";
import styled from "styled-components";
import { Tab } from "../../../../reusable-ui/Tab/Tab";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { theme } from "../../../../../assets/styles/theme/theme-design";
import OrderContext from "../../../../../contexts/OrderContext";
import { tabsConfig } from "./tabsconfig";
interface AdminTabsProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminTabs: React.FC<AdminTabsProps> = ({
  isCollapsed,
  setIsCollapsed,
}) => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { currentTabSelected, setCurrentTabSelected } = orderContext;

  const tabs = tabsConfig;

  const selectTab = (tabSelected: string) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  return (
    <AdminTabsStyled>
      <Tab
        key="panelUpDown"
        label=""
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.index}
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={currentTabSelected === tab.index ? "is-active" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
};

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
