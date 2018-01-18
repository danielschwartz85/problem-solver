import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Config from '../config';

const styles = theme => ({
  card: {
    width: '100%'
  },
  media: {
    height: 200,
  },
});

class WelcomeScreen extends React.Component {
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
        <CardMedia
          className={classes.media}
          image={Config.welcomeScreen.imageUrl}
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {Config.welcomeScreen.header}
          </Typography>
          {descriptions}
        </CardContent>
        <CardActions>
          <Button color="primary">
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
