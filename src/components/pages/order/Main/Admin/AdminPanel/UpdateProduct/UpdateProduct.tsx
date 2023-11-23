import { useContext, useState } from "react";
import { NoProductSelected } from "./NoProductSelected";
import OrderContext from "../../../../../../../contexts/OrderContext";
import styled from "styled-components";
import { ImagePreview } from "../ImagePreview.tsx";
import { TextInput } from "../../../../../../reusable-ui/TextInput/TextInput.tsx";
import { getAddProductFormInputs } from "../AddProduct/inputsTextConfig.tsx";
import { BsCloudCheck } from "react-icons/bs";
import { EMPTY_PRODUCT } from "../AddProduct/empty_product.ts";

export const UpdateProduct = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { productSelected, newProduct, getProductByID } = orderContext;

  const inputsTexts = getAddProductFormInputs(newProduct);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // setNewProduct({ ...newProduct, [name]: value });
  };

  if (productSelected === "") {
    return <NoProductSelected />;
  }

  const updatedProduct = productSelected
    ? getProductByID(productSelected)
    : EMPTY_PRODUCT;

  return (
    <UpdateProductStyled>
      <ImagePreview
        source={updatedProduct.imageSource}
        title={updatedProduct.title}
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
          {isUpdated ? (
            <p>
              <span>
                <BsCloudCheck />
              </span>
              Modifications enregistrées !
            </p>
          ) : (
            <p>
              Cliquer sur un produit du menu pour le modifier
              <span> en temps réel</span>
            </p>
          )}
        </div>
      </div>
    </UpdateProductStyled>
  );
};

const UpdateProductStyled = styled.div`
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
    flex-direction: column;
    width: fit-content;
    gap: 15px;

    p {
      margin-top: 15px;
      color: #ffa01b;
      font-size: 15px;
      font-weight: 400;
      span {
        text-decoration: underline;
      }
    }
  }
`;
