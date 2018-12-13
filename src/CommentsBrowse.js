import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class CommentsBrowse extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      limit: PropTypes.number,
      mini: PropTypes.oneOf([0, 1, "auto"]),
      norealtime: PropTypes.oneOf([0, 1])
    })
  };

  static defaultProps = {
    elementId: "vk_comments_browse",
    options: {
      height: 0,
      limit: 10,
      mini: "auto",
      norealtime: 0
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk } = this.context;
    const { elementId, options } = this.props;
    vk.Widgets.CommentsBrowse(elementId, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
