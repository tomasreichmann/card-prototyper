import React from 'react';
import { withStyles } from 'material-ui/styles';
import { range } from 'lodash';
import Paper from 'material-ui/Paper';
import classnames from 'classnames';

import { grey } from 'material-ui/colors';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';


const styles = theme => ({
  root: {
  },
  page: {
    position: 'relative',
    display: 'grid',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    pageBreakInside: 'avoid',
    margin: '0 auto',
    '@media screen': {
      margin: `${theme.spacing.unit * 4}px auto`,
      boxShadow: theme.shadows[5],
    },
    '@media print': {
      border: '0 !important'
    },
  },
  item: {
    border: `1px solid ${grey[200]}`
  },
  summary: {
    textAlign: 'center'
  },
  hidePrint: {
    '@media print': {
      display: 'none'
    },
  },
  pageNumber: {
    position: 'absolute',
    left: '50%',
    top: '100%',
    transform: 'translate(-50%, 50%)',
    boxShadow: theme.shadows[1]
  }
});

class PrintSheetUnstyled extends React.Component {

  static defaultProps = {
    limits: {
      itemsPerPage: 1000,
      pages: 100,
    },
    pageFormat: 'A4',
    itemFormat: 'pokercard',
    items: [],
    pageLandscape: false,
    itemLandscape: false,
    pageMargin: 1,
    itemMargin: 0.5,
    formatMap: {
      A4: {
        width: 21,
        height: 29.7
      },
      pokercard: {
        width: 6.35,
        height: 8.89
      },
      pokercard_half: {
        width: 6.35 / 2,
        height: 8.89 / 2
      },
      pokercard_2_3: {
        width: 6.35 / 3 * 2,
        height: 8.89 / 3 * 2
      },
    }
  }

  resolveFormat(format, landscape) {
    if (typeof format === 'string' && this.props.formatMap.hasOwnProperty(format)) {
      const resolvedFormat = this.props.formatMap[format];
      return landscape
        ? { width: resolvedFormat.height, height: resolvedFormat.width }
        : resolvedFormat;
    } else if (typeof format === 'object') {
      return format;
    }
    throw new Error('invalid format ' + format);
  }

  render() {
    const { limits, pageFormat, itemFormat, items, pageMargin, itemMargin, pageLandscape, itemLandscape, classes } = this.props;
    const page = this.resolveFormat(pageFormat, pageLandscape);
    const item = this.resolveFormat(itemFormat, itemLandscape);

    const printablePage = {
      width: page.width - pageMargin * 2,
      height: page.height - pageMargin * 2,
    };

    const itemsPerPageWith = Math.floor(printablePage.width / item.width);
    const itemsPerPageHeight = Math.floor(printablePage.height / item.height);
    const itemsPerPage = Math.min(itemsPerPageWith * itemsPerPageHeight, limits.itemsPerPage);

    const pageCount = Math.min(Math.ceil(items.length / itemsPerPage), limits.pages);

    return (<div className={classes.root}>
      <Typography gutterBottom component="p" variant="headline" className={classnames(classes.summary, classes.hidePrint)} >{itemsPerPage} items per page, {pageCount} pages in total</Typography>
      { range(pageCount).map( pageIndex => (
        <Paper key={pageIndex} elevation={0} className={classes.page} style={{
          width: page.width + 'cm',
          height: page.height + 'cm',
          border: `${pageMargin}cm solid ${grey[100]}`,
          gridTemplateColumns: `repeat(${itemsPerPageWith}, ${item.width}cm)`,
        }}>
          { range(Math.min(items.length - (pageIndex * itemsPerPage), itemsPerPage)).map( itemIndex => (
            <Paper key={itemIndex} elevation={0} className={classes.item} style={{
              width: item.width + 'cm',
              height: item.height + 'cm',
              padding: itemMargin + 'cm',
            }}>
              {items[pageIndex * itemsPerPage + itemIndex]}
            </Paper>
          ) ) }
          <Chip label={`${pageIndex + 1} / ${pageCount}`} className={classnames(classes.pageNumber, classes.hidePrint)} />
        </Paper>
      ) ) }
    </div>);
  }
}

export const PrintSheet = withStyles(styles)(PrintSheetUnstyled);
