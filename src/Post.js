import React from 'react';
import PropTypes from 'prop-types';

export class Post extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    ownerId: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    options: PropTypes.shape({
      width: PropTypes.number,
    }),
  };

  static defaultProps = {
    elementId: 'vk_post',
  };

  mount() {
    const { vk, elementId, ownerId, postId, hash, options } = this.props;
    vk.Widgets.Post(elementId, ownerId, postId, hash, options);
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
