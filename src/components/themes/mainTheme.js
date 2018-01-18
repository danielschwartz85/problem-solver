import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {
  green,
  indigo
} from 'material-ui/colors';


function MainTheme(props) {
  const theme = createMuiTheme({
    palette: {
      "primary": indigo,
      "secondary": green
    }
  });

  return (
    <MuiThemeProvider
      theme={theme} >
      {props.children}
    </MuiThemeProvider>
  );
};

export default MainTheme;
