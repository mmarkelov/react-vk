import React from "react";
import VK, { AllowMessagesFromCommunity } from "react-vk";

const AllowMessagesFromCommunityWidget = () => (
  <div className="App-content">
    <h2>AllowMessagesFromCommunityWidget Component</h2>
    <h4>To use AllowMessagesFromCommunityWidget:</h4>
    <pre style={{ width: "80%" }}>
      {`
import VK, {AllowMessagesFromCommunity} from 'react-vk';

const AllowMessagesFromCommunityWidget = () => {
	return (
	    <VK>
                <AllowMessagesFromCommunity groupId={2158488} />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK>
      <AllowMessagesFromCommunity
        groupId={2158488}
      />
    </VK>
    <h5>
      More info you can find on{" "}
      <b>
        <a href="https://vk.com/dev/widget_allow_messages_from_community">VK API</a>
      </b>
    </h5>
  </div>
);

export default AllowMessagesFromCommunityWidget;
