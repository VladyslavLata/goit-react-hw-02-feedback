import PropTypes from 'prop-types';

export const Notificstion = ({ message }) => <p>{message}</p>;

Notificstion.propTypes = {
  message: PropTypes.string.isRequired,
};
