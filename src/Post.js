import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Post = ({ elementId, ownerId, postId, hash, options }) => {
  const { vk } = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Post(elementId, ownerId, postId, hash, options);
  }, []);

  return <div id={elementId} />;
};

Post.propTypes = {
  elementId: PropTypes.string,
  ownerId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  hash: PropTypes.string.isRequired,
  options: PropTypes.shape({
    width: PropTypes.number
  })
};

Post.defaultProps = {
  elementId: "vk_post",
  options: {}
};

export default Post;
