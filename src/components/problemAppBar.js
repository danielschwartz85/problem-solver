import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SideMenuContainer from '../containers/sideMenu';
import TopMenuContainer from '../containers/topMenu';

const styles = theme => ({
  root: {
    flex: {
      flex:1
    },
    flexGrow: 1,
    width: '100%',
    marginTop: '32px',
  },
  appbar: {
    height: '72px'
  }
});

class ProblemAppBar extends React.Component {
  onNewProblemSelected = () => {
    this.props.onNewProblemSelected();
  }

  onProblemSelected = (id) => {
    this.props.onProblemSelected(id);
  }

  onEditorPageSelected = (event, value) => {
    this.props.onEditorPageSelected(event, value)
  }

  // todo
  // complete top menu routing (new and edit) .. maybe use regex path in App
  // then tie listeners in app (i think) to make route changes
  // stuff like user clicks next.. need to route change..
  render() {
    const { classes, router } = this.props;
    let topMenu;
    if (router.url.match(/edit|new/)) {
      topMenu = (
        <TopMenuContainer
          selectedPage={router.params.editorPage}
          onPageSelected={this.onEditorPageSelected}
        />
      );
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar className={classes.appbar}>
            <SideMenuContainer
              onProblemSelected={this.onProblemSelected}
              onNewProblemSelected={this.onNewProblemSelected}
            />
            {topMenu}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ProblemAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProblemAppBar);
