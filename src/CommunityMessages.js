import React from 'react';
import PropTypes from 'prop-types';

export class CommunityMessages extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    groupId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      onCanNotWrite: PropTypes.func,
      welcomeScreen: PropTypes.oneOf([0, 1]),
      expandTimeout: PropTypes.number,
      expanded: PropTypes.number,
      widgetPosition: PropTypes.oneOf(['left', 'right']),
      buttonType: PropTypes.oneOf(['no_button', 'blue_circle']),
      disableButtonTooltip: PropTypes.oneOf([0, 1]),
      tooltipButtonText: PropTypes.string,
      disableNewMessagesSound: PropTypes.number,
      disableExpandChatSound: PropTypes.number,
      disableTitleChange: PropTypes.number,
    }),
  };

  static defaultProps = {
    elementId: 'vk_community_messages',
    options: {
      onCanNotWrite: reason => {},
      welcomeScreen: 1,
      expandTimeout: 0,
      expanded: 0,
      widgetPosition: 'right',
      buttonType: 'blue_circle',
      disableButtonTooltip: 0,
    },
  };

  state = {
    widget: null,
  };

  componentDidMount() {
    const { vk, elementId, groupId, options } = this.props;
    const widget = vk.Widgets.CommunityMessages(elementId, groupId, options);
    this.setState({ widget: widget });
  }

  render() {
    const { widget } = this.state;
    const { elementId, expand } = this.props;
    if (this.props.destroy) {
      widget.destroy(elementId);
    }
    if (expand && widget) widget.expand();
    if (!expand && widget) widget.minimize();
    return <div id={elementId} />;
  }
}
