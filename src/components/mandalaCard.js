import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Config from '../config';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: '20px',
  },
  media: {
    height: '66vw',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class MandalaCard extends React.Component {
  constructor() {
    super();
    this._mandalas = Config.mandalasScreen.mandalas;
    this._colors = Config.mandalasScreen.colors;
    // TODO - switch state to redux
    this.state = {
      mandalaIndex: String(Math.random()).substr(2, 1) % this._mandalas.length,
      colorIndex: String(Math.random()).substr(2, 1) % this._colors.length,
      mode: 'start',
      showVerbs: false,
    };
    this._mandalaElem = React.createRef();
    this._actionsElement = null;
  }

  componentDidMount() {
    this._startMandalaShuffel();
    // preload images
    if (window._mandalaCached) {
      return;
    }

    for (const {image} of this._mandalas) {
      const img = new Image();
      img.src = image;
    }
    window._mandalaCached = true;
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
    if (this._isMode('start')) {
      this.setState({mode: 'mandala-shuffel'});
    }
    if (this._isMode('mandala-shuffel')) {
      this._stopShuffel();
      this.setState({mode: 'mandala-selected'});
    }
    if (this._isMode('color-shuffel')) {
      this._stopShuffel();
      this.setState({mode: 'color-selected', showVerbs: true});
      this._actionsElement &&
        this._actionsElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    if (this._isMode('color-selected')) {
      this.setState({mode: 'color-shuffel', showVerbs: false});
      this._startColorShuffel();
    }
    if (this._isMode('mandala-selected')) {
      this.setState({mode: 'mandala-shuffel'});
      this._startMandalaShuffel();
    }
  };

  onColorButtonClick = () => {
    this.setState({mode: 'color-shuffel'});
    this._startColorShuffel();
  };

  onRestartButtonClick = () => {
    this._stopShuffel();
    this._startMandalaShuffel();
    this.setState({mode: 'mandala-shuffel', showVerbs: false});
  };

  onShowVerbsClick = () => {
    this.setState(({showVerbs}) => ({showVerbs: !showVerbs}));
  };

  setActionsElement = actionsElement => {
    this._actionsElement = actionsElement;
  };

  _startMandalaShuffel = () => {
    this._mandalaElem.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    this._cancelShuffelId = setInterval(this._mandalaShuffel, this.props.mandalaShuffelSpeed);
  };

  _startColorShuffel = () => {
    this._mandalaElem.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    this._cancelShuffelId = setInterval(this._colorShuffel, this.props.colorShuffelSpeed);
  };

  _stopShuffel = () => {
    this._cancelShuffelId && clearInterval(this._cancelShuffelId);
  };

  _mandalaShuffel = () => {
    this.setState(({mandalaIndex}) => ({
      mandalaIndex: (mandalaIndex + 1) % this._mandalas.length,
    }));
  };

  _colorShuffel = () => {
    this.setState(({colorIndex}) => ({
      colorIndex: (colorIndex + 1) % this._colors.length,
    }));
  };

  _isMode(mode) {
    const modes = mode.constructor.name === 'Array' ? mode : [mode];
    return modes.includes(this.state.mode);
  }

  get currentColor() {
    return this._colors[this.state.colorIndex];
  }

  get mode() {
    return this.state.mode;
  }

  render() {
    const {classes} = this.props;
    const {mandalaIndex} = this.state;
    const mandala = this._mandalas[mandalaIndex];

    const content = (
      <Collapse in={!this._isMode(['mandala-shuffel', 'start'])}>
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
    let buttonColor = isImageColored ? this.currentColor.code : 'black';
    if (isImageColored) {
      buttonColor = this.currentColor.code !== '#ffffff' ? this.currentColor.code : 'gray';
    } else {
      buttonColor = 'black';
    }

    const showVerbsButton = this._isMode('color-selected') && (
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: this.state.showVerbs,
        })}
        style={{color: buttonColor}}
        onClick={this.onShowVerbsClick}
        aria-expanded={this.state.showVerbs}>
        <ExpandMoreIcon />
      </IconButton>
    );
    const cardActions = !this._isMode(['mandala-shuffel', 'start']) && (
      <CardActions>
        <Button
          ref={this.setActionsElement}
          size="small"
          className={classes.button}
          color="primary"
          onClick={this.onColorButtonClick}
          disabled={this._isMode('color-selected')}>
          {buttonText}
        </Button>
        <Tooltip title={Config.mandalasScreen.againText}>
          <IconButton onClick={this.onRestartButtonClick}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>
        {showVerbsButton}
      </CardActions>
    );

    const imageStyle = isImageColored ? {opacity: '15%'} : {};
    const imageRect =
      this._mandalaElem.current && this._mandalaElem.current.getBoundingClientRect();
    const layoutStyle = isImageColored
      ? {
          backgroundColor: this.currentColor.code,
          width: imageRect.width,
          height: imageRect.height,
          position: 'absolute',
          boxShadow: `inset 0px 0px 3px 0px rgba(255,255,255,1)`,
        }
      : {};

    // TODO - change style to adding classses way - o.w. this slows down React
    return (
      <Card className={classes.root}>
        {this._isMode('start') && <CardHeader subheader={Config.mandalasScreen.mainText} />}
        <CardActionArea onClick={this.onImageClick}>
          <div style={layoutStyle}></div>
          <CardMedia
            ref={this._mandalaElem}
            className={classes.media}
            image={this._isMode('start') ? Config.mandalasScreen.symbolImage : mandala.image}
            style={imageStyle}
          />
          {content}
        </CardActionArea>
        {cardActions}
        <Collapse in={this.state.showVerbs} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{this.currentColor.verbs.join(', ')}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MandalaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MandalaCard);
