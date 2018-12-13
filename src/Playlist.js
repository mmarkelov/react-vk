import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Playlist extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    playlistId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_playlist",
    options: {}
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk } = this.context;
    const { elementId, ownerId, playlistId, hash, options } = this.props;
    vk.Widgets.Playlist(elementId, -ownerId, playlistId, hash, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
