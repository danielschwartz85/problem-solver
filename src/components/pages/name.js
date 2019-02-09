import React from 'react';
import TextField from '@material-ui/core/TextField';
import Config from '../../config';
import Grid from '@material-ui/core/Grid';

class Name extends React.Component {
  onChange = (e) => {
    this.props.onChange({ name: e.target.value });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.props.name}
            onChange={this.onChange}
            fullWidth={true}
            placeholder={Config.pages.name.inputText}
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default Name;
