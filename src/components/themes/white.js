import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

function White(props) {
  const theme = createMuiTheme({
    typography: {
      fontSize: 18,
    },
    palette: {
      background: {},
      text: {},
    },
    direction: 'rtl',
  });

  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default White;
