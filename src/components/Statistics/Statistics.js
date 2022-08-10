import { Box } from 'components/Box/Box';

export const Statistics = ({
  state: { good, neutral, bad, total, positiveFeedback },
}) => (
  <Box px={5}>
    <h2>Statistics</h2>
    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
      <li key="Good">{`Good: ${good}`}</li>
      <li key="Neutral">{`Neutral: ${neutral}`}</li>
      <li key="Bad">{`Bad: ${bad}`}</li>
      <li key="Total">{`Total: ${total}`}</li>
      <li key="PositiveFeedback">{`Positive feedback: ${positiveFeedback}%`}</li>
    </Box>
  </Box>
);
