import React from "react";
import PropTypes from "prop-types";
import vkPropTypes from "./vkPropTypes";

export default class Playlist extends React.Component {
  static propTypes = {
    vk: vkPropTypes.isRequired,
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
    const { vk, elementId, ownerId, playlistId, hash, options } = this.props;
    vk.Widgets.Playlist(elementId, -ownerId, playlistId, hash, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
