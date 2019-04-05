import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const CommentsBrowse = ({ elementId, options }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.CommentsBrowse(elementId, options);
  }, []);

  return <div id={elementId} />;
};

CommentsBrowse.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    limit: PropTypes.number,
    mini: PropTypes.oneOf([0, 1, "auto"]),
    norealtime: PropTypes.oneOf([0, 1])
  })
};

CommentsBrowse.defaultProps = {
  elementId: "vk_comments_browse",
  options: {
    height: 0,
    limit: 10,
    mini: "auto",
    norealtime: 0
  }
};

export default CommentsBrowse;
