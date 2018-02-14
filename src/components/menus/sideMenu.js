import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Divider from 'material-ui/Divider';
import LibraryAdd from 'material-ui-icons/LibraryAdd';
import LibraryBooks from 'material-ui-icons/LibraryBooks';
import Config from '../../config';
import Utils from '../../utils';
import { PAGES } from '../../actions/routingActions';

const styles = theme => ({
  list: {
    width: 250
  }
});

class SideMenu extends React.Component {
  state = {
    isOpen: false
  }

  toggleMenu = (e, i) => {
    this.setState({isOpen: !this.state.isOpen});
  }

  problemSelected = (id) => {
    this.props.selectPage(PAGES['savedProblem'], id);
    this.props.onProblemSelected();
  }

  newProblemSelected = () => {
    this.props.clearDraft();
    this.props.selectPage(PAGES['editor'], null);
    this.props.onNewProblemSelected();
  }

  render() {
    const { classes, problems } = this.props;
    const sortedProblems = Object.keys(problems || {}).map(id => ({
        problem: this.props.problems[id],
        id: id,
        updatedAt: this.props.problems[id].updatedAt
      })).sort((p1, p2) => p1.updatedAt >= p2.updatedAt ? -1 : 1);
    const problemList = sortedProblems.map(p => {
      const problem = p.problem;
      const id = p.id;
      return (
        <div key={id} onClick={() => {this.problemSelected(id)}}>
          <ListItem button>
            <ListItemIcon>
              <LibraryBooks/>
            </ListItemIcon>
            <ListItemText
              primary={Utils.truncate(problem.description, 15)}
              secondary={new Date(problem.updatedAt).toDateString()}
            />
          </ListItem>
          <Divider />
        </div>
      );
    });
    let myProblemsSection;
    if (problemList.length) {
      myProblemsSection = (
        <div>
          <ListSubheader>{Config.sideMenu.myProblems}</ListSubheader>
          {problemList}
        </div>
      );
    } else {
      myProblemsSection = (
        <ListSubheader>{Config.sideMenu.emptyProblems}</ListSubheader>
      );
    }

    const sideList = (
     <div className={classes.list}>
       <List>
         <ListItem button onClick={this.newProblemSelected}>
           <ListItemIcon>
             <LibraryAdd />
           </ListItemIcon>
           <ListItemText primary={Config.sideMenu.newProblem}/>
         </ListItem>
         {myProblemsSection}
       </List>
     </div>
   );

   return (
     <IconButton
       color="contrast"
       aria-label="Menu"
       onClick={this.toggleMenu}
     >
       <MenuIcon/>
       <Drawer
         anchor="right"
         open={this.state.isOpen}
         onClose={this.toggleMenu}
       >
         <div
           tabIndex={0}
           role="button"
           onClick={this.toggleMenu}
           onKeyDown={this.toggleMenu}
         >
           {sideList}
         </div>
       </Drawer>
     </IconButton>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SideMenu);
