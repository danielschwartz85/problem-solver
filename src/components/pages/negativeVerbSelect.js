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
  onChange = (i) => {
    const newNegativeVerbs = this.props.negativeVerbs.slice(0);
    const indexPosition = this.props.negativeVerbs.indexOf(i);
    if (indexPosition === -1) {
      newNegativeVerbs.push(i);
    } else {
      newNegativeVerbs.splice(indexPosition, 1);
    }
    this.props.onChange({ negativeVerbs: newNegativeVerbs });
  }

  render() {
    const { classes } = this.props;
    const verbItems = this.props.verbs.map(([verb, i]) => (
      <div key={verb}>
        <ListItem button onClick={() => this.onChange(i)}>
          <ListItemText primary={verb} />
          <ListItemSecondaryAction>
            <Checkbox
              checked={this.props.negativeVerbs.includes(i)}
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
