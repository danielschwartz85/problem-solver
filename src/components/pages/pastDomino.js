import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class PastDomino extends React.Component {
  onChange = (e) => {
    this.props.onChange({ pastDomino: e.target.value });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.props.pastDomino}
            onChange={this.onChange}
            fullWidth={true}
            placeholder={Config.pages.pastDomino.inputText}
            multiline
            rows="4"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default PastDomino;
