import React from 'react';
import { withStyles } from 'material-ui/styles';
import intersperse from 'intersperse';

import { grey } from 'material-ui/colors';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
  },
  costItem: {
    display: 'inline-block',
    margin: `0 ${theme.spacing.unit/2}px 0 ${theme.spacing.unit/2}px`
  },
  description: {
    color: grey[600]
  },
});

// "name": "Věž",
// "cost": "3k, 1d",
// "toughness": 3,
// "requirements": "Lze stavět pouze na Bránu nebo Věž ",
// "description": "Dává prostor pro jednotku lučištníků, odkud může střílet na nepřítele před hradbami. ",
// "count": 6

class Building extends React.Component {
  render() {
    const { classes, name, cost, toughness, requirements, description, image } = this.props;
    return (<Card className={classes.card} raised={false}>
      <CardContent>
        <div className={classes.header} >
          <div>
            <Typography component="h2" variant="title" >{name}</Typography>
            {toughness !== '-' && <Typography variant="subheading" color="textSecondary">Odolnost:&nbsp;{toughness}</Typography> }
          </div>
          <Typography component="span" variant="body2" className={classes.cost}>{
            intersperse(cost.split(/\s*,\s*/).map( (costItem, index) => (
              <span key={index} className={classes.costItem}>{costItem}</span>
            ) ))
          }</Typography>
        </div>
        <Typography component="p" className={classes.description} gutterBottom={requirements !== '-'}><em>{description}</em></Typography>
        {requirements !== '-' && <Typography component="p">Požadavky: {requirements}</Typography>}
      </CardContent>
      <CardMedia
        className={classes.image}
        image={image}
        title={name}
        subtitle={description}
      />
    </Card>);
  }
}

export const BuildingCard = withStyles(styles)(Building);
