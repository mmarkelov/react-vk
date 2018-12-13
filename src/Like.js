import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Like extends React.Component {
  static contextType = VKContext;

  static propTypes = {
    elementId: PropTypes.string,
    options: PropTypes.shape({
      type: PropTypes.oneOf(["full", "button", "mini", "vertical"]),
      width: PropTypes.number,
      height: PropTypes.number,
      verb: PropTypes.oneOf([0, 1]),
      pageUrl: PropTypes.string,
      pageTitle: PropTypes.string,
      pageImage: PropTypes.string
    }),
    pageId: PropTypes.string,
    onLike: PropTypes.func,
    onUnlike: PropTypes.func,
    onShare: PropTypes.func,
    onUnshare: PropTypes.func
  };

  static defaultProps = {
    elementId: "vk_like",
    options: {
      type: "full",
      width: 350,
      height: 22,
      verb: 0
    },
    pageId: null,
    onLike: () => {},
    onUnlike: () => {},
    onShare: () => {},
    onUnshare: () => {}
  };

  componentDidMount() {
    this.mount();
  }

  componentWillUnmount() {
    const { vk } = this.context;
    vk.Observer.unsubscribe("widgets.like.liked");
    vk.Observer.unsubscribe("widgets.like.unliked");
    vk.Observer.unsubscribe("widgets.like.shared");
    vk.Observer.unsubscribe("widgets.like.unshared");
  }

  mount() {
    const { vk } = this.context;
    const {
      elementId,
      options,
      pageId,
      onLike,
      onUnlike,
      onShare,
      onUnshare
    } = this.props;
    if (pageId) {
      vk.Widgets.Like(elementId, options, pageId);
    } else {
      vk.Widgets.Like(elementId, options);
    }
    vk.Observer.subscribe("widgets.like.liked", quantity => onLike(quantity));
    vk.Observer.subscribe("widgets.like.unliked", quantity =>
      onUnlike(quantity)
    );
    vk.Observer.subscribe("widgets.like.shared", quantity => onShare(quantity));
    vk.Observer.subscribe("widgets.like.unshared", quantity =>
      onUnshare(quantity)
    );
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
