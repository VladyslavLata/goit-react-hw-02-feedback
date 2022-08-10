import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';

export function FeedbackMenu({
  title,
  btnsName,
  onAddFeedback,
  onTotalFeedback,
  onPositiveFeedback,
}) {
  return (
    <Box px={5}>
      <h2>{title}</h2>
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
    </Box>
  );
}
