import React from 'react';
import PropTypes from 'prop-types';

export class Auth extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      authUrl: PropTypes.string,
    }),
    onAuth: PropTypes.func,
  };

  static defaultProps = {
    elementId: 'vk_auth',
    options: {
      width: 300,
      onAuth: () => {},
    },
  };

  mount() {
    const { vk, elementId, options } = this.props;
    let copy = { ...options };
    copy.onAuth = (uid, first_name, last_name, photo, photo_rec, hash) =>
      options.onAuth(uid, first_name, last_name, photo, photo_rec, hash);
    vk.Widgets.Auth(elementId, copy);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
