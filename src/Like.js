import React from 'react';
import PropTypes from 'prop-types';

export class Like extends React.Component {
  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      type: PropTypes.oneOf(['full', 'button', 'mini', 'vertical']),
      width: PropTypes.number,
      height: PropTypes.number,
      verb: PropTypes.oneOf([0, 1]),
      pageUrl: PropTypes.string,
      pageTitle: PropTypes.string,
      pageImage: PropTypes.string,
    }),
    pageId: PropTypes.number,
    onLike: PropTypes.func,
    onUnlike: PropTypes.func,
    onShared: PropTypes.func,
    onUnshared: PropTypes.func,
  };

  static defaultProps = {
    elementId: 'vk_like',
    options: {
      type: 'full',
      width: 350,
      height: 22,
      verb: 0,
    },
    onLike: () => {},
    onUnlike: () => {},
    onShared: () => {},
    onUnshared: () => {},
  };

  mount() {
    const {
      vk,
      elementId,
      options,
      pageId,
      onLike,
      onUnlike,
      onShared,
      onUnshared,
    } = this.props;
    vk.Widgets.Like(elementId, options, pageId);
    vk.Observer.subscribe('widgets.like.liked', quantity => onLike(quantity));
    vk.Observer.subscribe('widgets.like.unliked', quantity =>
      onUnlike(quantity),
    );
    vk.Observer.subscribe('widgets.like.shared', quantity =>
      onShared(quantity),
    );
    vk.Observer.subscribe('widgets.like.unshared', quantity =>
      onUnshared(quantity),
    );
  }

  componentDidMount() {
    this.mount();
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
