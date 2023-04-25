import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#386a20',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#131f0d',
      // dark: will be calculated from palette.secondary.main,
    },
    surface1:{
        main: '#f0f3e8',
        contrastText:'#042100',
    },
    surface2:{
        main: '#ebefe2',
        contrastText:'#131f0d',
    },
    background:{
        main: '#fdfdf6',
        contrastText:'#1a1c18',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;