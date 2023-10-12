import logo from '../../assets/medias/images/logo.png';
import styled from 'styled-components';
import { theme } from '../../assets/styles/theme/theme-design';

interface LogoProps {
  className: string;
  onClick?: () => void; 
}

export const Logo: React.FC<LogoProps> = ({className, onClick}) => {
  return (
    <LogoStyled className={className} onClick={onClick}>
        <p>Crazee</p>
        <img src={logo} alt="Crazee burger avec un burger entre crazee et burger" />
        <p>Burger</p>
    </LogoStyled>
  )
}
const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;

    p {
        font-family: Amatic;
        color: ${theme.colors.logo};
        margin: 0;
    }
`;

