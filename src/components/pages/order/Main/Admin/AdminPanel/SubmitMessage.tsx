import { theme } from "../../../../../../assets/styles/theme/theme-design";
import { FiCheck } from "react-icons/fi";
import styled from "styled-components";

export const SubmitMessage = () => {
  return (
    <SubmitMessageStyled>
      <span className="icon-container">
        <FiCheck />
      </span>
      Ajouté avec succès !
    </SubmitMessageStyled>
  );
};

const SubmitMessageStyled = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 5px;
  color: ${theme.colors.green};
  font-size: 15px;
  font-weight: 400;

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius.extraRound};
    width: 19px;
    height: 19px;
  }
`;
