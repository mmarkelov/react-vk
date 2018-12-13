import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class ContactUs extends React.Component {
  static contextType = VKContext;

  static propTypes = {
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
    const { vk } = this.context;
    const { elementId, options, ownerId } = this.props;
    vk.Widgets.ContactUs(elementId, options, -ownerId);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
