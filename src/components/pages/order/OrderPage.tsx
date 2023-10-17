import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { Navbar } from "./navbar/Navbar";
import { Menu } from './menu/Menu';

export const OrderPage = () => {

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar/>
                <div className="pannel">
                    <Menu/>
                </div>
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
        max-width: 1400px;
        height: 100%;
        margin: 0 auto;
        width: 100%;
    }

    .pannel {
        display: flex;
        flex-direction: column;
        height: calc(100% - 98px);
        background-color: ${theme.colors.lightgray};
        border-radius: 0 0 ${theme.borderRadius.round} ${theme.borderRadius.round};
        box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset ;
    }
`;
