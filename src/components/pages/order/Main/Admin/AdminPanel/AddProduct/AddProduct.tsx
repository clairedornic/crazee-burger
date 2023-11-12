import { FormEvent, useContext, useState } from "react";
import { TextInput } from "../../../../../../reusable-ui/TextInput/TextInput.tsx";
import { Button } from "../../../../../../reusable-ui/Button/Button.tsx";
import styled from "styled-components";
import OrderContext from "../../../../../../../contexts/OrderContext.ts";
import { EMPTY_PRODUCT } from "./empty_product.ts";
import { ImagePreview } from "../ImagePreview.tsx";
import { SubmitMessage } from "../SubmitMessage.tsx";
import { getAddProductFormInputs } from "./inputsTextConfig.tsx";

export const AddProduct = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { addProduct, newProduct, setNewProduct } = orderContext;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    addProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  const inputsTexts = getAddProductFormInputs(newProduct);

  return (
    <AddProductStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        source={newProductToAdd.imageSource}
        title={newProductToAdd.title}
      />
      <div className="infos-container">
        {inputsTexts.map((input) => (
          <TextInput
            {...input}
            onChange={(e) => handleInputChange(e)}
            key={input.id}
            $version="minimalist"
          />
        ))}
        <div className="submit-container">
          <Button
            type="submit"
            label="Ajouter un nouveau produit au menu"
            Icon=""
            $version="green"
          />
          {isSubmitted && <SubmitMessage />}
        </div>
      </div>
    </AddProductStyled>
  );
};

const AddProductStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  .infos-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  .submit-container {
    display: flex;
    width: fit-content;
    gap: 15px;
  }
`;
