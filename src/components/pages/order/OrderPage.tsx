import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { Navbar } from "./Navbar/Navbar";
import { Main } from './Main/Main';

export const OrderPage = () => {

    return (
        <OrderPageStyled>
            <div className="container">
                <Navbar/>
                <Main/>
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
`;
