import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#455a64',
      main: '#000000',
      dark: '#000914',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#5ddef4',
      main: '#00acc1',
      dark: '#007c91',
      contrastText: '#000000',
    }
  },
  typography: {
    // h2: {
    //   color: "#1c313a",
    //   fontFamily: "Barlow Semi Condensed,sans-serif",
    // fontWeight: 550,
    // textTransform: "uppercase",
    // fontSize: "1.5rem",
    // lineHeight: "3rem",
    // margin: 0,
    // width: "100%"
    // },
    fontFamily: [
      'Century Gothic Std'
    ].join(',',)
  }
});

export default theme
