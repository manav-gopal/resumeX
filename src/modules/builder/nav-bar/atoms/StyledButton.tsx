import { Button, styled, alpha } from '@mui/material';
import { color } from 'jodit/types/plugins/color/color';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.resume[500],
  borderColor: alpha(theme.palette.resume[50], 0.8),
  ':hover': {
    borderColor: theme.palette.resume[50],
    color: theme.palette.resume[900],
    backgroundColor: alpha(theme.palette.resume[500], 0.04),
  },
  
  // Responsive styling
  '@media (max-width: 600px)': {
    // Adjust styles for screens with a maximum width of 600px
    fontSize: '.5rem', // Example adjustment
    padding: '0',
  },
}));
