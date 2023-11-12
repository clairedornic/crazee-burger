import { theme } from "../../../../../../assets/styles/theme/theme-design";
import styled from "styled-components";

interface ImagePreviewprops {
  source: string;
  title: string;
}
export const ImagePreview: React.FC<ImagePreviewprops> = ({
  source,
  title,
}) => {
  return (
    <ImagePreviewStyled>
      {source ? (
        <img src={source} alt={title} />
      ) : (
        <span className="img-frame">
          <p>Aucune Image</p>
        </span>
      )}
    </ImagePreviewStyled>
  );
};

const ImagePreviewStyled = styled.div`
  align-self: flex-start;
  width: 215px;
  height: 120px;

  .img-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.extraLightGray};
    border-radius: ${theme.borderRadius.round};
    width: 100%;
    height: 100%;

    p {
      font-size: 16px;
      color: ${theme.colors.mediumGray};
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
