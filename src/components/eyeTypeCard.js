import React, {useMemo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Config from '../config';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Switch from '@material-ui/core/Switch';
import Utils from '../utils';
import {LightGreen} from './themes';

const useStyles = makeStyles({
  media: {
    height: 194,
  },
  switch: {
    float: 'right',
  },
});

// React seems to re-render EyeTypeCard even though the props are the same and 'areEqualCards' returns true
// This might be unsolvable since React deciedes when to render after all my recomendations.
const areEqualCards = (prevProps, nextProps) => prevProps.selected === nextProps.selected;

const EyeTypeCard = React.memo(props => {
  console.log('props', props.name);
  const classes = useStyles();
  const onChange = event => {
    props.onChange(event.target.checked);
  };

  const contentPanels = useMemo(
    () =>
      ['color', 'description', 'actions']
        .filter(k => props[k] && props[k] !== '')
        .map((key, i) => (
          <ExpansionPanel key={`${key}-${i}`}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                {Config.eyeTypesScreen.headers[key]}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {!Array.isArray(props[key]) ? props[key] : Utils.joinWithCommas(props[key])}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )),
    [props.color, props.description, props.actions],
  );

  const title = (
    <div>
      <span>{props.name}</span>
      <Switch
        className={classes.switch}
        checked={props.selected}
        onChange={onChange}
        value="1"
        color="secondary"
      />
    </div>
  );

  return (
    <LightGreen>
      <Card>
        <CardHeader title={title} />
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography component="p">{props.origin}</Typography>
        </CardContent>
        {contentPanels}
      </Card>
    </LightGreen>
  );
}, areEqualCards);

export default EyeTypeCard;
