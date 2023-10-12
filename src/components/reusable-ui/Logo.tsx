import logo from '../../assets/medias/images/logo.png';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme/theme-design';

export const Logo = () => {
  return (
    <LogoElement>
        <p>Crazee</p>
        <img src={logo} alt="Crazee burger avec un burger entre crazee et burger" />
        <p>Burger</p>
    </LogoElement>
  )
}
const LogoElement = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p {
        font-family: Amatic;
        font-size: 110px;
        color: ${theme.colors.logo};
        margin: 0;
    }

    img {
        max-width: 200px;
    }
`;

