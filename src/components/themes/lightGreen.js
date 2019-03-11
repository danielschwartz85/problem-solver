import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

function LightGreen(props) {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      background: {
        paper: green[100],
      },
      primary: {main: '#ffffff'},
      secondary: {main: '#4caf50'},
      secondaryPaper: green[200],
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default LightGreen;
