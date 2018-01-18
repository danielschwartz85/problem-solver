import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({ name: this.state.name });
  }

  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.name !== this.state.name) {
      this.setState({ name: nextProps.name });
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.state.name}
            onChange={this.onChange}
            onBlur={this.onBlur}
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
