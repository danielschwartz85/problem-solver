import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import {
  grey,
  blue,
  green
} from 'material-ui/colors';


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
      "secondaryPaper": green[100]
    },
  });

  return (
    <MuiThemeProvider
      theme={theme} >
      {props.children}
    </MuiThemeProvider>
  );
};

export default SecondaryTheme;
