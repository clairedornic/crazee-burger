import styled from 'styled-components';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { theme } from "../../../assets/styles/theme/theme-design";

interface CardProps {
  title: string;
  leftDescription: number | string;
  imageSource: string;
}

export const Card: React.FC<CardProps> = ({title, leftDescription, imageSource}) => {

  return (
    <CardStyled>
      <img src={imageSource}  alt={title} />
      <div className="content">
          <p className='title'>{title}</p>
          <div className="description">
            <p className='left-description'>{leftDescription}</p>
            <div className="right-description">
              <PrimaryButton
                  type="button"
                  label="Ajouter"
              />
            </div>
          </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);
  padding: 50px 25px 30px 25px;

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

`;