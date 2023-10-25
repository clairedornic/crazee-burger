import { useContext } from "react";
import styled from "styled-components";
import { Tab } from "../../../../reusable-ui/Tab/Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { theme } from "../../../../../assets/styles/theme/theme-design";
import OrderContext from "../../../../../contexts/OrderContext";

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

  const { isEditSelected, setIsEditSelected, isAddSelected, setIsAddSelected } =
    orderContext;

  const selectTab = (tabSelected: string) => {
    setIsCollapsed(false);

    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsEditSelected(true);
      setIsAddSelected(false);
    }
  };

  return (
    <AdminTabsStyled>
      <Tab
        label=""
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={!isCollapsed ? "is-active" : ""}
      />
      <Tab
        label="Ajouter un produit"
        Icon={<AiOutlinePlus />}
        onClick={() => selectTab("add")}
        className={!isAddSelected ? "is-active" : ""}
      />
      <Tab
        label="Modifier un produit"
        Icon={<MdModeEditOutline />}
        onClick={() => selectTab("edit")}
        className={!isEditSelected ? "is-active" : ""}
      />
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
