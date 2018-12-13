import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class AllowMessagesFromCommunity extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      height: PropTypes.number
    }),
    groupId: PropTypes.number.isRequired,
    onAllow: PropTypes.func,
    onDeny: PropTypes.func
  };

  static defaultProps = {
    elementId: "vk_send_message",
    options: {
      height: 24
    },
    onAllow: () => {},
    onDeny: () => {}
  };

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    const { vk } = this.context;
    vk.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed");
  }

  mount() {
    const { vk } = this.context;
    const { elementId, options, groupId, onAllow, onDeny } = this.props;
    vk.Widgets.AllowMessagesFromCommunity(elementId, options, groupId);
    vk.Observer.subscribe(
      "widgets.allowMessagesFromCommunity.allowed",
      userId => onAllow(userId)
    );
    vk.Observer.subscribe("widgets.allowMessagesFromCommunity.denied", userId =>
      onDeny(userId)
    );
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
