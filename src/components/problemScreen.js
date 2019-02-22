import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Config from '../config';
import Utils from '../utils';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';
import Send from '@material-ui/icons/Send';
import Share from '@material-ui/icons/Share';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

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
  },
  progress: {
    marginTop: 50
  },
  snackbar: {
    'margin-top': '72px',
    'z-index': 1
  },
});

class ProblemScreen extends React.Component {
  // We are using 'loading' and not redux 'deletingProblem'
  // since we need to know when the fetch after delete is done also.
  state = {
    anchorEl: null,
    showErrorMessage: false,
    loading: false
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  onViewProblemClicked = () => {
    this.props.onSolutionSelected();
  }

  handleEdit = () => {
    this.handleClose();
    this.props.selectDraft(this.props.selectedProblemId);
    this.props.onEditorSelected();
  }

  handleDelete = () => {
    this.handleClose();
    this.setState({ loading: true });
    this.props.deleteAndFetch(this.props.selectedProblemId).then(() => {
      this.setState({ showErrorMessage: false, loading: false });
      this.props.onHomeSelected();
    }).catch(e => {
      this.setState({ showErrorMessage: true, loading: false });
    });
  }

  handleSend = () => {
    const mailBody = Utils.problemToText(this.problem);
    const subject = Utils.problemToTitleText(this.problem);
    const lString = `mailto:?subject=${subject}&body=${mailBody}`;
    window.location = lString.replace(/\n/g, escape('\r\n')+escape('\r\n'));
  }

  handleShare = () => {
    const problem = Utils.problemToText(this.problem);
    const title = Config.problemScreen.shareTitle;
    const url = `${Utils.problemUrl()} ${Config.problemScreen.shareUrlPrefix}`;
    console.log(`${title}\n${problem}\n${url}`)
    window.location = `whatsapp://send?text=${title}\n${problem}\n${url}`.replace(/\n/g, escape('\r\n')+escape('\r\n'));
  }

  get problem() {
    return this.props.problems && this.props.problems[this.props.selectedProblemId];
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    if (!this.problem) return null;
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
          <MenuItem onClick={this.handleShare}>
            <ListItemIcon>
              <Share/>
            </ListItemIcon>
            <ListItemText inset primary={Config.problemScreen.shareText} />
          </MenuItem>
        </Menu>
      </div>
    );

    const retryButton = (
      <Button color="accent" size="small" onClick={this.handleDelete}>
        {Config.problemScreen.retryDeleteText}
      </Button>
    );
    let snackbarMessage = Config.problemScreen.deleteErrorMessage;
    snackbarMessage += ` ${this.props.deleteProblemError}`;

    let card = (
      <Card className={classes.card}>
        <Snackbar className={classes.snackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={this.state.showErrorMessage}
          onClose={() => { this.setState({ showErrorMessage: false }) }}
          autoHideDuration={10000}
          message={<span id="message-id">{snackbarMessage}</span>}
          action={retryButton}
        />
        <CardMedia className={classes.media} image={`/${process.env.REACT_APP_SITE_PATH}/welcome.jpg`} >
          {menu}
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {Utils.truncate(this.problem.problemPlanted || this.problem.description, 150)}
          </Typography>
          <Typography type="subheading" color="textSecondary">
            {Utils.problemTypeSentence(this.problem)}
          </Typography>
          <Typography component="p">
            {Utils.transformationSentence(this.problem)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this.onViewProblemClicked}>
            {Config.problemScreen.showBookText}
          </Button>
        </CardActions>
      </Card>
    );

    // Loading indicator for delete
    if(this.state.loading) {
      card = (
        <Grid container direction="column" align="center">
          <Grid item>
            <CircularProgress
              className={classes.progress}
              thickness={5}
              color="primary"
            />
          </Grid>
        </Grid>
      );
    }

    return card;
  }
}

ProblemScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProblemScreen);
