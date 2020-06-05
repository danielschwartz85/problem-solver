import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  root: {
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: 350,
  },
});

class MandalaCard extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="eyes/flower-md.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Coming Soon...
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Soooooooon Sooooooooooooooon Soooooooooooooooooooon.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

MandalaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MandalaCard);
