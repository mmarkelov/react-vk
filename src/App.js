import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Application extends React.Component {
  static contextType = VKContext;

  static propTypes = {
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
    const { vk } = this.context;
    const { elementId, appId, options } = this.props;
    vk.Widgets.App(elementId, appId, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
