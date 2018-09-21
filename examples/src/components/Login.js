import React from 'react';
import VK, { Auth } from 'react-vk';

const Login = () => (
  <div className="App-content">
    <h2>Authorization Component</h2>
    <h4>To use Authorization Widget:</h4>
    <pre>
      {`
import VK, {Auth} from 'react-vk';

const Login = () => {
	return (
	    <VK apiId={your_api_id}>
	      <Auth options={{
	              onAuth: user => {
	                console.log(user);
	              },
            }}/>
	    </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK apiId={6247321}>
      <Auth
        options={{
          onAuth: user => {
            console.log(user);
          },
        }}
      />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_auth">VK API</a>
      </b>
    </h5>
  </div>
);

export default Login;
