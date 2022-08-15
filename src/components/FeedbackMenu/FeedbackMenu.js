import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export function FeedbackMenu({
  btnsName,
  onAddFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      {btnsName.map((btnName, i) => (
        <li key={i}>
          <Button
            btnText={btnName}
            onAddFeedback={onAddFeedback}
            onTotalFeedback={onTotalFeedback}
            onPositiveFeedback={onPositiveFeedback}
          />
        </li>
      ))}
    </Box>
  );
}

FeedbackMenu.propTypes = {
  btnsName: PropTypes.arrayOf(PropTypes.string),
};
