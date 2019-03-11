import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {orange, grey} from '@material-ui/core/colors';

function Orange(props) {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: orange,
      background: {
        paper: orange[800],
      },
      text: {
        primary: grey[100],
      },
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default Orange;
