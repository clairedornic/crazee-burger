import { FormEvent, useContext, useState } from "react";
import { TextInput } from "../../../../../../reusable-ui/TextInput/TextInput.tsx";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import { PrimaryButton } from "../../../../../../reusable-ui/PrimaryButton/PrimaryButton.tsx";
import styled from "styled-components";
import { theme } from "../../../../../../../assets/styles/theme/theme-design.js";
import OrderContext from "../../../../../../../contexts/OrderContext.ts";

interface AddProductFormInput {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  Icon: React.ReactNode;
  lang?: string;
  step?: string;
}

interface InitialValueInputs {
  name: string;
  linkImage: string;
  price: number;
  [key: string]: string | number;
}

const EMPTY_PRODUCT: InitialValueInputs = {
  name: "",
  linkImage: "",
  price: 0,
};

export const AddProduct = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { addProduct } = orderContext;

  const addProductFormInputs: AddProductFormInput[] = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      id: 2,
      name: "linkImage",
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

  const [newProduct, setNewProduct] =
    useState<InitialValueInputs>(EMPTY_PRODUCT);

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
    imageSource: newProduct.linkImage,
    title: newProduct.name,
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
      <div className="img-container">
        <span className="img-frame">
          {newProduct.imageSource ? (
            <img
              src={newProductToAdd.imageSource}
              alt={newProductToAdd.title}
            />
          ) : (
            <p>Aucune Image</p>
          )}
        </span>
      </div>
      <div className="infos-container">
        {addProductFormInputs.map((input, index) => (
          <TextInput
            key={index}
            type={input.type}
            name={input.name}
            value={String(newProduct[input.name])}
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
          <PrimaryButton
            type="submit"
            label="Ajouter un nouveau produit au menu"
            Icon=""
            className="add-product-button"
          />
          {isSubmitted && (
            <span className="success-added-product-notification">
              <span className="icon-container">
                <FiCheck />
              </span>{" "}
              Ajouté avec succès !
            </span>
          )}
        </div>
      </div>
    </AddProductStyled>
  );
};

const AddProductStyled = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;

  .img-container {
    align-self: flex-start;

    .img-frame {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.extraLightGray};
      width: 215px;
      height: 120px;
      border-radius: ${theme.borderRadius.round};

      p {
        font-size: 16px;
        color: ${theme.colors.mediumGray};
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

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

  .add-product-button {
    height: fit-content;
    background: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    padding: 10px 30px;
    z-index: 2;

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.green};

      &:focus {
        color: ${theme.colors.green};
      }
    }

    &:focus {
      color: ${theme.colors.white};
    }
  }
`;
