import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Post extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_post",
    options: {}
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk } = this.context;
    const { elementId, ownerId, postId, hash, options } = this.props;
    vk.Widgets.Post(elementId, ownerId, postId, hash, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
