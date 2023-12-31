import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../assets/styles/theme/theme-design";
import { Logo } from "../../reusable-ui/Logo/Logo";
import { TextInput } from "../../reusable-ui/TextInput/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import { Button } from "../../reusable-ui/Button/Button";
import { BsChevronRight } from "react-icons/bs";

export const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      formRef.current.reset();
    }
    navigate("/order", {
      state: {
        userName: firstname,
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };

  return (
    <Form ref={formRef} action="submit" onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <Logo className={"logo-login-page"} />
        <div className="welcome-wrapper">
          <h1>Bienvenue chez nous</h1>
          <span></span>
          <h2>Connectez-vous</h2>
        </div>
        <div className="login-form">
          <TextInput
            type="text"
            name="firstname"
            value={firstname}
            onChange={handleChange}
            placeholder={"Entrez votre prénom"}
            Icon={<BsPersonCircle />}
            $version="normal"
            className="login-inputs"
            required
          />
          <Button
            type="submit"
            label="Accéder à mon espace"
            Icon={<BsChevronRight />}
          />
        </div>
      </div>
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 400px;

    .logo-login-page {
      p {
        font-size: 110px;
      }

      img {
        max-width: 200px;
        margin: 0 20px;
      }
    }
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
      font-size: ${theme.fonts.size.P5};
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
      font-size: ${theme.fonts.size.P4};
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    width: 100%;
    gap: 18px;
  }
`;
