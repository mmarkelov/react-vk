import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Subscribe extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      mode: PropTypes.number,
      soft: PropTypes.number
    }),
    ownerId: PropTypes.number.isRequired,
    onSubscribe: PropTypes.func,
    onUnsubscribe: PropTypes.func
  };

  static defaultProps = {
    elementId: "vk_subscribe",
    options: {
      mode: 0,
      soft: 0
    },
    onSubscribe: () => {},
    onUnsubscribe: () => {}
  };

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    const { vk } = this.context;
    vk.Observer.unsubscribe("widgets.subscribed");
    vk.Observer.unsubscribe("widgets.unsubscribed");
  }

  mount() {
    const { vk } = this.context;
    const {
      elementId,
      options,
      ownerId,
      onSubscribe,
      onUnsubscribe
    } = this.props;
    vk.Widgets.Subscribe(elementId, options, ownerId);
    vk.Observer.subscribe("widgets.subscribed", onSubscribe);
    vk.Observer.subscribe("widgets.unsubscribed", onUnsubscribe);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
