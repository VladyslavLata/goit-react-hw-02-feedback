import { Box } from 'components/Box/Box';

export const Section = ({ title, children }) => (
  <Box p={4}>
    <h2>{title}</h2>
    {children}
  </Box>
);
