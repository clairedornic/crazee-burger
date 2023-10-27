import { TextInput } from "../../../../../reusable-ui/TextInput/TextInput.tsx";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useState } from "react";

export const AddProduct = () => {
  interface AddProductFormInput {
    id: string;
    placeholder: string;
    Icon: React.ReactNode;
  }

  interface InitialValueInputs {
    name: string;
    linkImage: string;
    price: number;
  }

  const addProductFormInputs: AddProductFormInput[] = [
    {
      id: "name",
      placeholder: "Nom du produit (ex: Super Burger)",
      Icon: <FaHamburger />,
    },
    {
      id: "linkImage",
      placeholder:
        "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
      Icon: <BsFillCameraFill />,
    },
    {
      id: "price",
      placeholder: "Prix",
      Icon: <MdOutlineEuro />,
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

  return (
    <div>
      <div className="img-container"></div>
      <div className="infos-container">
        {addProductFormInputs.map((input, index) => (
          <TextInput
            key={index}
            value={valueInputs[input.id]}
            onChange={(e) => handleInputChange(e, input.id)}
            placeholder={input.placeholder}
            Icon={input.Icon}
            required
          />
        ))}
      </div>
      <span>
        <p>{valueInputs.name}</p>
        <p>{valueInputs.linkImage}</p>
        <p>{valueInputs.price}</p>
      </span>
    </div>
  );
};
