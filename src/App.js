import React from "react";
import PropTypes from "prop-types";
import vkPropTypes from "./vkPropTypes";

export default class Application extends React.Component {
  static propTypes = {
    vk: vkPropTypes.isRequired,
    elementId: PropTypes.string,
    appId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      mode: PropTypes.oneOf([1, 2, 3]),
      height: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_app",
    options: {
      mode: 1
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, appId, options } = this.props;
    vk.Widgets.App(elementId, appId, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
