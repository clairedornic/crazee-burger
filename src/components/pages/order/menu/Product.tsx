import styled from 'styled-components';
import { PrimaryButton } from '../../../reusable-ui/PrimaryButton/PrimaryButton';
import { theme } from "../../../../assets/styles/theme/theme-design";
import { formatPrice } from '../../../../utils/maths';

interface ProductProps {
  title: string;
  price: number;
  imageSource: string;
}

export const Product: React.FC<ProductProps> = ({title, price, imageSource}) => {

  return (
    <ProductStyled>
      <img src={`./src/assets/medias${imageSource}`}  alt={title} />
      <div className="content">
          <p className='title'>{title}</p>
          <div className="bottom-card">
            <p className='price'>{formatPrice(price)}</p>
            <PrimaryButton
                type="button"
                label="Ajouter"
            />
          </div>
      </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
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

    .bottom-card {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .price {
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