import styled from 'styled-components';
import { Logo } from '../../../components/reusable-ui/Logo';
import { theme } from "../../../assets/styles/theme/theme-design";

export const LeftSide = () => {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <LeftSideStyled>
            <button onClick={refreshPage} className='logo'>
                <Logo/>
            </button>
        </LeftSideStyled>
    )
}

const LeftSideStyled = styled.div`
   .logo {
        border: none;
        background: none;

        & > div {
            cursor: pointer;
        }

        p {
            font-size: ${theme.fonts.P4};
        }

        img {
            max-width: 80px;
            margin: 0 5px;
        }
    }
`;