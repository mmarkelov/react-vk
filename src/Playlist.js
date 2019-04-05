import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Playlist = ({ elementId, ownerId, playlistId, hash, options }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Playlist(elementId, -ownerId, playlistId, hash, options);
  }, []);

  return <div id={elementId} />;
};

Playlist.propTypes = {
  elementId: PropTypes.string,
  ownerId: PropTypes.number.isRequired,
  playlistId: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  options: PropTypes.shape({
    width: PropTypes.number
  })
};

Playlist.defaultProps = {
  elementId: "vk_playlist",
  options: {}
};

export default Playlist;
