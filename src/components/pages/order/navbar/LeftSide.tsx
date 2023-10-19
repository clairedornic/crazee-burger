import styled from 'styled-components';
import { Logo } from '../../../reusable-ui/Logo/Logo';
import { theme } from "../../../../assets/styles/theme/theme-design";
import { refreshPage } from '../../../../utils/window';

export const LeftSide = () => {

    return (
        <LeftSideStyled>
            <Logo className={"logo"} onClick={ () => refreshPage()}/>
        </LeftSideStyled>
    )
}

const LeftSideStyled = styled.div`
    .logo {
        cursor: pointer;

        p {
            font-size: ${theme.fonts.size.P4};
        }

        img {
            max-width: 80px;
            margin: 0 5px;
        }
    }
`;