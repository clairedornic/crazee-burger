import { ReactElement, useState } from "react";
import styled from "styled-components";
import { AdminTabTitle, AdminTabTitleProps } from "./AdminTabTitle"
import { theme } from "../../../../assets/styles/theme/theme-design";

interface AdminTabsProps {
    children: ReactElement<AdminTabTitleProps>[];
}

export const AdminTabs: React.FC<AdminTabsProps> = ({children}) => {

    const [selectedTab, setSelectedTab] = useState<number>(1);

    const isTabActive = (idTab:number, selectedTab:number) => {
        return idTab === selectedTab;
    }

    return (
        <AdminTabsStyled>
            <ul>
                {children.map((item,index) => (
                    <AdminTabTitle tabKey={index} key={index} title={item.props.title} icon={item.props.icon} isActive={isTabActive(index, selectedTab)} setSelectedTab={setSelectedTab}/>
                ))}
            </ul>
            {children[selectedTab]}
        </AdminTabsStyled>
    )
}

const AdminTabsStyled = styled.div`
    height: 100%;

    ul {
        display: flex;
        list-style: none;
        margin: 0;
    }

    & > div {
        border: 1px solid #E4E5E9;
        background: ${theme.colors.white};
    }
`;