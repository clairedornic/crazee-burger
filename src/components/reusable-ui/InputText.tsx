
import { theme } from '../../assets/styles/theme/theme-design';
import styled from 'styled-components';

interface InputTextProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    Icon?: React.ReactNode;
    className: string;
}

type AdditionalProps = {
    [key: string] : any;
}

export const InputText: React.FC<InputTextProps & AdditionalProps> = ({value, onChange, Icon, ...restProps}) => {
  return (
    <InputTextStyled>
        {Icon && Icon}
        <input
            type="text"
            name="firstname"
            value={value}
            onChange={onChange}
            {...restProps}
        />
    </InputTextStyled>
  )
}

const InputTextStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 18px 24px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};

    .icon {
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