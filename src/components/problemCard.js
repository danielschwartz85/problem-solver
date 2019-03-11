import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Config from '../config';
import Utils from '../utils';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';

const styles = theme => ({
  card: {
    width: '100%',
    'margin-bottom': '20px',
  },
  media: {
    height: 200,
  },
  burger: {
    color: theme.palette.common.white,
  },
  menu: {
    'margin-top': '20px',
  },
});

class ProblemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const problemText = this.props.description;
    const verbs = this.props.verbs;
    const updatedAt = this.props.updatedAt;
    const menu = (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.burger}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className={classes.menu}>
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText inset primary={Config.problemCard.editText} />
          </MenuItem>
          <MenuItem className={classes.menuItem} onClick={this.handleClose}>
            <ListItemIcon>
              <DeleteForever />
            </ListItemIcon>
            <ListItemText inset primary={Config.problemCard.deleteText} />
          </MenuItem>
        </Menu>
      </div>
    );

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={Config.problemCard.imageUrl}>
          {menu}
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {Utils.truncate(problemText, 150)}
          </Typography>
          <Typography type="subheading" color="secondary">
            {`שונה לאחרונה ב ${updatedAt.toDateString()}`}
          </Typography>
          <Typography component="p">{Utils.joinWithCommas(verbs)}</Typography>
        </CardContent>
        <CardActions>
          <Button color="primary">{Config.problemCard.showBookText}</Button>
        </CardActions>
      </Card>
    );
  }
}

ProblemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProblemCard);
