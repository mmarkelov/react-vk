import React from "react";
import PropTypes from "prop-types";

export default class Recommended extends React.Component {
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

  mount() {
    const { vk, elementId, options } = this.props;
    vk.Widgets.Recommended(elementId, options);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
