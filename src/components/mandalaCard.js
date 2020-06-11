import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
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
    const {mandalas, colors} = Config.mandalasScreen;
    this.state = {
      mandalas,
      colors,
      mandalaIndex: parseInt(Math.random() * 10) % mandalas.length,
      colorIndex: parseInt(Math.random() * 10) % colors.length,
      mode: 'mandala-shuffel',
    };
    this._mandalaElem = React.createRef();
  }

  componentDidMount() {
    this._startMandalaShuffel();
  }

  componentWillUnmount() {
    this._stopShuffel();
  }

  componentDidUpdate({mandalaShuffelSpeed, colorShuffelSpeed}, {mode}) {
    if (mandalaShuffelSpeed !== this.props.mandalaShuffelSpeed && mode === 'mandala-shuffel') {
      this._stopShuffel();
      this._startMandalaShuffel();
    }
    if (colorShuffelSpeed !== this.props.colorShuffelSpeed && mode === 'color-shuffel') {
      this._stopShuffel();
      this._startColorShuffel();
    }
  }

  onImageClick = () => {
    if (this._isMode('mandala-shuffel')) {
      this._stopShuffel();
      this.setState({mode: 'mandala-selected'});
    }
    if (this._isMode('color-shuffel')) {
      this._stopShuffel();
      this.setState({mode: 'color-selected'});
    }
    if (this._isMode('color-selected')) {
      this.setState({mode: 'color-shuffel'});
      this._startColorShuffel();
    }
    if (this._isMode('mandala-selected')) {
      this.setState({mode: 'mandala-shuffel'});
      this._startMandalaShuffel();
    }
  };

  onColorButtonClick = () => {
    this._mandalaElem.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    this.setState({mode: 'color-shuffel'});
    this._startColorShuffel();
  };

  onRestartButtonClick = () => {
    this._mandalaElem.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    this._stopShuffel();
    this._startMandalaShuffel();
    this.setState({mode: 'mandala-shuffel'});
  };

  _startMandalaShuffel = () => {
    this._cancelShuffelId = setInterval(this._mandalaShuffel, this.props.mandalaShuffelSpeed);
  };

  _startColorShuffel = () => {
    this._cancelShuffelId = setInterval(this._colorShuffel, this.props.colorShuffelSpeed);
  };

  _stopShuffel = () => {
    this._cancelShuffelId && clearInterval(this._cancelShuffelId);
  };

  _mandalaShuffel = () => {
    this.setState(({mandalas, mandalaIndex}) => ({
      mandalaIndex: (mandalaIndex + 1) % mandalas.length,
    }));
  };

  _colorShuffel = () => {
    this.setState(({colors, colorIndex}) => ({
      colorIndex: (colorIndex + 1) % colors.length,
    }));
  };

  _isMode(mode) {
    return this.state.mode === mode;
  }

  get currentColor() {
    return this.state.colors[this.state.colorIndex];
  }

  get mode() {
    return this.state.mode;
  }

  render() {
    const {classes} = this.props;
    const {mandalas, mandalaIndex} = this.state;
    const mandala = mandalas[mandalaIndex];

    const content = (
      <Collapse in={!this._isMode('mandala-shuffel')}>
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

    const isImageColored = this._isMode('color-shuffel') || this._isMode('color-selected');
    const buttonText = isImageColored
      ? this.currentColor.name
      : Config.mandalasScreen.colorSelectText;
    const buttonColor = isImageColored ? this.currentColor.code : 'black';
    const buttons = !this._isMode('mandala-shuffel') && (
      <CardActions>
        <Button
          size="small"
          className={classes.button}
          color="primary"
          style={{color: buttonColor}}
          onClick={this.onColorButtonClick}
          disabled={this._isMode('color-selected')}>
          {buttonText}
        </Button>
        <Tooltip title={Config.mandalasScreen.againText}>
          <IconButton onClick={this.onRestartButtonClick}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    );

    const imageStyle = isImageColored ? {opacity: '25%'} : {};
    const imageRect =
      this._mandalaElem.current && this._mandalaElem.current.getBoundingClientRect();
    const layoutStyle = isImageColored
      ? {
          backgroundColor: this.currentColor.code,
          width: imageRect.width,
          height: imageRect.height,
          position: 'absolute',
        }
      : {};

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <div style={layoutStyle}></div>
          <CardMedia
            ref={this._mandalaElem}
            className={classes.media}
            image={mandala.image}
            onClick={this.onImageClick}
            style={imageStyle}
          />
          {content}
        </CardActionArea>
        {buttons}
      </Card>
    );
  }
}

MandalaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MandalaCard);
