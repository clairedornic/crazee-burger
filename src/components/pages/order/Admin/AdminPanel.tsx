import styled from "styled-components";
import { AdminTabs } from "./AdminTabs";
import { AdminTab } from "./AdminTab";
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { FiChevronUp } from 'react-icons/fi';

export const AdminPanel = () => {
  return (
    <AdminPanelStyled>
        <div className="admin-container">
            <AdminTabs>
                <AdminTab title="" icon={<FiChevronUp/>}></AdminTab>
                <AdminTab title="Ajouter un produit" icon={<AiOutlinePlus/>}></AdminTab>
                <AdminTab title="Modifier un produit" icon={<MdModeEditOutline/>}></AdminTab>
            </AdminTabs>
        </div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
    position: absolute;
    bottom: 0;
    height: 250px;
    width: 100%;
    z-index: 1;

    .admin-container {
      height: 100%;
    }
`;