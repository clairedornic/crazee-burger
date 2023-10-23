import styled from "styled-components";

export interface AdminTabTitleProps {
    tabKey: number;
    title: string;
    icon?: React.ReactNode;
    isActive: boolean;
    setSelectedTab : (value: number) => void;
}


export const AdminTabTitle: React.FC<AdminTabTitleProps> = ({tabKey, title, icon, isActive, setSelectedTab}) => {

    const handleChangeOfTab = () => {
        setSelectedTab(tabKey);
    }

    return (
        <AdminTabTitleStyled>
            <button 
                className={isActive ? 'active' : ''}
                onClick={handleChangeOfTab}
            >
                {icon} {title}
            </button>
        </AdminTabTitleStyled>
    )
}

const AdminTabTitleStyled = styled.li`

    button {
        background: green;
        &.active {
            background: red;
        }
    }

`;