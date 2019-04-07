import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

function Main(props) {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontSize: '15',
    },
    palette: {
      primary: {main: green[900]},
      secondary: {main: '#ffffff'},
      background: {
        paper: green[900],
      },
      text: {
        primary: '#ffffff',
        secondary: green[100],
      },
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default Main;
