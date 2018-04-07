import React from 'react';
import { withStyles } from 'material-ui/styles';
import { zip } from 'lodash';
import intersperse from 'intersperse';

import { Resource } from './Resource';
import { parseResource, resourceRegex } from './utils';

const styles = (theme) => ({

});

class RichTextUnstyled extends React.Component {
  render() {
    const { classes, text } = this.props;
    const paddedText = ' ' + text + ' ';
    const regularTextNodes = paddedText.split(resourceRegex);
    const resourceNodes = paddedText.match(resourceRegex) || [];
    const content = zip(
      regularTextNodes.map( text => (text + ' ') ),
      resourceNodes.map( (resourceText) => {
        const resource = parseResource(resourceText);
        return <Resource {...resource} />;
      } )
    );
    content[content.length -1] = content[content.length -1].substr(-1);

    console.log('regularTextNodes', regularTextNodes);
    return (<span>{text}</span>)
  }
}

export const RichText = withStyles(styles)(RichTextUnstyled);
