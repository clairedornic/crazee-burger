import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";

interface AddProductFormInput {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  Icon: React.ReactNode;
  lang?: string;
  step?: string;
}

export const addProductFormInputs: AddProductFormInput[] = [
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
