import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { AddProduct } from "./AdminPanel/AddProduct/AddProduct";
import { UpdateProduct } from "./AdminPanel/UpdateProduct/UpdateProduct";

export const tabsConfig = [
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    content: <AddProduct />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    content: <UpdateProduct />,
  },
];

export const getTabSelected = (
  tabs: TabsConfig[],
  currentTabSelected: string,
) => {
  return tabs.find((tab) => tab.index === currentTabSelected);
};
