import { theme } from "../../../assets/styles/theme/theme-design";
import styled, { RuleSet, css } from "styled-components";

interface TextInputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon?: React.ReactNode;
  $version: string;
  className?: string;
  step?: string;
  lang?: string;
  [key: string]: unknown;
}

interface ExtraStyle {
  [key: string]: RuleSet<object>;
}

export const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  value,
  onChange,
  Icon,
  $version = "normal",
  className,
  step,
  lang,
  ...restProps
}) => {
  return (
    <TextInputStyled className={className} $version={$version}>
      {Icon && <div className="icon">{Icon}</div>}
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

const TextInputStyled = styled.div<{ $version: string }>`
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: ${theme.borderRadius.round};

  .icon {
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    svg {
      color: ${theme.colors.gray};
    }
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

  ${({ $version }) => extraStyle[$version]}
`;

const extraNormalStyle = css`
  background-color: ${theme.colors.white};
  padding: 18px 24px;

  input {
    &::placeholder {
      color: #d3d3d3;
    }
  }
`;

const extraMinimalistStyle = css`
  background-color: ${theme.colors.lightGray};
  padding: 8px 24px;
`;

const extraStyle: ExtraStyle = {
  normal: extraNormalStyle,
  minimalist: extraMinimalistStyle,
};
