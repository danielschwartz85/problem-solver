import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import Config from '../../config';
import List, { ListItem } from 'material-ui/List';

const styles = theme => ({
  input: {
    width: '100%'
  }
});

class Transformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verbs: this.props.verbs,
      transformationVerbs: this.props.transformationVerbs
    };
  }

  onBlur = (e, i) => {
    this.props.onChange({
      transformationVerbs: this.state.transformationVerbs
    });
  }

  onChange = (e, i) => {
    const newVerbs = this.state.verbs.slice(0);
    newVerbs[i] = e.target.value;
    this.setState({ transformationVerbs: {
      ...this.state.transformationVerbs,
      [i]: e.target.value
    }});
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.verbs !== this.state.verbs) {
      this.setState({ verbs: nextProps.verbs });
    }
    if (nextProps.transformationVerbs !== this.state.transformationVerbs) {
      this.setState({ transformationVerbs: nextProps.transformationVerbs });
    }
  }

  render() {
    const { classes } = this.props;
    const placeholder = Config.pages.transformation.inputText;
    const verbItems = this.state.verbs.filter(v => !!v).map((verb, i) => (
      <div key={verb}>
        <ListItem>
          <Input
            className={classes.input}
            placeholder={placeholder.replace('$', verb)}
            onChange={e => this.onChange(e, i)}
            onBlur={e => this.onBlur(e, i)}
            value={this.state.transformationVerbs[i] || ""}
          />
        </ListItem>
      </div>
    ));
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <List>
            {verbItems}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Transformation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Transformation);
