import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';

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
