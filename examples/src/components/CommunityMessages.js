import React from 'react';
import VK, { CommunityMessages } from 'react-vk';

class CommunityMessage extends React.Component {
  state = {
    widget: null,
    id: null,
  };

  handleClick = () => {
    this.state.widget.destroy(this.state.id);
  };

  render() {
    return (
      <div className="App-content">
        <h2>Community Messages Component</h2>
        <h4>To use Community Messages Widget:</h4>
        <pre style={{ width: '70%' }}>
          {`
import VK, {CommunityMessages} from 'react-vk';

class Messages extends React.Component {

    state = {
        widget: null,
        id: null,
    };

    handleClick = () => {
        this.state.widget.destroy(this.state.id);
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Delete CommunityMessages
                </button>
                <VK>
                  <CommunityMessages
                    groupId={127607773}
                    options={{onCanNotWrite: reason => console.log(reason)}}
                    onMount={(widget, id) => {
                        this.setState({ widget, id });
                    }}
                  />
                </VK>
            </div>
        )
    }
};`}
        </pre>
        <h4>Result in right conner</h4>
        <button onClick={this.handleClick}>Delete CommunityMessages</button>
        <VK>
          <CommunityMessages
            groupId={127607773}
            options={{ onCanNotWrite: reason => console.log(reason) }}
            onMount={(widget, id) => {
              this.setState({ widget, id });
            }}
          />
        </VK>
        <h5>
          More info you can find on{' '}
          <b>
            <a href="https://vk.com/dev/widget_community_messages">VK API</a>
          </b>
        </h5>
      </div>
    );
  }
}

export default CommunityMessage;
