import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  grey,
  blue,
  green
} from '@material-ui/core/colors';


function SecondaryTheme(props) {
  const theme = createMuiTheme({
    palette: {
      "primary": green,
      "secondary": green,
      "background": {
        "paper": blue[500]
      },
      "input": {
         "inputText": grey[200],
         "labelText": grey[200],
         "bottomLine": grey[400],
       },
      "text": {
         "primary": grey[100],
      },
      "secondaryPaper": '#00e676'
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

export default SecondaryTheme;
