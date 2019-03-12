import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Utils from '../utils';
import {LightGreen} from '../components/themes';
import Config from '../config';

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class BadActionsCard extends React.Component {
  state = {expanded: false};

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}));
  };

  render() {
    const {classes} = this.props;
    let badActions;
    if (this.props.eyeTypes.length) {
      badActions = this.props.eyeTypes.map(t => (
        <div key={t.name}>
          <Typography paragraph>{t.name}</Typography>
          <Typography paragraph>{Utils.joinWithCommas(t.actions)}</Typography>
        </div>
      ));
    } else {
      badActions = <Typography paragraph>{Config.badActions.empty}</Typography>;
    }

    return (
      <LightGreen>
        <Card>
          <CardActions className={classes.actions} disableActionSpacing>
            {Config.badActions.title}
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>{badActions}</CardContent>
          </Collapse>
        </Card>
      </LightGreen>
    );
  }
}

BadActionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BadActionsCard);
