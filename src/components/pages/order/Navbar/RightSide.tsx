import { useState } from 'react';
import styled from 'styled-components';
import { Profile } from './Profile';
import { theme } from '../../../../assets/styles/theme/theme-design';
import { ToastContainer, toast } from 'react-toastify';
import { ToggleButton } from '../../../reusable-ui/ToggleButton/ToggleButton.tsx';
import { FcInfo } from 'react-icons/fc';

export const RightSide = () => {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const handleToggleAdminButton = () => {
    if ( !isModeAdmin ) {
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
      })
    }
    setIsModeAdmin(!isModeAdmin);
  }

  return (
    <RightSideStyled>
        <ToggleButton isChecked={isModeAdmin} onToggle={handleToggleAdminButton} labelIfChecked="Désactiver le mode admi" labelIfUnchecked="Activer le mode admin" backgroundColor={"darkgray"}/>
        <Profile/>
        <ToastContainer className="toaster" bodyClassName="body-toast" />
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  gap: 60px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.black};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;