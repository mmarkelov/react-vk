import React from 'react';
import VK, { Subscribe } from 'react-vk';

const SubscribeToAuthor = () => {
  const handleSubscribe = () => {
    alert('Thank you!');
  };

  const handleUnsubscribe = () => {
    console.log(':(');
  };

  return (
    <div className="App-content">
      <h2>Subscribe to Author Component</h2>
      <h4>To use Subscribe to Author Widget:</h4>
      <pre style={{ width: '70%' }}>
        {`
import VK, {Subscribe} from 'react-vk';


const SubscribeToAuthor = () => {
    const handleSubscribe = () => {
        alert('Thank you!');
    };

    const handleUnsubscribe = () => {
        console.log(':(');
    };

    return (
        <VK>
            <Subscribe
                ownerId={1}
                onSubscribe={this.handleSubscribe}
                onUnsubscribe={this.handleUnsubscribe}
            />
        </VK>
    )
};`}
      </pre>
      <h4>Result:</h4>
      <VK>
        <Subscribe
          ownerId={1}
          onSubscribe={handleSubscribe}
          onUnsubscribe={handleUnsubscribe}
        />
      </VK>
      <h5>
        More info you can find on{' '}
        <b>
          <a href="https://vk.com/dev/widget_subscribe">VK API</a>
        </b>
      </h5>
    </div>
  );
};

export default SubscribeToAuthor;
