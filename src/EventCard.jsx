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
  content: {
    padding: theme.spacing.unit * 2,
  },
  description: {
    color: grey[600],
    fontSize: theme.typography.cardFontSize,
  },
});

// {
//   "name": "Žold",
//   "count": 1,
//   "description": "Je na čase zaplatit vojákům žold 1zl za jednotku. Jednotky, na které nevyjde budou rozpuštěny."
// },

class EventCardUnstyled extends React.Component {
  render() {
    const { classes, name, description } = this.props;

    return (<Card className={classes.card} raised={false}>
      <CardContent className={classes.content} >
        <Typography component="h2" className={classes.cardTitle} gutterBottom >{name}</Typography>
        <Typography component="p" className={classes.description} ><em>{description}</em></Typography>
      </CardContent>
    </Card>);
  }
}

export const EventCard = withStyles(styles)(EventCardUnstyled);
