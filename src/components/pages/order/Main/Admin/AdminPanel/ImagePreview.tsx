interface ImagePreviewprops {
  source: string;
  title: string;
}
export const ImagePreview: React.FC<ImagePreviewprops> = ({
  source,
  title,
}) => {
  return (
    <div className="img-container">
      {source ? (
        <img src={source} alt={title} />
      ) : (
        <span className="img-frame">
          <p>Aucune Image</p>
        </span>
      )}
    </div>
  );
};
