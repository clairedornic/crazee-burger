import { FormEvent, useContext, useState } from "react";
import { TextInput } from "../../../../../../reusable-ui/TextInput/TextInput.tsx";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { Button } from "../../../../../../reusable-ui/Button/Button.tsx";
import styled from "styled-components";
import { theme } from "../../../../../../../assets/styles/theme/theme-design.js";
import OrderContext from "../../../../../../../contexts/OrderContext.ts";
import { EMPTY_PRODUCT } from "./empty_product.ts";
import { ImagePreview } from "../ImagePreview.tsx";
import { SubmitMessage } from "../SubmitMessage.tsx";

interface AddProductFormInput {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  Icon: React.ReactNode;
  lang?: string;
  step?: string;
}

export const AddProduct = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { addProduct, newProduct, setNewProduct } = orderContext;

  const addProductFormInputs: AddProductFormInput[] = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      id: 2,
      name: "imageSource",
      type: "url",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill />,
    },
    {
      id: 3,
      name: "price",
      type: "number",
      placeholder: "Prix",
      Icon: <MdOutlineEuro />,
      lang: "fr_FR",
      step: "0.01",
    },
  ];

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

  const newProductToAdd = {
    id: crypto.randomUUID(),
    imageSource: newProduct.imageSource,
    title: newProduct.title,
    price: newProduct.price,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addProduct(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccessMessage();
  };

  return (
    <AddProductStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview
        source={newProductToAdd.imageSource}
        title={newProductToAdd.title}
      />
      <div className="infos-container">
        {addProductFormInputs.map((input, index) => (
          <TextInput
            key={index}
            type={input.type}
            name={input.name}
            value={String(newProduct[input.name as keyof Product])}
            onChange={(e) => handleInputChange(e)}
            placeholder={input.placeholder}
            Icon={input.Icon}
            $version="minimalist"
            className="add-product-inputs"
            step={input.step}
            lang={input.lang}
          />
        ))}
        <div className="submit-container">
          <Button
            type="submit"
            label="Ajouter un nouveau produit au menu"
            Icon=""
            $version="green"
          />
          <SubmitMessage isSubmitted={isSubmitted} />
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

    .success-added-product-notification {
      display: flex;
      align-items: center;
      white-space: nowrap;
      gap: 5px;
      color: ${theme.colors.green};
      font-size: 15px;
      font-weight: 400;

      .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${theme.colors.green};
        border-radius: ${theme.borderRadius.extraRound};
        width: 19px;
        height: 19px;
      }
    }
  }
`;
