import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  green,
  indigo
} from '@material-ui/core/colors';


function MainTheme(props) {
  const theme = createMuiTheme({
    palette: {
      "primary": indigo,
      "secondary": green
    },
    typography: {
      useNextVariants: true,
    },
    direction: 'rtl',
  });

  return (
    <MuiThemeProvider
      theme={theme} >
      {props.children}
    </MuiThemeProvider>
  );
};

export default MainTheme;
