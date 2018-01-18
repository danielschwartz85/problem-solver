import React from 'react';
import TextField from 'material-ui/TextField';
import Config from '../../config';
import Grid from 'material-ui/Grid';

class PastDomino extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastDomino: this.props.pastDomino
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({ pastDomino: this.state.pastDomino });
  }

  onChange = (e) => {
    this.setState({ pastDomino: e.target.value });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.pastDomino !== this.state.pastDomino) {
      this.setState({ pastDomino: nextProps.pastDomino });
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            value={this.state.pastDomino}
            onChange={this.onChange}
            onBlur={this.onBlur}
            fullWidth={true}
            placeholder={Config.pages.pastDomino.inputText}
            multiline
            rows="5"
            margin="normal"
          />
        </Grid>
      </Grid>
    );
  }
}

export default PastDomino;
