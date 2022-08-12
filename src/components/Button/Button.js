import { ButtonF } from './Button.styled';

export const Button = ({
  btnText,
  onAddFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) => (
  <ButtonF
    type="button"
    onClick={e => {
      onAddFeedback(e);
      onTotalFeedback();
      onPositiveFeedback();
    }}
  >
    {btnText}
  </ButtonF>
);
