import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Comments = ({
  elementId,
  options,
  pageId,
  onNewComment,
  onDeleteComment
}) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Comments(elementId, options, pageId);
    vk.Observer.subscribe(
      "widgets.comments.new_comment",
      (num, last_comment, date, sign) =>
        onNewComment(num, last_comment, date, sign)
    );
    vk.Observer.subscribe("widgets.comments.delete_comment", onDeleteComment);

    return () => {
      vk.Observer.unsubscribe("widgets.comments.new_comment");
      vk.Observer.unsubscribe("widgets.comments.delete_comment");
    };
  }, []);

  return <div id={elementId} />;
};

Comments.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    limit: PropTypes.number,
    attach: PropTypes.oneOf([
      false,
      "graffiti",
      "photo",
      "audio",
      "video",
      "link",
      "*"
    ]),
    autoPublish: PropTypes.oneOf([0, 1]),
    mini: PropTypes.oneOf([0, 1, "auto"]),
    norealtime: PropTypes.oneOf([0, 1]),
    pageUrl: PropTypes.string
  }),
  pageId: PropTypes.string,
  onNewComment: PropTypes.func,
  onDeleteComment: PropTypes.func
};

Comments.defaultProps = {
  elementId: "vk_comments",
  options: {
    height: 0,
    limit: 10,
    attach: "*",
    autoPublish: 0,
    mini: "auto",
    norealtime: 0
  },
  pageId: null,
  onNewComment: () => {},
  onDeleteComment: () => {}
};

export default Comments;
