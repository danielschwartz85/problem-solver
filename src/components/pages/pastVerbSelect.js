import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  checked: {
    'color': theme.palette.primary[500],
    'text-align': 'right'
  }
});

class PastVerbSelect extends React.Component {
  onChange = (i) => {
    const newPastVerbs = this.props.pastVerbs.slice(0);
    const indexPosition = this.props.pastVerbs.indexOf(i);
    if (indexPosition === -1) {
      newPastVerbs.push(i);
    } else {
      newPastVerbs.splice(indexPosition, 1);
    }
    this.props.onChange({ pastVerbs: newPastVerbs });
  }

  render() {
    const { classes } = this.props;
    const verbItems = this.props.verbs.filter(v => !!v).map((verb, i) => (
      <div key={verb}>
        <ListItem button onClick={() => this.onChange(i)}>
          <ListItemText primary={verb} />
          <ListItemSecondaryAction>
            <Checkbox
              value={verb}
              checked={this.props.pastVerbs.includes(i)}
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
