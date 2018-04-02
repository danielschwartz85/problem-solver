import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Config from '../config';
import Utils from '../utils';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import DeleteForever from 'material-ui-icons/DeleteForever';
import Edit from 'material-ui-icons/Edit';
import Send from 'material-ui-icons/Send';

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    height: 200,
  },
  burger: {
    color: theme.palette.common.white
  },
  menu: {
    'margin-top': '20px'
  }
});

class ProblemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  onViewProblemClicked = () => {
    // viewSavedProblem was here by id
  }

  handleEdit = () => {
    this.handleClose();
    this.props.onEdit();
    this.props.selectAndShowEditor(this.props.selectedProblemId);
  }

  handleDelete = () => {
    this.handleClose();
    this.props.deleteAndShowWelcome(this.props.selectedProblemId);
  }

  handleSend = () => {
    const mailBody = Utils.problemToText(this.props.problem);
    const subject = Utils.problemToSubject(this.props.problem);
    const lString = `mailto:?subject=${subject}&body=${mailBody}`;
    window.location = lString.replace(/\n/g, escape('\r\n')+escape('\r\n'));
  }

  render() {
    const { classes } = this.props;
    const problem = this.props.problems[this.props.selectedProblemId];
    const { anchorEl } = this.state;
    if (!problem) return null;
    const menu = (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.burger}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className={classes.menu}
        >
          <MenuItem onClick={this.handleEdit}>
            <ListItemIcon>
              <Edit/>
            </ListItemIcon>
            <ListItemText inset primary={Config.problemScreen.editText} />
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleDelete}>
            <ListItemIcon>
              <DeleteForever />
            </ListItemIcon>
            <ListItemText inset primary={Config.problemScreen.deleteText} />
          </MenuItem>
          <MenuItem onClick={this.handleSend}>
            <ListItemIcon>
              <Send/>
            </ListItemIcon>
            <ListItemText inset primary={Config.problemScreen.sendText} />
          </MenuItem>
        </Menu>
      </div>
    );

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image="cardBgrd.jpg" >
          {menu}
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {Utils.truncate(problem.problemPlanted || problem.description, 150)}
          </Typography>
          <Typography type="subheading" color="secondary">
            {Utils.problemTypeSentence(problem)}
          </Typography>
          <Typography component="p">
            {Utils.transformationSentence(problem)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={this.onViewProblemClicked}>
            {Config.problemScreen.showBookText}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProblemScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProblemScreen);
