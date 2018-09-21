import React from 'react';
import VK, { Comments } from 'react-vk';

const Comment = () => {
  const handleNewComment = (num, last_comment, date, sign) => {
    console.log(last_comment);
  };

  return (
    <div className="App-content">
      <h2>Comments Component</h2>
      <h4>To use Comments Widget:</h4>
      <pre style={{ width: '75%' }}>
        {`
import VK, {Comments} from 'react-vk';

const handleNewComment = (num, last_comment, date, sign) => {
    console.log(last_comment);
};

const Comment = () => {
	return (
	    <VK apiId={your_api_id}>
	      <Comments onNewComment={handleNewComment} />
	    </VK>
	)
};`}
      </pre>
      <h4>Result:</h4>
      <VK apiId={6247321}>
        <Comments onNewComment={handleNewComment} />
      </VK>
      <h5>
        More info you can find on{' '}
        <b>
          <a href="https://vk.com/dev/widget_comments">VK API</a>
        </b>
      </h5>
    </div>
  );
};

export default Comment;
