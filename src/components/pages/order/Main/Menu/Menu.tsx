import { useState } from "react";
import { Card } from "../../../../reusable-ui/Card/Card.tsx";
import styled from 'styled-components';
import { fakeMenu } from '../../../../../assets/datas/menu.ts';
import { formatPrice } from "../../../../../utils/maths.ts";

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
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr) );
  grid-row-gap: 85px;
  grid-column-gap: 60px;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 60px;
  overflow-y: scroll;
`;