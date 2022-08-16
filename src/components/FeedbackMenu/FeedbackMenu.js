import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export function FeedbackMenu({ options, onAddFeedback }) {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {options.map(option => (
        <li key={option}>
          <Button option={option} onAddFeedback={onAddFeedback} />
        </li>
      ))}
    </Box>
  );
}

FeedbackMenu.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
};
