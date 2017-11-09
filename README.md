# react-vk

[VK API](https://vk.com/dev/widgets_for_sites)
bindings for React

## Install

```shell
npm install --save react-vk
yarn add react-vk
```

## Important note!
For local projects run your server on port 80
For example using create-react-app in your package.json:
"start": "PORT=80 react-scripts start"
Then:
```shell
sudo npm run start
```
You need run this command as administrator

## Components

### Basic components

- `<VK apiId={123456} />` - provides child components with vk. apiId - requires
- `<AllowMessagesFromCommunity />` - AllowMessagesFromCommunity Widget instance
- `<Application />` - App Widget instance
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
- `<Subscribe />` - Subscribe Widget instance

## Basic usage

### With VK API

```js
window.onload = function () {
 VK.init({apiId: 123456});
 VK.Widgets.Auth('vk_auth', {});
}
```

### With react-vk

```js
import { VK, Auth } from 'react-vk';

const Auth = () => (
  <VK apiId={123456}>
    <Auth />
  </VK>
);
```

More info coming soon