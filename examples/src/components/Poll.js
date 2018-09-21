import React from 'react';
import VK, { Poll } from 'react-vk';

const PollWidget = () => (
  <div className="App-content">
    <h2>Poll Component</h2>
    <h4>To use Polls Widget:</h4>
    <pre style={{ width: '80%' }}>
      {`
import VK, {Poll} from 'react-vk';

const PollWidget = () => {
	return (
	    <VK apiId={your_api_id}>
                <Poll pollId='278272739_f67dd82c67eadb692e' />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK apiId={6247321}>
      <Poll pollId="279089002_a8842403367e7545d9" />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_poll">VK API</a>
      </b>
    </h5>
  </div>
);

export default PollWidget;
