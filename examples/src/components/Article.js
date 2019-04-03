import React from "react";
import VK, { Article } from "react-vk";

const ArticleWidget = () => (
  <div className="App-content">
    <h2>Article Component</h2>
    <h4>To use Article Widget:</h4>
    <pre style={{ width: "80%" }}>
      {`
import VK, {Article} from 'react-vk';

const ArticleWidget = () => {
	return (
	    <VK>
                <Article elementId="vk_article_tassagency-mayakovskiy"
                         articleUrl="@tassagency-mayakovskiy" />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK>
      <Article
        elementId='vk_article_tassagency-mayakovskiy'
        articleUrl='@tassagency-mayakovskiy'
      />
    </VK>
    <h5>
      More info you can find on{" "}
      <b>
        <a href="https://vk.com/dev/Article">VK API</a>
      </b>
    </h5>
  </div>
);

export default ArticleWidget;
