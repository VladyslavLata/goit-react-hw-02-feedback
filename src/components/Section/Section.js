import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Box as="section" p={4}>
    <h2>{title}</h2>
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
