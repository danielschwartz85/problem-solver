import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class FutureDomino extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      futureDomino: this.props.futureDomino
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({ futureDomino: this.state.futureDomino });
  }

  onChange = (e) => {
    this.setState({ futureDomino: e.target.value });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.futureDomino !== this.state.futureDomino) {
      this.setState({ futureDomino: nextProps.futureDomino });
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.state.futureDomino}
            onChange={this.onChange}
            onBlur={this.onBlur}
            fullWidth={true}
            placeholder={Config.pages.futureDomino.inputText}
            multiline
            rows="5"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default FutureDomino;
