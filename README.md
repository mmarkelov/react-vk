# react-vk

[VK API](https://vk.com/dev/widgets_for_sites)
bindings for React

## Install

### For latest release you need **react 16.8**

Depending on your `react` you need different version of package:

| react-vk      | react         |
| ------------- |:-------------:| 
| 1.1.5         |  < 16         | 
| 1.1.6         | > 16.2        |
| 3.5.2         |  between 16.2 and 16.6 |
| 4.2.0         |   16.6 |
| 5.0.0         |   16.8 |

```shell
npm install --save react-vk
yarn add react-vk
```

## Important notes!

For local projects run your server on port 80 (This is VK API requirement for local projects)
For example using create-react-app in your package.json:

```js
"start": "PORT=80 react-scripts start"
```

Then:

```shell
sudo npm run start
```

You need run this command as administrator!

## Components

### Basic components

- `<VK />` - provides child components with vk
- `<AllowMessagesFromCommunity />` - AllowMessagesFromCommunity Widget instance
- `<Application />` - App Widget instance
- `<Article />` - Article Widget instance
- `<Auth />` - Auth Widget instance
- `<Comments />` - Comments Widget instance
- `<CommentsBrowse />` - CommentsBrowse Widget instance
- `<CommunityMessages />` - CommunityMessages Widget instance
- `<ContactUs />` - ContactUs Widget instance
- `<Group />` - Group Widget instance
- `<Like />` - Like Widget instance
- `<Playlist />` - Playlist Widget instance
- `<Poll />` - Poll Widget instance
- `<Post />` - Post Widget instance
- `<Recommended />` - Recommended Widget instance
- `<Share />` - Share Widget instance
- `<Subscribe />` - Subscribe Widget instance

#### Information about components

Every component has options object, which contains parameters (You can find available fields on VK API for selected widget)

- `<VK apiId={number} onApiAvailable={function}/>`
  requires **apiId** for init VK, but for some components you can skip **apiId** prop. (**Application**, **Article**, **Group**, **CommunityMessages**, **Playlist**, **Post**, **Subscribe**)
  More information on [VK API](https://vk.com/dev/openapi)
  onApiAvailable - function that provide you access to VK api instance

- `<AllowMessagesFromCommunity elementId={string} options={object} groupId={number} onAllow={function} onDeny={function} />`
  requires groupId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module,
  use functions: onAllow(When "Allow messages" button is pressed),
  onDeny(If the user denies messages)
  More information on [VK API](https://vk.com/dev/widget_allow_messages_from_community)

- `<Article elementId={string} articleUrl={string} />`
  elementId - ID of the container element for the module,
  articleUrl - url of article,
  More information on [VK API](https://vk.com/dev/widget_article)

- `<Application elementId={string} appId={number} options={object} />`
  requires appId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module,
  More information on [VK API](https://vk.com/dev/widget_app)

- `<Auth elementId={string} options={object} onAuth={function} />`
  You can set options by object,
  elementId - ID of the container element for the module,
  use onAuth function(which can use a result of authorization(object with following fields: uid, first_name, last_name, photo, photo_rec, hash)
  More information on [VK API](https://vk.com/dev/widget_auth)

- `<Comments elementId={string} options={object} pageId={string} onNewComment={function} onDeleteComment={function} />`
  You can set options by object,
  pageId - ID of the page on your site,
  elementId - ID of the container element for the module.
  When a comment is posted or deleted 4 parameters are passed to the handler functions(onNewComment, onDeleteComment):
  num, last_comment, date, sign
  More information on [VK API](https://vk.com/dev/widget_comments)

- `<CommentsBrowse elementId={string} options={object} />`
  You can set options by object,
  pageId - ID of the page on your site,
  elementId - ID of the container element for the module.
  More information on [VK API](https://vk.com/dev/widget_comments)

- `<CommunityMessages elementId={string} options={object} groupId={number} onMount={function} />`
  requires groupId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module,
  onMount = function that get mounted widget and elementId for extra actions:
  destroy — deletes the widget(requires elementId);
  expand — expands widget frame, may take welcomeScreen parameter (1 to show the welcome screen);
  stopTitleAnimation — disables title animation when new message received;
  minimize — minimizes widget frame.
  More information on [VK API](https://vk.com/dev/widget_community_messages)

- `<ContactUs elementId={string} options={object} ownerId={number} />`
  requires ownerId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module
  More information on [VK API](https://vk.com/dev/widget_contact_us)

- `<Group elementId={string} groupId={number} options={object} onJoin={function} onLeave={function} />`
  requires groupId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module,
  When the 'Follow on VK' button is clicked your can use onJoin and onLeave functions
  More information on [VK API](https://vk.com/dev/widget_community)

- `<Like elementId={string} options={object} pageId={string} onLike={function} onUnlike={function} onShare={function} onUnshare={function} />`
  You can set options by object,
  elementId - ID of the container element for the module,
  pageId - ID of the page on your site,
  When Like button is clicked you can use onLike and onUnlike functions. You can use number of Likes for the current page as a parameter.
  Similar when Share With Friends is selected

  ### Important note!

  According to documentation VK Like component require page_id if we need two or more independent likes on single page. So if you are using SPA - pageId attribute is required!

  More information on [VK API](https://vk.com/dev/widget_like)

- `<Playlist elementId={string} ownerId={number} playlistId={number} hash={string} options={object} />`
  For correct works requires ownerId, playlistId, hash(service parameter. hash can be obtained in the constructor only.)
  You can set options by object,
  elementId - ID of the container element for the module
  More information on [VK API](https://vk.com/dev/widget_playlist)

- `<Poll elementId={string} options={object} pollId={string} />`
  requires pollId for correct work(You can get it using the form on https://vk.com/dev/Poll or with a button "Get code" in the existing poll)
  You can set options by object,
  elementId - ID of the container element for the module
  More information on [VK API](https://vk.com/dev/widget_poll)

- `<Post elementId={string} options={object} ownerId={number} postId={number} hash={string} />`
  For correct works requires ownerId, postId, hash(You can get hash in widget's constructor or "Export" window only.)
  You can set options by object,
  elementId - ID of the container element for the module
  More information on [VK API](https://vk.com/dev/widget_post)

- `<Recommended elementId={string} options={object} />`
  You can set options by object,
  elementId - ID of the container element for the module
  More information on [VK API](https://vk.com/dev/widget_recommended)

- `<Subscribe elementId={string} options={object} ownerId={number} onSubscribe={function} onUnsubscribe={function} />`
  requires ownerId for correct work.
  You can set options by object,
  elementId - ID of the container element for the module,
  when user subscribes, you can use onSubscribe function; when user unsubscribes — onUnsubscribe.
  More information on [VK API](https://vk.com/dev/widget_recommended)
  https://vk.com/dev/widget_subscribe

- `<Share shareOptions={object} buttonOptions={object} />`
  You can set shareOptions and buttonOptions by object,
  More information on [VK API](https://vk.com/dev/widget_share)

## Basic usage

### Setup

#### With VK API

```js
window.onload = function() {
  VK.init({ apiId: 123456 });
};
```

#### With react-vk

```js
import VK from "react-vk";

const App = () => {
  return <VK apiId={123456} />;
};
```

### Components

#### With VK API

```js
window.onload = function() {
  VK.init({ apiId: 123456 });
  VK.Widgets.Auth("vk_auth", {});
};
```

### With react-vk

```js
import VK, { Auth } from "react-vk";

const App = () => {
  return (
    <VK apiId={123456}>
      <Auth />
    </VK>
  );
};
```

### Functions

#### With VK API

```js
<script type="text/javascript" src="//vk.com/js/api/openapi.js?122"></script>

<script type="text/javascript">
  VK.init({apiId: 123456});
</script>
<div id="vk_like"></div>
<script type="text/javascript">
  VK.Widgets.Like("vk_like", {type: "button"});
  VK.Observer.subscribe("widgets.subscribed", function f() {
   alert ("Thank you!");
  });
</script>
```

### With react-vk

```js
import VK, { Subscribe } from "react-vk";

const App = () => {
  return (
    <VK>
      <Subscribe
        ownerId={17437657}
        onSubscribe={() => {
          alert("Thank you!");
        }}
      />
    </VK>
  );
};
```

### Using CommunityMessages

#### With VK API

```js
<div id="vk_community_messages"></div>
<script type="text/javascript">
  var widget = VK.Widgets.CommunityMessages("vk_community_messages", 20003922);
  widget.stopTitleAnimation();
  widget.expand({
    welcomeScreen: 1,
  });
</script>
```

### With react-vk

```js
import VK, { CommunityMessages } from 'react-vk';

class App extends Component {
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
      <button onClick={this.handleClick}>Delete CommunityMessages</button>
      <VK>
        <CommunityMessages
          groupId={127607773}
          onMount={(widget, id) => {
            this.setState({ widget, id });
          }}
        />
      </VK>
    </div>
    );
```

## More details and examples

You can clone this repository and check more examples

```shell
git clone https://github.com/mmarkelov/react-vk.git
cd ./react-vk/examples
npm install && npm run dev
```

Also you can check them [here](https://mmarkelov.github.io/react-vk/)

## TODO

- [ ] Add more tests
- [ ] Add custom hooks

## Acknowledgements

- Thanks to [@gribnoysup](https://github.com/gribnoysup/) and his [react-yandex-maps](https://github.com/gribnoysup/react-yandex-maps) for inspiration and motivation.
- Thanks to [@seeden](https://github.com/seeden/) and his [react-facebook](https://github.com/seeden/react-facebook) for inspiration and motivation.
- Lots of features were founded in these perfect packages.
