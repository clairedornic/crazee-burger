import { PrimaryButton } from "../../../../../reusable-ui/PrimaryButton/PrimaryButton.tsx";
import OrderContext from "../../../../../../contexts/OrderContext";
import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../../assets/styles/theme/theme-design";

export const EmptyMenu = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { isModeAdmin, generateNewProducts } = orderContext;

  return (
    <EmptyMenuStyled>
      {isModeAdmin ? (
        <div className="admin">
          <p>Le menu est vide ?</p>
          <p>Cliquez ci-dessous pour le réinitialiser</p>
          <PrimaryButton
            type="button"
            label="Générer de nouveaux produits"
            Icon=""
            className=""
            onClick={generateNewProducts}
          />
        </div>
      ) : (
        <div className="public">
          <p>Victime de notre succès ! :D</p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite !</p>
        </div>
      )}
    </EmptyMenuStyled>
  );
};

const EmptyMenuStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Amatic";
  text-align: center;
  font-size: 36px;
  height: 100%;
  margin: 0 auto;
  padding: 0 60px;
  overflow-y: scroll;

  p {
    margin: 0;
    color: ${theme.colors.gray};
  }

  p:first-of-type {
    font-weight: 700;
  }

  .admin {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .public {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button {
    margin-top: 10px;
  }
`;
