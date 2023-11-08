import { theme } from "../../../assets/styles/theme/theme-design";
import styled from "styled-components";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  Icon,
  className,
  ...restProps
}) => {
  return (
    <TextInputStyled className={className}>
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

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 24px;
  background-color: ${theme.colors.lightGray};
  border-radius: ${theme.borderRadius.round};

  svg {
    color: ${theme.colors.gray};
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
