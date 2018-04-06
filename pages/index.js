import React from 'react';
import PropTypes from 'prop-types';
import { set } from 'lodash';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';
import classnames from 'classnames';

import Typography from 'material-ui/Typography';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Divider from 'material-ui/Divider';

import withRoot from '../src/withRoot';

import { PrintSheet } from '../src/PrintSheet';
import { Layout } from '../src/Layout';
import { cards } from '../src/cards';

const styles = theme => (console.log('theme', theme), {
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0 -theme.spacing.unit * 2
  },
  formGroup: {
    margin: theme.spacing.unit * 2 + 'px',
    minWidth: 250
  },
  formGroupElements: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minMax(100px, 1fr))',
    gridColumnGap: theme.spacing.unit * 2 + 'px',
  },
  formControl: {
    marginBottom: theme.spacing.unit * 2
  },
  inputNumber: {
    textAlign: 'right'
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom  : theme.spacing.unit * 2,
  },
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
  card: {
    border: `1px solid ${grey[200]}`
  }
});

class Index extends React.Component {
  state = {
    card: {
      width: 6.35,
      height: 8.89
    },
    page: {
      width: 21,
      height: 29.7
    },
  };

  handleChange = path => event => {
    console.log('event.target', event.target);
    const value = event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value;
    const newState = set({...this.state}, path, value);
    this.setState(newState);
  };

  render() {
    const { classes } = this.props;
    const { open, card, page } = this.state;

    console.log('this.state', this.state);

    return (
      <Layout title="Card Prototyper">
        <form className={classnames(classes.hidePrint, classes.form)}>
          <div className={classes.formGroup}>
            <Typography variant="headline" gutterBottom component="h2" >Cards ({cards.length})</Typography>
            <div className={classes.formGroupElements} >
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="card-width">Width</InputLabel>
                <Input
                  id="card-width"
                  value={card.width}
                  type="number"
                  inputProps={{
                    className: classes.inputNumber,
                    min: 0.1,
                    step: 0.1,
                    max: page.width
                  }}
                  onChange={this.handleChange('card.width')}
                  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="card-height">Height</InputLabel>
                <Input
                  id="card-height"
                  value={card.height}
                  type="number"
                  min="0.1"
                  max={page.height}
                  inputProps={{
                    className: classes.inputNumber,
                    min: 0.1,
                    step: 0.1,
                    max: page.height
                  }}
                  onChange={this.handleChange('card.height')}
                  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                />
              </FormControl>
            </div>
          </div>

          <div className={classes.formGroup}>
            <Typography variant="headline" gutterBottom component="h2" >Page without margins</Typography>
            <div className={classes.formGroupElements} >
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="page-width">Width</InputLabel>
                <Input
                  id="page-width"
                  value={page.width}
                  type="number"
                  inputProps={{
                    className: classes.inputNumber,
                    min: 1,
                    step: 0.1,
                    max: 100
                  }}
                  onChange={this.handleChange('page.width')}
                  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="page-height">Height</InputLabel>
                <Input
                  id="page-height"
                  value={page.height}
                  type="number"
                  inputProps={{
                    className: classes.inputNumber,
                    min: 1,
                    step: 0.1,
                    max: 100
                  }}
                  onChange={this.handleChange('page.height')}
                  endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                />
              </FormControl>
            </div>
          </div>
        </form>
        <Divider className={classnames(classes.divider, classes.hidePrint)} />
        <PrintSheet items={cards} itemMargin={0} itemFormat={card} pageFormat={page} />
      </Layout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
