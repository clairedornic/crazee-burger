import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from "react-router-dom"
import { Logo } from '../../../components/reusable-ui/Logo';
import { theme } from "../../../assets/styles/theme/theme-design";

interface NavBarProps {
    userName: string;
}

export const Navbar: React.FC<NavBarProps> = ({userName}) => {

    const refreshPage = () => {
        window.location.reload();
    }

  return (
    <NavbarStyled>
        <button onClick={refreshPage} className='logo'>
            <Logo/>
        </button>
        <div className='profil'>
           <div className='infos-cta'>
                <p>Hey, <span>{userName}</span></p>
                <Link to={`/`}>Se déconnecter</Link>
            </div>
            <BsPersonCircle className="icon"/>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 70px 20px 20px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
    
    .logo {
        border: none;
        background: none;

        & > div {
            cursor: pointer;
        }

        p {
            font-size: ${theme.fonts.P4};
        }

        img {
            max-width: 80px;
            margin: 0 5px;
        }
    }

    .profil {
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
    }
`;