import { TextInput } from "../../../../../reusable-ui/TextInput/TextInput.tsx";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { MdOutlineEuro } from "react-icons/md";
import { useContext, useState } from "react";
import { PrimaryButton } from "../../../../../reusable-ui/PrimaryButton/PrimaryButton.tsx";
import styled from "styled-components";
import { theme } from "../../../../../../assets/styles/theme/theme-design";
import OrderContext from "../../../../../../contexts/OrderContext";

export const AddProduct = () => {
  const [
    isAddedProductNotificationVisible,
    setAddedProductNotificationVisible,
  ] = useState(false);
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { products, setProducts } = orderContext;
  interface AddProductFormInput {
    id: string;
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
  }

  const addProductFormInputs: AddProductFormInput[] = [
    {
      id: "name",
      type: "text",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      id: "linkImage",
      type: "url",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill />,
    },
    {
      id: "price",
      type: "number",
      placeholder: "Prix",
      Icon: <MdOutlineEuro />,
      lang: "fr_FR",
      step: "0.01",
    },
  ];

  const initialValueInputs: InitialValueInputs = {
    name: "",
    linkImage: "",
    price: 0,
  };

  const [valueInputs, setValueInputs] =
    useState<InitialValueInputs>(initialValueInputs);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    const { value } = e.target;

    setValueInputs({ ...valueInputs, [id]: value });
  };

  const successAddedProductNotification = () => {
    setAddedProductNotificationVisible(true);

    setTimeout(() => {
      setAddedProductNotificationVisible(false);
    }, 2000);
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      imageSource: valueInputs.linkImage,
      title: valueInputs.name,
      price: valueInputs.price,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    };

    setProducts([...products, newProduct]);
    setValueInputs(initialValueInputs);

    successAddedProductNotification();
  };

  return (
    <AddProductStyled>
      <div className="img-container">
        <span className="img-frame">
          {valueInputs.linkImage ? (
            <img src={valueInputs.linkImage} alt="" title="" />
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
            value={valueInputs[input.id]}
            onChange={(e) => handleInputChange(e, input.id)}
            placeholder={input.placeholder}
            Icon={input.Icon}
            className="add-product-inputs"
            step={input.step}
            lang={input.lang}
            required
          />
        ))}
        <div className="submit-container">
          <PrimaryButton
            type="submit"
            label="Ajouter un nouveau produit au menu"
            Icon=""
            className="add-product-button"
            onClick={addProduct}
          />
          {isAddedProductNotificationVisible && (
            <span className="success-added-product-notification">
              <FiCheck /> Ajouté avec succès !
            </span>
          )}
        </div>
      </div>
    </AddProductStyled>
  );
};

const AddProductStyled = styled.div`
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
    width: fit-content;
  }

  .add-product-button {
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
