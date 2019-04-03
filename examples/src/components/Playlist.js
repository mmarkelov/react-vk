import React from 'react';
import VK, { Playlist } from 'react-vk';

const PlaylistWidget = () => (
  <div className="App-content">
    <h2>Playlist Component</h2>
    <h4>To use Playlist Widget:</h4>
    <pre style={{ width: '70%' }}>
      {`
import VK, {Playlist} from 'react-vk';

const PlaylistWidget = () => {
	return (
	    <VK>
                <Playlist
                    ownerId={2000002200}
                    playlistId={2200}
                    hash="becc04fc11973e4b92"
                    options={{ width: 300 }}
                />
            </VK>
	)
};`}
    </pre>
    <h4>Result:</h4>
    <VK>
      <Playlist
        ownerId={2000002200}
        playlistId={2200}
        hash="becc04fc11973e4b92"
        options={{ width: 300 }}
      />
    </VK>
    <h5>
      More info you can find on{' '}
      <b>
        <a href="https://vk.com/dev/widget_playlist">VK API</a>
      </b>
    </h5>
  </div>
);

export default PlaylistWidget;
