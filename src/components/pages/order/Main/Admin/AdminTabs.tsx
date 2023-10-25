import styled from "styled-components";
import { Tab } from "../../../../reusable-ui/Tab/Tab";
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { FiChevronUp } from 'react-icons/fi';

export const AdminTabs = () => {
  return (
    <AdminTabsStyled>
        <Tab title="" icon={<FiChevronUp/>}></Tab>
        <Tab title="Ajouter un produit" icon={<AiOutlinePlus/>}></Tab>
        <Tab title="Modifier un produit" icon={<MdModeEditOutline/>}></Tab>
    </AdminTabsStyled>
  )
}

const AdminTabsStyled = styled.div`
    position: relative;
    top: 1px;
    display: flex;
    align-items: center;
    padding-left: 5%;
`;