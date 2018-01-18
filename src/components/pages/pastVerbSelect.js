import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';

const styles = theme => ({
  checked: {
    'color': theme.palette.primary[500]
  }
});

class PastVerbSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastVerbs: this.props.pastVerbs,
      verbs: this.props.verbs
    };
  }

  onChange = (i) => {
    const newPastVerbs = this.state.pastVerbs.slice(0);
    const indexPosition = this.state.pastVerbs.indexOf(i);
    if (indexPosition === -1) {
      newPastVerbs.push(i);
    } else {
      newPastVerbs.splice(indexPosition, 1);
    }
    this.setState({ pastVerbs: newPastVerbs });
    this.props.onChange({ pastVerbs: newPastVerbs });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.pastVerbs !== this.state.pastVerbs) {
      this.setState({ pastVerbs: nextProps.pastVerbs });
    }
    if (nextProps.verbs !== this.state.verbs) {
      this.setState({ verbs: nextProps.verbs });
    }
  }

  render() {
    const { classes } = this.props;
    const verbItems = this.state.verbs.filter(v => !!v).map((verb, i) => (
      <div key={verb}>
        <ListItem button onClick={() => this.onChange(i)}>
          <ListItemText primary={verb} />
          <ListItemSecondaryAction>
            <Checkbox
              value={verb}
              checked={this.state.pastVerbs.includes(i)}
              onChange={() => this.onChange(i)}
              className={classes.checked}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider light />
      </div>
    ));
    return (
      <div className={classes.root}>
        <List>
          {verbItems}
        </List>
      </div>
    );
  }
}

PastVerbSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PastVerbSelect);
