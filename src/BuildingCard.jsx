import React from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import intersperse from 'intersperse';

import { grey } from 'material-ui/colors';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { RichText } from './RichText';
import { Resource } from './Resource';

import { isNull } from './utils';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    ...theme.typography.cardTitle,
    display: 'inline',
    marginRight: theme.spacing.unit,
    verticalAlign: 'middle',
  },
  cardText: {
    fontSize: theme.typography.cardFontSize,
  },
  content: {
    padding: theme.spacing.unit * 2,
  },
  image: {
    flex: 1
  },
  header: {
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'space-between',
  },
  cost: {
    textAlign: 'right',
    margin: `0 ${-theme.spacing.unit/2}px 0 0`,
    fontSize: theme.typography.cardFontSize,
  },
  costItem: {
    display: 'inline-block',
    margin: `0 ${theme.spacing.unit/2}px 0 ${theme.spacing.unit/2}px`
  },
  description: {
    color: grey[600],
    fontSize: theme.typography.cardFontSize,
  },
  inline: {
    display: 'inline',
  },
});

// "name": "Věž",
// "cost": "3k, 1d",
// "toughness": 3,
// "requirements": "Lze stavět pouze na Bránu nebo Věž ",
// "isUnderground": true,
// "description": "Dává prostor pro jednotku lučištníků, odkud může střílet na nepřítele před hradbami. ",
// "count": 6

class Building extends React.Component {
  render() {
    const { classes, name, cost, toughness, requirements, description, image, isUnderground } = this.props;

    const media = <CardMedia
      className={classes.image}
      image={image}
      title={name}
      subtitle={description}
    />;
    return (<Card className={classes.card} raised={false}>
      { isUnderground && media }
      <CardContent className={classes.content} >
        <div className={classes.header} >
          <div>
            <Typography component="span" className={classes.cardTitle} >{name}</Typography>
            { !isNull(toughness) && <Resource amount={toughness} type="toughness" /> }
          </div>
          { cost && (
            <Typography component="span" variant="body2" className={classes.cost}>{
              <RichText text={cost}/>
            }</Typography>
          )}
        </div>
        <Typography component="p" className={classes.description} gutterBottom={!isNull(requirements)}><em><RichText text={description}/></em></Typography>
        {!isNull(requirements) && <Typography className={classes.cardText} component="p">Požadavky: {requirements}</Typography>}
      </CardContent>
      { !isUnderground && media }
    </Card>);
  }
}

export const BuildingCard = withStyles(styles)(Building);
