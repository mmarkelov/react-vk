import React from "react";
import PropTypes from "prop-types";
import vkPropTypes from "./vkPropTypes";

export default class Post extends React.Component {
  static propTypes = {
    vk: vkPropTypes.isRequired,
    elementId: PropTypes.string,
    articleLink: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.number
    })
  };

  static defaultProps = {
    elementId: "vk_article",
    articleLink: null,
    options: {}
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, articleLink, options } = this.props;
    vk.Widgets.Article(elementId, articleLink, options);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
