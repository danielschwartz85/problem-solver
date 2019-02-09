import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconHistory from '@material-ui/icons/History';
import IconReportProblem from '@material-ui/icons/ReportProblem';
import IconAccessibility from '@material-ui/icons/Accessibility';
import IconMoodBad from '@material-ui/icons/MoodBad';
import IconTransfer from '@material-ui/icons/TransferWithinAStation';
import IconAssignment from '@material-ui/icons/AssignmentInd';
import IconPermIdentity from '@material-ui/icons/PermIdentity';
import IconSquare from '@material-ui/icons/CropSquare';
import IconTriangle from '@material-ui/icons/ChangeHistory';
import Visibility from '@material-ui/icons/Visibility';
import Config from '../../config';
import Utils from '../../utils';

const styles = theme => ({
  tabs: {
    direction: 'ltr'
  }
});

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      {name: 'problem', icon: IconReportProblem, key: 'description'},
      {name: 'verbExtract', icon: IconAccessibility, key: 'verbs'},
      {name: 'pastVerbs', icon: IconHistory, key: 'pastVerbs'},
      {name: 'negativeVerbs', icon: IconMoodBad, key: 'negativeVerbs'},
      {name: 'transformation', icon: IconTransfer, key: 'transformationVerbs'},
      {name: 'name', icon: IconAssignment, key: 'name'},
      {name: 'newName', icon: IconPermIdentity, key: 'newName'},
      {name: 'pastDomino', icon: IconSquare, key: 'pastDomino'},
      {name: 'futureDomino', icon: IconTriangle, key: 'futureDomino'},
      {name: 'problemPlanted', icon: Visibility, key: 'problemPlanted'},
    ];
  }

  componentWillMount() {
    if (!this.props.draft && this.selectedPage !== 0) {
        this.props.onPageSelected(0);
    }
  }

  onPageSelected = (event, value) => {
    this.props.onPageSelected(value);
  }

  render() {
    if(!this.props.draft) return null;
    const { classes } = this.props;
    let firstInvalid;
    this.pages.some((page, i) => {
      firstInvalid = i;
      return !Utils.isValid(this.props.draft, this.pages[i].key);
    });

    const tabs = this.pages.map((page, i) => {
      const TabIcon = page.icon;
      const disabled = i > firstInvalid;
      return (
        <Tab
          key={Config.pages[page.name].tab.name}
          label={Config.pages[page.name].tab.name}
          icon={<TabIcon className={classes.icon}/>}
          disabled={disabled}
        />
      );
    });

    return (
      <Tabs
        className={classes.tabs}
        variant="scrollable"
        scrollButtons="auto"
        value={this.props.selectedPage}
        onChange={this.onPageSelected}
      >
        {tabs}
      </Tabs>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopMenu);
