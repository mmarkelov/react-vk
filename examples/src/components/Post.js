import React from 'react';
import VK, { Post } from 'react-vk';

const PostWidget = () => (
  <div className="App-content">
    <h2>Post Component</h2>
    <h4>To use Post Widget:</h4>
    <pre style={{ width: '70%' }}>
      {`
import VK, {Post} from 'react-vk';

const PostWidget = () => {
	return (
	    <VK>
                <Post ownerId={1}
                    postId={45616}
                    hash='ZMk4b98xpQZMJJRXVsL1ig' />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK>
      <Post ownerId={1} postId={45616} hash="ZMk4b98xpQZMJJRXVsL1ig" />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_post">VK API</a>
      </b>
    </h5>
  </div>
);

export default PostWidget;
