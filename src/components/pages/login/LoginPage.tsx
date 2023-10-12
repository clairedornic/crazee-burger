import { LoginForm } from "./LoginForm";
import styled from 'styled-components';
import bg_burger from '../../../assets/medias/images/bg-burger.jpg';

export const LoginPage = () => {

  return (
    <Wrapper>
        <LoginForm></LoginForm>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: url(${bg_burger}) #000000a6;
  background-blend-mode: darken;
  background-size: cover;
`;
