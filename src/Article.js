import React from "react";
import PropTypes from "prop-types";
import vkPropTypes from "./vkPropTypes";

export default class Post extends React.Component {
  static propTypes = {
    vk: vkPropTypes.isRequired,
    elementId: PropTypes.string,
    articleUrl: PropTypes.string.isRequired
  };

  static defaultProps = {
    elementId: "vk_article"
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, articleUrl } = this.props;
    vk.Widgets.Article(elementId, articleUrl);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
