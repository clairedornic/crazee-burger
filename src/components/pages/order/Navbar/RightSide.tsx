import styled from "styled-components";
import { Profile } from "./Profile";
import { ToggleButton } from "../../../reusable-ui/ToggleButton/ToggleButton.tsx";
import { FcInfo } from "react-icons/fc";
import { ToastAdmin } from "./ToastAdmin.tsx";
import { toast } from "react-toastify";
import { useContext } from "react";
import OrderContext from "../../../../contexts/OrderContext.ts";

export const RightSide = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { isModeAdmin, setIsModeAdmin } = orderContext;

  const handleToggleAdminButton = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        icon: <FcInfo size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <RightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        onToggle={handleToggleAdminButton}
        labelIfChecked="Désactiver le mode admi"
        labelIfUnchecked="Activer le mode admin"
        $bgcolor={"darkGray"}
      />
      <Profile />
      <ToastAdmin />
    </RightSideStyled>
  );
};

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  gap: 60px;
`;
