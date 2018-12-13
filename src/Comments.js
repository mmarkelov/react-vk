import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Comments extends React.Component {
  static contextType = VKContext;

  static propTypes = {
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

  static defaultProps = {
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

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    const { vk } = this.context;
    vk.Observer.unsubscribe("widgets.comments.new_comment");
    vk.Observer.unsubscribe("widgets.comments.delete_comment");
  }

  mount() {
    const { vk } = this.context;
    const {
      elementId,
      options,
      pageId,
      onNewComment,
      onDeleteComment
    } = this.props;
    vk.Widgets.Comments(elementId, options, pageId);
    vk.Observer.subscribe(
      "widgets.comments.new_comment",
      (num, last_comment, date, sign) =>
        onNewComment(num, last_comment, date, sign)
    );
    vk.Observer.subscribe("widgets.comments.delete_comment", onDeleteComment);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
