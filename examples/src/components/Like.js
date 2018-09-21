import React from 'react';
import VK, { Like } from 'react-vk';

const LikeComponent = () => (
  <div className="App-content">
    <h2>Like Component</h2>
    <h4>To use Like Widget:</h4>
    <pre style={{ width: '60%' }}>
      {`
import VK, {Like} from 'react-vk';

const LikeComponent = () => {
	return (
	    <VK apiId={your_api_id}>
              <Like
                  onLike={quantity => {
                      console.log(quantity);
                  }}
              />
	    </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK apiId={6247321}>
      <Like
        onLike={quantity => {
          console.log(quantity);
        }}
      />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_like">VK API</a>
      </b>
    </h5>
  </div>
);

export default LikeComponent;
