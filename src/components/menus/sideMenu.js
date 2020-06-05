import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Accessibility from '@material-ui/icons/Accessibility';
import Visibility from '@material-ui/icons/Visibility';
import RadioButtonChecked from '@material-ui/icons/RadioButtonChecked';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Refresh from '@material-ui/icons/Refresh';
import Config from '../../config';
import Utils from '../../utils';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  list: {
    width: 250,
  },
  listItemText: {
    'text-align': 'right',
  },
  subheader: {
    position: 'static',
  },
  progress: {
    'margin-top': '10px',
    'margin-right': '100px',
  },
});

class SideMenu extends React.Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    if (this.isLoading) return;
    this.setState({isOpen: !this.state.isOpen});
  };

  problemSelected = id => {
    this.props.onProblemSelected(id);
  };

  newProblemSelected = () => {
    this.props.clearDraft();
    this.props.onNewProblemSelected();
  };

  eyeTypesSelected = () => {
    this.props.onEyeTypesSelected();
  };

  mandalasSelected = () => {
    this.props.onMandalasSelected();
  };

  get isLoading() {
    let loading = this.props.creatingProblem || this.props.updatingProblem;
    loading = loading || this.props.deletingProblem || this.props.fetchingProblems;
    return loading;
  }

  render() {
    const {classes, problems} = this.props;
    const sortedProblems = Object.keys(problems || {})
      .map(id => ({
        problem: this.props.problems[id],
        id: id,
        updatedAt: this.props.problems[id].updatedAt,
      }))
      .sort((p1, p2) => (p1.updatedAt >= p2.updatedAt ? -1 : 1));
    const problemList = sortedProblems.map(({problem, id}) => (
      <div
        key={id}
        onClick={() => {
          this.problemSelected(id);
        }}>
        <ListItem button>
          <ListItemIcon>
            <LibraryBooks />
          </ListItemIcon>
          <ListItemText
            primary={Utils.truncate(problem.description, 15)}
            secondary={new Date(problem.updatedAt).toDateString()}
            className={classes.listItemText}
          />
        </ListItem>
        <Divider />
      </div>
    ));

    // Problems fetched ok
    let myProblemsSection;
    if (problemList.length) {
      myProblemsSection = (
        <div>
          <ListSubheader className={classes.subheader}>{Config.sideMenu.myProblems}</ListSubheader>
          {problemList}
        </div>
      );
    } else {
      myProblemsSection = <ListSubheader>{Config.sideMenu.emptyProblems}</ListSubheader>;
    }
    // Loading problems
    if (this.props.fetchingProblems) {
      myProblemsSection = (
        <CircularProgress className={classes.progress} thickness={5} color="primary" />
      );
    }
    // Error
    else if (this.props.fetchProblemsError) {
      myProblemsSection = (
        <div>
          <ListSubheader>{Config.sideMenu.errorProblems}</ListSubheader>
          <ListSubheader>{this.props.fetchProblemsError}</ListSubheader>
          <div onClick={this.props.fetchProblems}>
            <ListItem button>
              <ListItemIcon>
                <Refresh />
              </ListItemIcon>
              <ListItemText primary={Config.sideMenu.retryFetch} className={classes.listItemText} />
            </ListItem>
            <Divider />
          </div>
        </div>
      );
    }

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button onClick={this.newProblemSelected}>
            <ListItemIcon>
              <Accessibility />
            </ListItemIcon>
            <ListItemText primary={Config.sideMenu.newProblem} className={classes.listItemText} />
          </ListItem>
          <ListItem button onClick={this.eyeTypesSelected} className={classes.listItemText}>
            <ListItemIcon>
              <Visibility />
            </ListItemIcon>
            <ListItemText primary={Config.sideMenu.eyeTypes} />
          </ListItem>
          <ListItem button onClick={this.mandalasSelected} className={classes.listItemText}>
            <ListItemIcon>
              <RadioButtonChecked />
            </ListItemIcon>
            <ListItemText primary={Config.sideMenu.mandalas} />
          </ListItem>
          {myProblemsSection}
        </List>
      </div>
    );

    return (
      <IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
        <MenuIcon />
        <Drawer open={this.state.isOpen} onClose={this.toggleMenu}>
          <div tabIndex={0} role="button" onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
            {sideList}
          </div>
        </Drawer>
      </IconButton>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
