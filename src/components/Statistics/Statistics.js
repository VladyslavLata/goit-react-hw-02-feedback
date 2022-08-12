import { Box } from 'components/Box/Box';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <Box as="ul" display="flex" flexDirection="column" gridGap={4} fontSize="s">
    <li key="Good">{`Good: ${good}`}</li>
    <li key="Neutral">{`Neutral: ${neutral}`}</li>
    <li key="Bad">{`Bad: ${bad}`}</li>
    <li key="Total">{`Total: ${total}`}</li>
    <li key="PositiveFeedback">{`Positive feedback: ${positiveFeedback}%`}</li>
  </Box>
);
