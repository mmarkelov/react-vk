import React from "react";
import PropTypes from "prop-types";
import vkPropTypes from "./vkPropTypes";

export default class ContactUs extends React.Component {
  static propTypes = {
    vk: vkPropTypes.isRequired,
    elementId: PropTypes.string,
    options: PropTypes.shape({
      text: PropTypes.string,
      height: PropTypes.number
    }),
    ownerId: PropTypes.number.isRequired
  };

  static defaultProps = {
    elementId: "vk_contact_us",
    options: {
      height: 24
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, options, ownerId } = this.props;
    vk.Widgets.ContactUs(elementId, options, -ownerId);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
