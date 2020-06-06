import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Config from '../config';
import Collapse from '@material-ui/core/Collapse';

const styles = () => ({
  root: {
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: '66vw',
  },
});

class MandalaCard extends React.Component {
  constructor() {
    super();
    const mandalas = Config.mandalasScreen.mandalas;
    this.state = {
      mandalas,
      index: parseInt(Math.random() * 10) % mandalas.length,
      isSelected: false,
    };
  }

  componentDidMount() {
    this._startShuffel();
  }

  componentWillUnmount() {
    this._stopShuffel();
  }

  componentDidUpdate({shuffelSpeed}, {isSelected}) {
    if (shuffelSpeed !== this.props.shuffelSpeed && !isSelected) {
      this._stopShuffel();
      this._startShuffel();
    }
  }

  _startShuffel = () => {
    this._cancelShuffelId = setInterval(this._shuffel, this.props.shuffelSpeed);
  };

  _stopShuffel = () => {
    this._cancelShuffelId && clearInterval(this._cancelShuffelId);
  };

  _toggleShuffel = () => {
    if (this.state.isSelected) {
      this._startShuffel();
    } else {
      this._stopShuffel();
    }
    this.setState(state => ({...state, isSelected: !state.isSelected}));
  };

  _shuffel = () => {
    this.setState(({mandalas, index}) => ({
      isSelected: false,
      mandalas,
      index: (index + 1) % mandalas.length,
    }));
  };

  render() {
    const {classes} = this.props;
    const {mandalas, index} = this.state;
    const mandala = mandalas[index];

    const content = (
      <Collapse in={this.state.isSelected}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {mandala.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {mandala.text}
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" component="p">
            {mandala.textEnd}
          </Typography>
        </CardContent>
      </Collapse>
    );

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={mandala.image}
            onClick={this._toggleShuffel}
          />
          {content}
        </CardActionArea>
      </Card>
    );
  }
}

MandalaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MandalaCard);
