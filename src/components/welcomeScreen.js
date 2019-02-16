import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Config from '../config';

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    height: 200,
  }
});

class WelcomeScreen extends React.Component {
  onNewProblemSelected = () => {
    this.props.clearDraft();
    this.props.onNewProblemSelected();
  }

  render() {
    const { classes } = this.props;
    let lastLineIndex = Config.welcomeScreen.descriptions.length - 1;
    let descriptions = Config.welcomeScreen.descriptions.map((desc, i) => (
      <Typography paragraph={lastLineIndex === i} key={i}>
        {desc}
      </Typography>
    ));
    descriptions.push(
      <Typography key='signature'>
        {Config.welcomeScreen.descriptionSignature}
      </Typography>
    );

    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={`/${process.env.REACT_APP_SITE_PATH}/welcome.jpg`} />
        <CardContent>
          <Typography type="headline" component="h2">
            {Config.welcomeScreen.header}
          </Typography>
          {descriptions}
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={this.onNewProblemSelected}>
            {Config.welcomeScreen.newProblemText}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

WelcomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeScreen);
