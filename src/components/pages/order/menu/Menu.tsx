import { useState } from "react";
import { Product } from "./Product"
import styled from 'styled-components';
import {fakeMenu} from '../../../../assets/datas/menu';

export const Menu: React.FC = () => {

  const [products, setProducts] = useState(fakeMenu);

  return (
    <MenuStyled>
      {products.map((product) => (
        <Product key={product.id} title={product.title} price={product.price} imageSource={product.imageSource} />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 240px);
  grid-row-gap: 85px;
  grid-column-gap: 60px;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  padding: 60px 0;
  overflow-y: scroll;
`;