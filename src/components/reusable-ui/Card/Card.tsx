import styled from "styled-components";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { theme } from "../../../assets/styles/theme/theme-design";
import { TiDelete } from "react-icons/ti";

interface CardProps {
  title: string;
  leftDescription: number | string;
  imageSource: string;
  onClick: () => void;
  isRemoveButtonVisible: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  leftDescription,
  imageSource,
  onClick,
  isRemoveButtonVisible,
}) => {
  return (
    <CardStyled>
      <img src={imageSource} alt={title} />
      <div className="content">
        {isRemoveButtonVisible && (
          <button className="remove" onClick={onClick}>
            <TiDelete className="icon" />
          </button>
        )}

        <p className="title">{title}</p>
        <div className="description">
          <p className="left-description">{leftDescription}</p>
          <div className="right-description">
            <PrimaryButton type="button" label="Ajouter" />
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.medium};
  padding: 50px 25px 30px 25px;
  height: fit-content;

  img {
    width: 100%;
    height: 145px;
    object-fit: contain;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .remove {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      padding: 0;
      border: 0;

      .icon {
        color: ${theme.colors.primary};
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: ${theme.colors.lightRed};
          transition: all 0.2s ease-in-out;
        }
      }
    }

    .title {
      font-size: ${theme.fonts.size.P4};
      font-family: ${theme.fonts.family.title};
      font-weight: ${theme.fonts.weights.bold};
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left-description {
        margin: 0;
        color: ${theme.colors.primary};
      }

      button {
        width: fit-content;
        padding: 12px 26px;
      }
    }
  }
`;
