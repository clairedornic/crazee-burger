import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { theme } from "../../../../assets/styles/theme/theme-design";

export const ToastAdmin = () => {
  return <ToastAdminStyled className="toaster" bodyClassName="body-toast" />;
};

const ToastAdminStyled = styled(ToastContainer)`
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
