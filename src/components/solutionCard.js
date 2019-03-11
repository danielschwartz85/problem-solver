import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Config from '../config';

const styles = theme => ({
  media: {
    height: 194,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class SolutionCard extends React.Component {
  render() {
    const {classes, content} = this.props;
    const contentPanels = Object.keys(content).map((key, i) => (
      <ExpansionPanel key={`${content[key]}-${i}`}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {Config.solutionScreen.problemKeyNames[key]}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{content[key]}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ));

    return (
      <Card className={classes.card}>
        <CardHeader title={this.props.header} subheader={this.props.subHeader} />
        <CardMedia className={classes.media} image={this.props.imageUrl} />
        <CardContent>
          <Typography component="p">{this.props.description}</Typography>
        </CardContent>
        {contentPanels}
      </Card>
    );
  }
}

SolutionCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SolutionCard);
