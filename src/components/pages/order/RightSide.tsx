import styled from 'styled-components';
import { theme } from "../../../assets/styles/theme/theme-design";
import { Profile } from './Profile';

export const RightSide: React.FC<User> = ({userName}) => {
  return (
    <RightSideStyled>
        <Profile userName={userName}/>
    </RightSideStyled>
  )
}

const RightSideStyled = styled.div`
    display: flex;
    align-items: center;
`;