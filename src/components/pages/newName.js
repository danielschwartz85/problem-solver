import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class NewName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: this.props.newName
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({ newName: this.state.newName });
  }

  onChange = (e) => {
    this.setState({ newName: e.target.value });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.newName !== this.state.newName) {
      this.setState({ newName: nextProps.newName });
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.state.newName}
            onChange={this.onChange}
            onBlur={this.onBlur}
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
