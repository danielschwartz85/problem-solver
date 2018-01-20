import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class NewName extends React.Component {
  onChange = (e) => {
    this.props.onChange({ newName: e.target.value });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.props.newName}
            onChange={this.onChange}
            fullWidth={true}
            placeholder={Config.pages.newName.inputText}
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default NewName;
