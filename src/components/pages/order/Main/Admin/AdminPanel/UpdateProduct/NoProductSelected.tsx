import { theme } from "../../../../../../../assets/styles/theme/theme-design";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";

export const NoProductSelected = () => {
  return (
    <NoProductSelectedStyled>
      Cliquer sur un produit pour le modifier
      <HiCursorClick />
    </NoProductSelectedStyled>
  );
};

const NoProductSelectedStyled = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 40px;
  font-family: "Amatic";
  font-size: 24px;
  color: ${theme.colors.gray};
`;
