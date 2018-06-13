import React from "react";
import PropTypes from "prop-types";

export default class Group extends React.Component {
  static propTypes = {
    vk: PropTypes.shape.isRequired,
    elementId: PropTypes.string,
    groupId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      height: PropTypes.number,
      mode: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      no_cover: PropTypes.oneOf([0, 1]),
      wide: PropTypes.oneOf([0, 1]),
      color1: PropTypes.string,
      color2: PropTypes.string,
      color3: PropTypes.string,
      pageImage: PropTypes.string
    }),
    onJoin: PropTypes.func,
    onLeave: PropTypes.func
  };

  static defaultProps = {
    elementId: "vk_groups",
    options: {
      width: "auto",
      mode: 3,
      no_cover: 1,
      wide: 1
    },
    onJoin: () => {},
    onLeave: () => {}
  };

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    const { vk } = this.props;
    vk.Observer.unsubscribe("widgets.groups.joined");
    vk.Observer.unsubscribe("widgets.groups.leaved");
  }

  mount() {
    const { vk, elementId, options, groupId, onJoin, onLeave } = this.props;
    vk.Widgets.Group(elementId, options, groupId);
    vk.Observer.subscribe("widgets.groups.joined", onJoin);
    vk.Observer.subscribe("widgets.groups.leaved", onLeave);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
