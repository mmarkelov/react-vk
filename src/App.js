import React from "react";
import PropTypes from "prop-types";

export default class Application extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    appId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      mode: PropTypes.number,
      height: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_app"
  };

  mount() {
    const { vk, elementId, appId, options } = this.props;
    vk.Widgets.App(elementId, appId, options);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
