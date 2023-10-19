
import { theme } from '../../../assets/styles/theme/theme-design';
import styled from 'styled-components';

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Icon?: React.ReactNode;
    [key: string] : unknown;
}

export const TextInput: React.FC<TextInputProps> = ({value, onChange, Icon, ...restProps}) => {
  return (
    <TextInputStyled>
        {Icon && Icon}
        <input
            type="text"
            name="firstname"
            value={value}
            onChange={onChange}
            {...restProps}
        />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 24px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

    .icon-input {
        color: #747B91;
    }

    input {
        border-radius: ${theme.borderRadius.round};
        border: none;
        font-family: 'Open Sans';
        width: 100%;

        &:focus-visible {
            outline: none;
        }
    }
`;