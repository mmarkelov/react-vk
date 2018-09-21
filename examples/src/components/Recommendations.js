import React from 'react';
import VK, { Recommended } from 'react-vk';

const Recommendations = () => (
  <div className="App-content">
    <h2>Recommendations Component</h2>
    <h4>To use Recommendations Widget:</h4>
    <pre style={{ width: '50%' }}>
      {`
import VK, {Recommended} from 'react-vk';

const Recommendations = () => {
	return (
	    <VK apiId={your_api_id}>
                <Recommended />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK apiId={6247321}>
      <Recommended />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_recommended">VK API</a>
      </b>
    </h5>
  </div>
);

export default Recommendations;
