import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

export const getAddProductFormInputs = (newproduct: Product) => [
  {
    id: 1,
    name: "title",
    value: newproduct.title,
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
  },
  {
    id: 2,
    name: "imageSource",
    value: newproduct.imageSource,
    type: "url",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    id: 3,
    name: "price",
    value: newproduct.price,
    type: "number",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    lang: "fr_FR",
    step: "0.01",
  },
];
