import React from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

export default class Post extends React.Component {
  static contextType = VKContext;

  static propTypes = {
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
    const { vk } = this.context;
    const { elementId, articleUrl } = this.props;
    vk.Widgets.Article(elementId, articleUrl);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
