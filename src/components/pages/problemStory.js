import React from 'react';
import TextField from '@material-ui/core/TextField';
import Config from '../../config';
import Grid from '@material-ui/core/Grid';

class ProblemStory extends React.Component {
  onChange = event => {
    this.props.onChange({description: event.target.value});
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth={true}
            placeholder={Config.pages.problem.inputText}
            multiline
            rows="5"
            margin="normal"
            value={this.props.description}
            onChange={this.onChange}
          />
        </Grid>
      </Grid>
    );
  }
}

export default ProblemStory;
