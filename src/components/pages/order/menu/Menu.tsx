import { useState } from "react";
import { Card } from "../../../reusable-ui/Card/Card.tsx";
import styled from 'styled-components';
import {fakeMenu} from '../../../../assets/datas/menu';
import { formatPrice } from "../../../../utils/maths";

export const Menu = () => {

  const [products] = useState(fakeMenu);

  return (
    <MenuStyled>
      {products.map((product) => (
        <Card key={product.id} title={product.title} leftDescription={formatPrice(product.price)} imageSource={product.imageSource} />
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