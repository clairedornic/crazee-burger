import styled from "styled-components";
import { theme } from "../../../assets/styles/theme/theme-design";

interface PrimaryButtonProps {
  type: "submit" | "reset" | "button";
  label: string;
  Icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  label,
  Icon,
  className,
  onClick,
}) => {
  return (
    <PrimaryButtonStyled type={type} className={className} onClick={onClick}>
      <label>{label}</label>
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
};
const PrimaryButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  width: 100%;
  padding: 18px 0;
  font-family: "Open Sans";
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  label {
    pointer-events: none;
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }

  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
    transition: all 0.2s ease-in-out;
  }
`;
