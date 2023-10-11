
import { FormEvent, useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";
import logo from '../../../assets/medias/images/logo.png';
import arrow from '../../../assets/medias/images/arrow-right.png';
import profil_login from '../../../assets/medias/images/profil-login.svg';

import styled from 'styled-components';
import {theme} from '../../../assets/styles/theme/theme-design'

export const LoginForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [firstname, setFirstname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(formRef.current){
            formRef.current.reset();
        }
        navigate('/order', { 
            state: {
                userName: firstname 
            }
        });
    };

    return (
        <Form ref={formRef} action="submit" onSubmit={handleSubmit}>
            <span className="logo">
                <p>Crazee</p>
                <img src={logo} alt="Crazee burger avec un burger entre crazee et burger" />
                <p>Burger</p>
            </span>
            <div className="form-wrapper">
                <div className="welcome-wrapper">
                    <h1>Bienvenue chez nous</h1>
                    <span></span>
                    <h2>Connectez-vous</h2>
                </div>
                <div className="login-form">
                    <span className="firstname_input">
                        <img src={profil_login} alt="Icon représentant une personne" />
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            placeholder="Entrez votre prénom"
                            required
                        />
                    </span>
                    
                    <button type="submit">
                        <label>Accéder à mon espace</label>
                        <img src={arrow} alt="flèche qui pointe vers la droite" />
                    </button>
                </div>
            </div>
        </Form>
    )
}
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        p {
            font-family: Amatic;
            font-size: 110px;
            color: ${theme.colors.logo};
            margin: 0;
        }

        img {
            max-width: 200px;
        }
    }

    .form-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
    }

    .welcome-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        font-family: Amatic;
        color: ${theme.colors.white};

        h1 {
            margin: 0;
            font-size: ${theme.fonts.P5};
        }

        span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: ${theme.colors.secondary};
            margin-top: 32px;
            margin-bottom: 40px;
        }

        h2 {
            margin: 0;
            font-size: ${theme.fonts.P4};
        }
    } 

    .login-form {
        display: flex;
        flex-direction: column;
        margin-top: 18px;
        width: 100%;
        gap: 18px;

        .firstname_input {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px 24px;
            background-color: ${theme.colors.white};
            border-radius: ${theme.borderRadius.round};
        }

        input {
            border-radius: ${theme.borderRadius.round};
            border: none;
            font-family: 'Open Sans';

            &:focus-visible {
                outline: none;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
            width: 100%;
            padding: 18px 0;
            font-family: 'Open Sans';
            border-radius: ${theme.borderRadius.round};
            border: none;
            cursor: pointer;

            label {
                pointer-events: none;
            }

            img {
                margin-top: 1px;
            }
        }
    }
`;