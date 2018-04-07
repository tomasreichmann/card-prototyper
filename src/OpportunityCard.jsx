import React from 'react';
import { withStyles } from 'material-ui/styles';
import intersperse from 'intersperse';

import { grey } from 'material-ui/colors';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import { isNull } from './utils';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    ...theme.typography.cardTitle
  },
  cardSubheading: {
    color: grey[500],
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: theme.typography.cardFontSize,
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
  },
  itemList: {
    margin: `0 ${-theme.spacing.unit/2}px`,
    fontSize: theme.typography.cardFontSize,
  },
  item: {
    display: 'inline-block',
    margin: `0 ${theme.spacing.unit/2}px 0 ${theme.spacing.unit/2}px`
  },
  costsAward: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  costs: {
    minWidth: '1cm',
  },
  verticalBorder: {
    width: 1,
    borderLeft: `1px solid ${grey[400]}`,
    margin: `0 ${theme.spacing.unit}px`,
  },
  award: {
    minWidth: '1cm',
    textAlign: 'right',
  },
  description: {
    color: grey[600],
    fontSize: theme.typography.cardFontSize,
  },
});

// {
//   "name": "Hradní osada",
//   "description": "(počáteční vesnice)",
//   "cost": "-",
//   "award": "1x kámen, 1x dřevo za kolo",
//   "notes": "kámen a dřevo každé kolo",
//   "type": "Osada",
//   "image": "https://pre00.deviantart.net/f26b/th/pre/f/2017/327/2/9/rog_scene_6_sketch2_by_lucy_lisett-dbum7pl.jpg"
// },

class OpportunityCardUnstyled extends React.Component {
  render() {
    const { classes, name, cost, award, description, image } = this.props;

    return (<Card className={classes.card} raised={false}>
      <CardMedia
        className={classes.image}
        image={image}
        title={name}
        subtitle={description}
      />
      <CardContent className={classes.content} >
        <Typography component="h2" className={classes.cardTitle} gutterBottom >{name}</Typography>
        <Typography component="p" className={classes.description} gutterBottom><em>{description}</em></Typography>
        <div className={classes.costsAward} >
          <div className={classes.costs} >
            { !isNull(cost) && (
              <div>
                <Typography component="h3" className={classes.cardSubheading} >Cena</Typography>
                <Typography component="span" variant="body2" className={classes.itemList}>{
                  intersperse(cost.split(/\s*,\s*/).map( (item, index) => (
                    <span key={index} className={classes.item}>{item}</span>
                  ) ))
                }</Typography>
              </div>
            )}
          </div>
          <div className={classes.verticalBorder} />
          <div className={classes.award} >
          { !isNull(award) && (
            <div>
              <Typography component="h3" className={classes.cardSubheading} >Odměna</Typography>
              <Typography component="span" variant="body2" className={classes.itemList}>{
                intersperse(award.split(/\s*,\s*/).map( (item, index) => (
                  <span key={index} className={classes.item}>{item}</span>
                ) ))
              }</Typography>
            </div>
          )}
          </div>
        </div>
      </CardContent>
    </Card>);
  }
}

export const OpportunityCard = withStyles(styles)(OpportunityCardUnstyled);
