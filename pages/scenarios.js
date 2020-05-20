import React from 'react';
import PropTypes from 'prop-types';
import { range, set } from 'lodash';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import { grey } from 'material-ui/colors';

import withRoot from '../src/withRoot';

import { Layout } from '../src/Layout';
import { PrintSheet } from '../src/PrintSheet';

const styles = theme => ({
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
  page: {
    width: '21cm',
    height: '29.7cm',
    margin: '0 auto',
    '@media screen': {
      margin: `${theme.spacing.unit * 4}px auto`,
      boxShadow: theme.shadows[5],
    },
  },
  card: {
    padding: theme.spacing.unit * 4,
    border: `1px solid ${grey[200]}`
  },
  dialogue: {
    fontStyle: 'italic',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 4}px`,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: `0 ${theme.spacing.unit / 2}px`,
  },
  slide: {
    flex: '1 1 auto',
    position: 'relative',
    height: '5cm',
    margin: theme.spacing.unit / 2,
  },
  slideFull: {
    height: '5cm',
    flexBasis: '100%'
  },
  slide3: {
    flexGrow: 3,
    flexShrink: 2,
    flexBasis: '35%',
  },
  slide2: {
    flexGrow: 2,
    flexShrink: 3,
    flexBasis: '35%',
  },
  slideMedia: {
    width: '100%',
    height: '100%',
  },
  slideText: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    padding: theme.spacing.unit,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  slideTextPara: {
    color: '#fff',
  }
});

class Scenarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { classes } = this.props;
    const { count } = this.state;

    const scenarios = [
      <Card key="1">
        <CardHeader title="Scénář 1. - Na Zelené louce" />
        <div className={classes.row} >
          <div className={classnames(classes.slide, classes.slide2)} >
            <CardMedia className={classes.slideMedia} image="http://www.drawingsociety.com/dscgallery/images/drawingmasters_pics/john_howe/beowulfs_funeral_lg.jpg" />
            <Typography className={classes.slideText} >
              Smuteční průvod se pomalu proplétá potemnělým městem. V čele stříbrem zdobená rakev s reliéfem krále Ludvíka. Hned za ní kráčí Královna Kateřina, celá v černém. Vy jí následujete v doprovodu ostatních šlechticů. Spíš než nářky slyšíte mezi aristokraty drby.
            </Typography>
          </div>
          <div className={classnames(classes.slide, classes.slide3)} >
            <CardMedia className={classes.slideMedia} image="https://i.pinimg.com/736x/0a/4d/d0/0a4dd0069ef1af4104df1e4127f3ee5a--role-playing-games-fantasy-pictures.jpg" />
            <div className={classes.slideText} >
              <Typography gutterBottom className={classes.slideTextPara} >
                "Bez dědiců neměla královna jinou možnost, než vzít žezlo do ruky sama. Nebo byste snad na trůně chtěl radši Ludvíkova strýce Ondřeje?"
              </Typography>
              <Typography className={classes.slideTextPara} >
                "Král byl tak dlouho nemocen, nepřátelům naší říše to jistě neuniklo. Slyšel jsem, že Skaldie už volá do zbraně."
              </Typography>
            </div>
          </div>
          <div className={classnames(classes.slide, classes.slide3)} >
            <CardMedia className={classes.slideMedia} image="https://cdna.artstation.com/p/assets/images/images/008/422/322/large/sylvain-sarrailh-williametteartstation.jpg?1512658135" />
            <Typography className={classes.slideText} >
              Druhý den pro vás královna poslala, abyste se dostavili k výjimečnému královskému sněmu. Vášnivé debaty o budoucnosti království trvaly dlouho do noci. Královna nakonec rozhodla, že se musíme připravit na brzský vpád nepřátel a urychleně vystavět několik hraničních pevností.
            </Typography>
          </div>
          <div className={classnames(classes.slide, classes.slide2)} >
            <CardMedia className={classes.slideMedia} image="https://cdna.artstation.com/p/assets/images/images/008/422/322/large/sylvain-sarrailh-williametteartstation.jpg?1512658135" />
            <Typography className={classes.slideText} >
              Vaše skupina dostala za úkol vypravit karavanu se stavebním materiálem a položit základní kámen na kopci Zelená Louka. Máte před sebou několik dní cesty po venkově. Je na čase vyrazit.
            </Typography>
          </div>
        </div>
      </Card>
    ];

    return (
      <Layout >
        <Typography style={{textAlign: 'center'}} variant="display1" gutterBottom component="h1" className={classes.hidePrint}>Scenarios</Typography>
        <Paper
        className={classes.page}
          elevation={0}
        >
          {scenarios}
        </Paper>
      </Layout>
    );
  }
}

Scenarios.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Scenarios));
