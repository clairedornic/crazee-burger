import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

interface TabsConfig {
  index: string;
  label: string;
  className: string;
  Icon: React.ReactNode;
}

export const getTabsConfig = (currentTabSelected: string): TabsConfig[] => [
  // {
  //   index: "panelUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: !isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    className: currentTabSelected === "add" ? "is-active" : "",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    className: currentTabSelected === "edit" ? "is-active" : "",
    Icon: <MdModeEditOutline />,
  },
];
