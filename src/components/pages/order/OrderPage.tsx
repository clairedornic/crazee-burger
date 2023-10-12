import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { Navbar } from "./Navbar";

export const OrderPage = () => {
    const location = useLocation();
    const userName = location.state?.userName;
    console.log(location);

    return (
        <OrderPageStyled>
            <Navbar userName={userName}/>
            <div className="pannel"></div>
        </OrderPageStyled>
    )
}
const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    padding: 24px 56px;
    height: calc(100vh - 48px);

    .pannel {
        display: flex;
        flex-direction: column;
        height: 100%;
        background-color: ${theme.colors.lightgray};
        border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    }
`;
