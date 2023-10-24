import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { Navbar } from "./Navbar/Navbar";
import { Menu } from './Menu/Menu';
import { Basket } from './Basket/Basket';
import { AdminPanel } from './Admin/AdminPanel';

export const OrderPage = () => {

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar/>
                <div className="pannel">
                    <Basket/>
                    <Menu/>
                </div>
                <AdminPanel/>
            </div>
        </OrderPageStyled>
    )
}
const OrderPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.primary};
    padding: 24px 56px;
    height: calc(100vh - 48px);

    .container {
        position: relative;
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
        width: 100%;
    }

    .pannel {
        display: grid;
        grid-template-columns: 25% 1fr;
        height: calc(100% - 98px);
        background-color: ${theme.colors.lightgray};
        border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
        box-shadow: ${theme.shadows.strong};
    }
`;
