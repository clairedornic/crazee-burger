import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { theme } from "../../../assets/styles/theme/theme-design";

export const Profile: React.FC<User> = ({userName}) => {
  return (
    <ProfileStyled>
        <div className='infos-cta'>
            <p>Hey, <span>{userName}</span></p>
            <Link to={`/`}>Se déconnecter</Link>
        </div>
        <BsPersonCircle className="icon"/>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .infos-cta {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
        color: ${theme.colors.gray};

        p {
            font-size: 16px;
            margin: 0;
        }

        span {
            font-weight: ${theme.weights.bold};
            color: ${theme.colors.primary};
        }

        a {
            font-size: ${theme.fonts.XXS};

            &:active,
            &:visited {
                color: ${theme.colors.gray};
            }
        }
    }

    .icon {
        color: ${theme.colors.gray};
        width: 36px;
        height: 36px;
    }
`;