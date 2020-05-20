import React from 'react';
import { withStyles } from 'material-ui/styles';
import intersperse from 'intersperse';
import { range } from 'lodash';
import classnames from 'classnames';

import { grey } from 'material-ui/colors';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { Resource } from './Resource';
import { RichText } from './RichText';

import { isNull, resourceStringMap } from './utils';

const styles = (theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  graphic: {
    position: 'relative',
    flex: '1 1 auto',
  },
  overlay: {
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    left: 0,
    bottom: 0,
    right: 0,
  },
  placeholder: {
    width: '2cm',
    height: '2cm',
    borderRadius: '50%',
    border: `2px solid ${grey[600]}`,
    margin: theme.spacing.unit / 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(0,0,0,0.25)`,
  },
  image: {
    height: '100%',
  },
  content: {
    padding: theme.spacing.unit * 2,
    width: '4cm',
  },
  cardTitle: {
    ...theme.typography.cardTitle
  },
  description: {
    color: grey[600],
    fontSize: theme.typography.cardFontSize,
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
  advantage: {
    marginTop: theme.spacing.unit * 2,
  },
  disadvantage: {
    marginTop: theme.spacing.unit * 2,
  },
  startingResources: {
    marginTop: theme.spacing.unit * 2,
  },

});

// {
//   "name": "Lord",
//   "startingResources": "4x zlato",
//   "placeholderCount": 5,
//   "placeholderType": "zlato",
//   "advantage": "Má na výběr z 8 příležitostí a může podržet až 4 příležitosti do dalšího kola",
//   "disadvantage": "Lord ve své zásobě nemůže držet jiné suroviny než Zlato",
//   "description": "-",
//   "image": ""
// },

class CharacterCardUnstyled extends React.Component {
  render() {
    const {
      classes,
      name,
      advantage,
      disadvantage,
      description,
      startingResources,
      placeholderCount,
      placeholderType,
      image = 'https://orig00.deviantart.net/ee1c/f/2015/164/e/7/1_duke_janarrl_4_copia_11_by_almanegra-d8x4ecm.jpg'
    } = this.props;

    const placeholders = range(placeholderCount).map( (index) => (
      <div className={classes.placeholder} >
        <Resource type={resourceStringMap[placeholderType]} height="1.0cm"/>
      </div>
    ) );

    return (<Card className={classes.card} raised={false}>
      <div className={classes.graphic} >
        <CardMedia
          className={classes.image}
          image={image}
          title={name}
          subtitle={description}
        />
        <div className={classnames(classes.overlay, classes.placeholders)} >
          { placeholders }
        </div>
      </div>
      <CardContent className={classes.content} >
        <Typography component="h2" className={classes.cardTitle} gutterBottom >{name}</Typography>
        { !isNull(description) && (
          <Typography component="p" className={classes.description} gutterBottom><em>{description}</em></Typography>
        )}
        { !isNull(advantage) && (
          <div className={classes.advantage} >
              <Typography component="h3" className={classes.cardSubheading} >Výhoda</Typography>
              <Typography component="p" className={classes.cardText}><RichText text={advantage} /></Typography>
          </div>
        )}
        { !isNull(disadvantage) && (
          <div className={classes.disadvantage} >
            <Typography component="h3" className={classes.cardSubheading} >Postih</Typography>
            <Typography component="p" className={classes.cardText}><RichText text={disadvantage} /></Typography>
          </div>
        )}
        <div className={classes.startingResources} >
          <Typography component="h3" className={classes.cardSubheading} >Startovní suroviny</Typography>
          <Typography component="p" className={classes.cardText}>
            <RichText text={startingResources} />
          </Typography>
        </div>
      </CardContent>
    </Card>);
  }
}

export const CharacterCard = withStyles(styles)(CharacterCardUnstyled);
