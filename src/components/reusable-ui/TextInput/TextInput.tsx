import { theme } from "../../../assets/styles/theme/theme-design";
import styled from "styled-components";

interface TextInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  className?: string;
  step?: string;
  lang?: string;
  [key: string]: unknown;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  value,
  onChange,
  Icon,
  className,
  step,
  lang,
  ...restProps
}) => {
  return (
    <TextInputStyled className={className}>
      {Icon && Icon}
      {type === "number" ? (
        <input
          type={type}
          name={name}
          value={value}
          step={step}
          lang={lang}
          onChange={onChange}
          {...restProps}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      )}
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
