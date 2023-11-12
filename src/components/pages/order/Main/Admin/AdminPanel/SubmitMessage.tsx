import { FiCheck } from "react-icons/fi";

interface SubmitMessageProps {
  isSubmitted: boolean;
}
export const SubmitMessage: React.FC<SubmitMessageProps> = ({
  isSubmitted,
}) => {
  return (
    isSubmitted && (
      <span className="success-added-product-notification">
        <span className="icon-container">
          <FiCheck />
        </span>
        Ajouté avec succès !
      </span>
    )
  );
};
