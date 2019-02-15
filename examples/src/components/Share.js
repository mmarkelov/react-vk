import React from 'react';
import { Share } from 'react-vk';

const ShareComponent = () => (
  <div className="App-content">
    <h2>Share Component</h2>
    <h4>To use Share Widget:</h4>
    <pre style={{ width: '60%' }}>
      {`
import VK, {Share} from 'react-vk';

const ShareComponent = () => {
	return (
            <Share />
	)
};`}
    </pre>
    <h4>Result:</h4>
      <Share buttonOptions={{type: 'round', text: 'Поделиться VK'}}/>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_share">VK API</a>
      </b>
    </h5>
  </div>
);

export default ShareComponent;
