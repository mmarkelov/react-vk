import React from 'react';
import PropTypes from 'prop-types';

export class Playlist extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    playlistId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number,
    }),
  };

  static defaultProps = {
    elementId: 'vk_playlist',
  };

  mount() {
    const { vk, elementId, ownerId, playlistId, hash, options } = this.props;
    vk.Widgets.Playlist(elementId, -ownerId, playlistId, hash, options);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
