import styled from 'styled-components';
import { Profile } from './Profile';

export const RightSide = () => {
  return (
    <RightSideStyled>
        <Profile/>
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
    display: flex;
    align-items: center;
`;