import React from 'react';
import TextField from '@material-ui/core/TextField';
import Config from '../../config';
import Grid from '@material-ui/core/Grid';

class FutureDomino extends React.Component {
  onChange = (e) => {
    this.props.onChange({ futureDomino: e.target.value });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.props.futureDomino}
            onChange={this.onChange}
            fullWidth={true}
            placeholder={Config.pages.futureDomino.inputText}
            multiline
            rows="4"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default FutureDomino;
