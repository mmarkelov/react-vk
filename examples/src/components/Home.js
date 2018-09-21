import React from 'react';
import getApi from '../img/get_api.jpg';

const Home = () => (
  <div className="App-content">
    <h2>To get started</h2>
    <ol>
      <li>Setup your project and get your Application ID</li>
      <img src={getApi} alt="get your api id" />
      <li>
        Install{' '}
        <b>
          <a href="https://github.com/mmarkelov/react-vk">react-vk</a>
        </b>{' '}
        to your project
      </li>
      <pre>
        <code className="lang-bash">
          npm install <span className="hljs-keyword">react-vk</span>
        </code>
      </pre>
      <li>Import components from package</li>
      <pre>
        <code className="lang-bash">
          import
          <span className="hljs-keyword">
            {' '}
            VK, {'{'}
            Auth
            {'}'}{' '}
          </span>
          from <span className="hljs-keyword">react-vk</span>;
        </code>
      </pre>
      <li>Now set your Api id with 'apiId' property</li>
      <pre>
        <code className="lang-bash">
          {'<VK'} <span className="hljs-keyword">apiId</span>
          {'={your_api_id}>'}
          <span className="hljs-keyword">VK COMPONENTS HERE</span>
          {'</VK>'}
        </code>
      </pre>
      <li>That is done. Happy coding!</li>
    </ol>
  </div>
);

export default Home;
