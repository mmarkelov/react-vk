import React from 'react';
import VK, { ContactUs } from 'react-vk';

const Contact = () => (
  <div className="App-content">
    <h2>Contact Us Component</h2>
    <h4>To use Contact Us Widget:</h4>
    <pre style={{ width: '60%' }}>
      {`
import VK, {ContactUs} from 'react-vk';

const Contact = () => {
	return (
	    <VK apiId={your_api_id}>
                <ContactUs ownerId={20003922} />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK apiId={6247321}>
      <ContactUs ownerId={20003922} />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_contact_us">VK API</a>
      </b>
    </h5>
  </div>
);

export default Contact;
