import styled from 'styled-components';
import { Logo } from '../../../components/reusable-ui/Logo';
import { theme } from "../../../assets/styles/theme/theme-design";

export const LeftSide = () => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <LeftSideStyled>
            <button onClick={refreshPage} className='logo-button'>
                <Logo className={"logo"}/>
            </button>
        </LeftSideStyled>
    )
}

const LeftSideStyled = styled.div`
   .logo-button {
        border: none;
        background: none;

        .logo {
            cursor: pointer;

            p {
                font-size: ${theme.fonts.P4};
            }

            img {
                max-width: 80px;
                margin: 0 5px;
            }
        }
    }
`;