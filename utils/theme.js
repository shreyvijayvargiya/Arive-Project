import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createTheme({
      palette: {
        primary: { main: '#272727' },
        secondary: { main: '#FFEA9E' },
        info: { main: '#343434' },
        success: { main: '#4CAF50'},
        error: { main: '#FF0000'}
      },
    }),
    {
      factor: 4,
      breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    }
  );