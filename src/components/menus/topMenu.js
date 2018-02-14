import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import IconHistory from 'material-ui-icons/History';
import IconReportProblem from 'material-ui-icons/ReportProblem';
import IconAccessibility from 'material-ui-icons/Accessibility';
import IconMoodBad from 'material-ui-icons/MoodBad';
import IconTransfer from 'material-ui-icons/TransferWithinAStation';
import IconAssignment from 'material-ui-icons/AssignmentInd';
import IconPermIdentity from 'material-ui-icons/PermIdentity';
import IconSquare from 'material-ui-icons/CropSquare';
import IconTriangle from 'material-ui-icons/ChangeHistory';
import Visibility from 'material-ui-icons/Visibility';
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
      {name: 'problemPlanted', icon: Visibility, key: 'problemPlanted'},
      {name: 'futureDomino', icon: IconTriangle, key: 'futureDomino'},
      {name: 'pastDomino', icon: IconSquare, key: 'pastDomino'},
      {name: 'newName', icon: IconPermIdentity, key: 'newName'},
      {name: 'name', icon: IconAssignment, key: 'name'},
      {name: 'transformation', icon: IconTransfer, key: 'transformationVerbs'},
      {name: 'negativeVerbs', icon: IconMoodBad, key: 'negativeVerbs'},
      {name: 'pastVerbs', icon: IconHistory, key: 'pastVerbs'},
      {name: 'verbExtract', icon: IconAccessibility, key: 'verbs'},
      {name: 'problem', icon: IconReportProblem, key: 'description'}
    ];
  }

  onPageSelected = (event, value) => {
    this.props.onPageSelected(this.pages.length - value - 1);
  }

  render() {
    const { classes } = this.props;
    let firstInvalid;
    this.pages.some((page, i) => {
      const reversedIndex = this.pages.length - i - 1;
      firstInvalid = reversedIndex;
      const reversedPage = this.pages[reversedIndex];
      return !Utils.isValid(this.props.draft, reversedPage.key);
    });

    const tabs = this.pages.map((page, i) => {
      const TabIcon = page.icon;
      const disabled = i < firstInvalid;
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
        scrollable
        scrollButtons="auto"
        value={this.pages.length - this.props.selectedPage - 1}
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
