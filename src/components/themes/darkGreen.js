import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {green, grey} from '@material-ui/core/colors';

function DarkGreen(props) {
  const theme = createMuiTheme({
    typography: {
      fontSize: 18,
    },
    palette: {
      background: {
        paper: green[900],
      },
      text: {
        primary: grey[100],
      },
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default DarkGreen;
