import React, {Component, PropTypes} from 'react';
import transitions from 'material-ui/styles/transitions';

function getStyles(props, context) {
  const {inkBar} = context.muiTheme;

  return {
    root: {
      zIndex: 1000,
      top: props.top,
      height: props.height,
      bottom: 0,
      display: 'block',
      backgroundColor: props.color || inkBar.backgroundColor,
      width: 4,
      marginRight: -4,
      position: 'relative',
      transition: transitions.easeOut('1s', 'top'),
    },
  };
}

class InkBar extends Component {
  static propTypes = {
    color: PropTypes.string,
    top: PropTypes.string.isRequired,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    height: PropTypes.string.isRequired,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {style} = this.props;
    const {prepareStyles} = this.context.muiTheme;
    const styles = getStyles(this.props, this.context);

    return (
      <div style={prepareStyles(Object.assign(styles.root, style))} />
    );
  }
}

export default InkBar;
