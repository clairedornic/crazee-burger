import styled, { RuleSet, css } from "styled-components";
import { theme } from "../../../assets/styles/theme/theme-design";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  Icon?: React.ReactNode;
  $version?: string;
  [key: string]: unknown;
  onClick?: () => void;
}

interface ExtraStyle {
  [key: string]: RuleSet<object>;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  Icon,
  $version = "default",
  onClick,
}) => {
  return (
    <ButtonStyled type={type} $version={$version} onClick={onClick}>
      <label>{label}</label>
      {Icon && <div className="icon">{Icon}</div>}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button<{ $version: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  gap: 10px;
  width: 100%;
  z-index: 2;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  font-family: "Open Sans";
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .icon {
    display: flex;
    align-items: center;

    svg {
      color: ${theme.colors.white};
    }
  }

  label {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    transition: all 0.2s ease-in-out;
  }

  ${({ $version }) => extraStyle[$version]}
`;

const defaultStyle = css`
  padding: 18px 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};

  &:hover,
  &:focus {
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};

    .icon {
      svg {
        color: ${theme.colors.primary};
      }
    }
  }

  &:active {
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }
`;

const greenStyle = css`
  background: ${theme.colors.green};
  border: 1px solid ${theme.colors.green};
  padding: 10px 30px;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};

    &:focus {
      color: ${theme.colors.green};
    }
    &:focus {
      color: ${theme.colors.white};
    }
  }
`;

const extraStyle: ExtraStyle = {
  default: defaultStyle,
  green: greenStyle,
};
