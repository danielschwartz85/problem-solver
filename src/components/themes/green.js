import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {green, grey} from '@material-ui/core/colors';

function Green(props) {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontSize: '18',
    },
    palette: {
      background: {
        paper: green[700],
      },
      text: {
        primary: grey[100],
      },
      primary: {main: '#ffffff'},
      secondaryPaper: green[200],
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default Green;
