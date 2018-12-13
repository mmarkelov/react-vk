import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Auth extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      authUrl: PropTypes.string,
      onAuth: PropTypes.func
    })
  };

  static defaultProps = {
    elementId: "vk_auth",
    options: {
      width: 300,
      onAuth: () => {}
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk } = this.context;
    const { elementId, options } = this.props;
    const copy = { ...options };
    copy.onAuth = (uid, first_name, last_name, photo, photo_rec, hash) =>
      options.onAuth(uid, first_name, last_name, photo, photo_rec, hash);
    vk.Widgets.Auth(elementId, copy);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
