import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Article = ({ elementId, articleUrl }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Article(elementId, articleUrl);
  }, []);

  return <div id={elementId} />;
};

Article.propTypes = {
  elementId: PropTypes.string,
  articleUrl: PropTypes.string.isRequired
};

Article.defaultProps = {
  elementId: "vk_article"
};

export default Article;
