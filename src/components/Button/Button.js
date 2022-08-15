import { ButtonFB } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({
  btnText,
  onAddFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) => (
  <ButtonFB
    type="button"
    onClick={e => {
      onAddFeedback(e);
      onTotalFeedback();
      onPositiveFeedback();
    }}
  >
    {btnText}
  </ButtonFB>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  onAddFeedback: PropTypes.func.isRequired,
  onTotalFeedback: PropTypes.func.isRequired,
  onPositiveFeedback: PropTypes.func.isRequired,
};
