import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Recommended extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      limit: PropTypes.number,
      max: PropTypes.number,
      period: PropTypes.string,
      verb: PropTypes.number,
      sort: PropTypes.string,
      target: PropTypes.string
    })
  };

  static defaultProps = {
    elementId: "vk_recommend",
    options: {
      limit: 5,
      max: 20,
      period: "week",
      sort: "friend_like",
      target: "parent"
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk } = this.context;
    const { elementId, options } = this.props;
    vk.Widgets.Recommended(elementId, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
