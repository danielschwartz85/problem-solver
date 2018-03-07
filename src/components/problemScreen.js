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
import Send from 'material-ui-icons/Email';
import { PAGES } from '../actions/routingActions';

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
    this.props.selectPage(PAGES['viewSavedProblem'], this.props.selectedProblemId);
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

  // NOTE: Temp feature
  handleSend = () => {
    const { problem } = this.props;
    Utils.transformationSentence(problem);
    const past = problem.pastVerbs.reduce((acc,i) => (
      acc += `, ${problem.verbs[i]}`
    ), "");
    const negative = problem.negativeVerbs.reduce((acc,i) => (
      acc += `, ${problem.verbs[i]}`
    ), "");
    let mailBody = `בעיה: ${problem.description}\n`;
    mailBody += `פעלים: ${problem.verbs.join(',')}\n`;
    mailBody += `פעלי עבר: ${past}\nפעלים עם קונוטצייה שלילית: ${negative}\n`;
    mailBody += `פעלי אתחול: ${Utils.transformationSentence(problem)}\n`;
    mailBody += `שם: ${problem.name}\nשם חדש: ${problem.newName}\n`;
    mailBody += `עבר דומינו: ${problem.pastDomino}\n`;
    mailBody += `עתיד דומינו: ${problem.futureDomino}\n`;
    mailBody += `פתרון בעיה: ${problem.problemPlanted}`;
    const subject = `הבעיה של ${problem.name}`;
    const lString = `mailto:berya3@gmail.com?subject=${subject}&body=${mailBody}`;
    window.location = lString.replace(/\n/g, escape('\r\n')+escape('\r\n'));
  }

  render() {
    const { classes, problem } = this.props;
    const { anchorEl } = this.state;
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
            <ListItemText inset primary={'שלח'} />
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
