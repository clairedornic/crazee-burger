import { theme } from "../../../assets/styles/theme/theme-design";
import styled from "styled-components";

type TextInputStyledTypes = {
  $textColor: string;
  $iconColor: string;
  $bgColor: string;
};

interface TextInputProps extends TextInputStyledTypes {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  [key: string]: unknown;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  Icon,
  $textColor,
  $iconColor,
  $bgColor,
  ...restProps
}) => {
  return (
    <TextInputStyled
      $textColor={$textColor}
      $iconColor={$iconColor}
      $bgColor={$bgColor}
    >
      {Icon && Icon}
      <input
        type="text"
        name="firstname"
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </TextInputStyled>
  );
};

const TextInputStyled = styled.div<TextInputStyledTypes>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 24px;
  background-color: ${(props) => props.$bgColor};
  border-radius: ${theme.borderRadius.round};

  svg {
    color: ${(props) => props.$iconColor};
  }

  input {
    background-color: inherit;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans";
    width: 100%;

    &:focus-visible {
      outline: none;
    }
  }
`;
