import { PrimaryButton } from "../../../../../reusable-ui/PrimaryButton/PrimaryButton.tsx";
import OrderContext from "../../../../../../contexts/OrderContext";
import { useContext } from "react";

export const EmptyMenu = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { isModeAdmin } = orderContext;

  const generateNewProducts = () => {};

  return (
    <div>
      {isModeAdmin ? (
        <div>
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
        <div>
          <p>Victime de notre succès ! :D</p>
          <p>De nouvelles recettes sont en cours de préparation.</p>
          <p>À très vite !</p>
        </div>
      )}
    </div>
  );
};
