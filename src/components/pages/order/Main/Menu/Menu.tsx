import { useContext } from "react";
import { Card } from "../../../../reusable-ui/Card/Card.tsx";
import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths.ts";
import OrderContext from "../../../../../contexts/OrderContext";
import { EmptyMenu } from "./EmptyMenu.tsx";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export const Menu = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { products, isModeAdmin, removeProduct, updateProduct } = orderContext;

  if (products.length === 0) {
    return <EmptyMenu />;
  }

  const handleUpdateProduct = (productId: string) => {
    if (isModeAdmin) {
      updateProduct(productId);
    }
  };

  return (
    <MenuStyled>
      {products.map(({ id, title, price, imageSource }) => (
        <Card
          key={id}
          title={title}
          leftDescription={formatPrice(price)}
          imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
          onDelete={() => removeProduct(id)}
          hasDeleteButton={isModeAdmin}
          isHoverable={isModeAdmin}
          onClick={() => handleUpdateProduct(id)}
        />
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-row-gap: 85px;
  grid-column-gap: 60px;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
  padding: 60px;
  overflow-y: scroll;
`;
