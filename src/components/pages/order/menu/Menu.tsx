import { CardBurger } from "./CardBurger"
import styled from 'styled-components';
import {fakeMenu} from '../../../../assets/datas/menu';

export const Menu: React.FC = () => {
  return (
    <MenuStyled>
      {fakeMenu.map((burger) => (
        <CardBurger key={burger.id} burger={burger}/>
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  grid-row-gap: 85px;
  grid-column-gap: 60px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 60px 0;
  overflow-y: scroll;
`;