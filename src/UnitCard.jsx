import React from 'react';
import { withStyles } from 'material-ui/styles';
import intersperse from 'intersperse';

import { grey } from 'material-ui/colors';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import { isNull, parseCost, inch } from './utils';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    ...theme.typography.cardTitle
  },
  cardText: {
    fontSize: theme.typography.cardFontSize,
  },
  content: {
    textAlign: 'center',
    flex: 1,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    background: 'rgba(255,255,255,0.8)',
  },
  imageWrapper: {
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  image: {
    flex: 1
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  stats: {
    padding: theme.spacing.unit / 2,
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '0 0.2cm 0 0',
  },
  statItem: {
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
  statIcon: {
    display: 'inline',
    height: '0.5cm',
    verticalAlign: 'middle',
  },
  statLabel: {
    fontWeight: 600,
    verticalAlign: 'middle',
    display: 'inline',
  },
  costs: {
    padding: theme.spacing.unit / 2,
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '0.2cm 0 0 0',
  },
});

// {
//   "name": "Pěchota",
//   "cost": "1ž, 1d, 1z",
//   "toughness": 3,
//   "defense": 1,
//   "attack": 1,
//   "range": 1,
//   "movement": 1,
//   "count": 6,
//   "requirements": "Kasárna, místo v kasárně",
//   "type": "Pěchota",
//   "description": "základní vojenská jednotka schopná útoku na blízko. +1 obrana proti jízdě. Mohou přemostit příkop. Mohou přistavit žebříky k hradbám.",
//   "image": "https://i.pinimg.com/originals/8c/e2/ae/8ce2aef26e4c0cd270a342f51a46a6d2.jpg"
// },

class UnitCardUnstyled extends React.Component {
  render() {
    const {
      classes,
      name,
      cost,
      toughness,
      defense,
      attack,
      range,
      movement,
      requirements,
      type,
      description,
      image
    } = this.props;

    console.log('this.props', this.props);

    const parsedCost = parseCost(cost);
    const costItems = Object.keys(parsedCost).filter( (costKey) => (parsedCost[costKey] > 0) );
    const hasStats = [
      cost,
      toughness,
      defense,
      attack,
      range,
      movement,
    ].some( (statItem) => !isNull(statItem) );

    return (<Card className={classes.card} raised={false}>
      <div className={classes.imageWrapper} >
        <CardMedia
          className={classes.image}
          image={image}
          title={name}
          subtitle={description}
        />
        <div className={classes.overlay} >
          { hasStats && (<div className={classes.stats} >
            {!isNull(toughness) && <div className={classes.statItem} >
              <img className={classes.statIcon} src="/static/toughness.png" />
              <Typography component="span" className={classes.statLabel}>{toughness}</Typography>
            </div>}
            {!isNull(defense) && <div className={classes.statItem} >
              <img className={classes.statIcon} src="/static/defense.png" />
              <Typography component="span" className={classes.statLabel}>{defense}</Typography>
            </div>}
            {!isNull(attack) && <div className={classes.statItem} >
              <img className={classes.statIcon} src="/static/attack.png" />
              <Typography component="span" className={classes.statLabel}>{attack}</Typography>
            </div>}
            {range > 1 && !isNull(range) && <div className={classes.statItem} >
              <img className={classes.statIcon} src="/static/range.png" />
              <Typography component="span" className={classes.statLabel}>{range}</Typography>
            </div>}
            {!isNull(movement) && <div className={classes.statItem} >
              <img className={classes.statIcon} src="/static/movement.png" />
              <Typography component="span" className={classes.statLabel}>{movement}</Typography>
            </div>}
          </div>) }
          <div className={classes.content} >
            <Typography component="h2" className={classes.cardTitle} >{name}</Typography>
          </div>
          { costItems.length > 1 && <div className={classes.costs} >
            { costItems.map( (costKey) => (
              <div className={classes.statItem} >
                <Typography component="span" className={classes.statLabel}>{parsedCost[costKey]}</Typography>
                <img className={classes.statIcon} src={`/static/${costKey}.png`} />
              </div>
            ) ) }
          </div> }
        </div>
      </div>
    </Card>);
  }
}

export const UnitCard = withStyles(styles)(UnitCardUnstyled);
