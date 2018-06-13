import React from "react";
import PropTypes from "prop-types";

export default class Post extends React.Component {
  static propTypes = {
    vk: PropTypes.shape.isRequired,
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_post"
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, ownerId, postId, hash, options } = this.props;
    vk.Widgets.Post(elementId, ownerId, postId, hash, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
