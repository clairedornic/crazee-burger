import { LoginForm } from "./LoginForm";
import styled from 'styled-components';

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
  background: url('/images/bg-burger.jpg') #000000a6;
  background-blend-mode: darken;
  background-size: cover;
`;
