import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class ProblemStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description
    }
  }

  onChange = (event) => {
    this.setState({description: event.target.value});
  }

  onBlur = () => {
    this.props.onChange({ description: this.state.description });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.description !== this.state.description) {
      this.setState({ description: nextProps.description });
    }
  }

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
            value={this.state.description}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </Grid>
      </Grid>
    );
  }
}

export default ProblemStory;
