import styled from "styled-components";
import { Button } from "../Button/Button";
import { theme } from "../../../assets/styles/theme/theme-design";
import { TiDelete } from "react-icons/ti";

interface CardProps {
  title: string;
  leftDescription: number | string;
  imageSource: string;
  onDelete: () => void;
  hasDeleteButton: boolean;
  isHoverable: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  leftDescription,
  imageSource,
  onDelete,
  hasDeleteButton,
  isHoverable,
}) => {
  return (
    <CardStyled className={isHoverable ? "is-hoverable" : ""}>
      <div className="card">
        {hasDeleteButton && (
          <button
            className="remove"
            aria-label="delete-button"
            onClick={onDelete}
          >
            <TiDelete className="icon" />
          </button>
        )}
        <img src={imageSource} alt={title} />
        <div className="content">
          <p className="title">{title}</p>
          <div className="description">
            <p className="left-description">{leftDescription}</p>
            <div className="right-description">
              <Button type="button" label="Ajouter" />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  border-radius: ${theme.borderRadius.extraRound};
  transition: all 0.3s ease-in-out;

  &.is-hoverable:hover {
    box-shadow: 0px 0px 8px 0px #ff9a23;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.medium};
    padding: 50px 25px 30px 25px;
    height: fit-content;

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

    img {
      width: 100%;
      height: 145px;
      object-fit: contain;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 15px;

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
  }
`;
