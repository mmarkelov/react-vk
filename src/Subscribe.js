import React from "react";
import PropTypes from "prop-types";

export default class Subscribe extends React.Component {
  static propTypes = {
    vk: PropTypes.shape.isRequired,
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
    const { vk } = this.props;
    vk.Observer.unsubscribe("widgets.subscribed");
    vk.Observer.unsubscribe("widgets.unsubscribed");
  }

  mount() {
    const {
      vk,
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
