import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export const Navbar = () => {

  return (
    <NavbarStyled>
        <LeftSide/>
        <RightSide/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 70px 20px 20px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
`;