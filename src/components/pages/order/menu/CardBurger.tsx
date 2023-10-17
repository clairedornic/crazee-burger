import styled from 'styled-components';
import { PrimaryButton } from '../../../../components/reusable-ui/PrimaryButton';
import { theme } from "../../../../assets/styles/theme/theme-design";
import { formatPrice } from '../../../../utils/maths';

interface CardBurgerProps {
  burger: Burger;
}

export const CardBurger: React.FC<CardBurgerProps> = ({burger}) => {

  const formattedPrice = formatPrice(burger.price);

  return (
    <CardBurgerStyled>
      <img src={`./src/assets/medias${burger.imageSource}`}  alt={burger.title} />
      <div className="content">
          <p className='title'>{burger.title}</p>
          <div className="bottom-card">
            <p className='price'>{formattedPrice}</p>
            <PrimaryButton
                type="button"
                label="Ajouter"
            />
          </div>
      </div>
    </CardBurgerStyled>
  )
}

const CardBurgerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);
  padding: 50px 25px 10px 25px;

  img {
    width: 100%;
    height: 145px;
    object-fit: contain;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    .title {
      font-size: ${theme.fonts.size.P4};
      font-family: ${theme.fonts.family.title};
      font-weight: ${theme.fonts.weights.bold};
      margin: 0;
    }

    .bottom-card {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: fit-content;
        padding: 12px 26px;
      }
    }
  }

`;