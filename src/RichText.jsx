import React from 'react';
import { withStyles } from 'material-ui/styles';
import { zip, flatten, compact, range } from 'lodash';
import intersperse from 'intersperse';

import { Resource } from './Resource';
import { parseResource, resourceRegexNoCapture } from './utils';

const styles = (theme) => ({

});

class RichTextUnstyled extends React.Component {
  render() {
    const { classes, text } = this.props;
    const paddedText = ' ' + text + ' ';
    const regularTextNodes = paddedText.split(resourceRegexNoCapture);
    const resourceNodes = paddedText.match(resourceRegexNoCapture) || [];
    const content = range( Math.max(regularTextNodes.length, resourceNodes.length) ).reduce( (items, index) => {
      if (regularTextNodes[index]) {
        items.push(regularTextNodes[index]);
      }
      if (resourceNodes[index]) {
        const resource = parseResource(resourceNodes[index]);
        items.push(<Resource key={`resource-${index}`} {...resource} />);
      }
      return items;
    }, [] )

    content[content.length -1] = content[content.length -1].slice(0,  -1);

    return (<span>{content}</span>);
  }
}

export const RichText = withStyles(styles)(RichTextUnstyled);
