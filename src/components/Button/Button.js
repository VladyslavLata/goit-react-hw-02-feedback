import { ButtonF } from './Button.styled';

export const Button = ({
  btnText,
  onAddFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) => (
  <ButtonF
    type="button"
    onClick={() => {
      onAddFeedback(btnText);
      onTotalFeedback();
      onPositiveFeedback();
    }}
  >
    {btnText}
  </ButtonF>
);
