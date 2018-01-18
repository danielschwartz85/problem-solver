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

class NegativeVerbSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negativeVerbs: this.props.negativeVerbs,
      verbs: this.props.verbs
    };
  }

  onChange = (i) => {
    const newNegativeVerbs = this.state.negativeVerbs.slice(0);
    const indexPosition = this.state.negativeVerbs.indexOf(i);
    if (indexPosition === -1) {
      newNegativeVerbs.push(i);
    } else {
      newNegativeVerbs.splice(indexPosition, 1);
    }
    this.setState({ negativeVerbs: newNegativeVerbs });
    this.props.onChange({ negativeVerbs: newNegativeVerbs });
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.negativeVerbs !== this.state.negativeVerbs) {
      this.setState({ negativeVerbs: nextProps.negativeVerbs });
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
              checked={this.state.negativeVerbs.includes(i)}
              onChange={() => this.onChange(i)}
              value={verb}
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

NegativeVerbSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NegativeVerbSelect);
