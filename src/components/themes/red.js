import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {grey, red} from '@material-ui/core/colors';

function Red(props) {
  const theme = createMuiTheme({
    typography: {
      fontSize: 18,
    },
    palette: {
      primary: {main: '#ffffff'},
      background: {
        paper: red[900],
      },
      text: {
        primary: grey[100],
      },
      secondaryPaper: red[200],
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default Red;
