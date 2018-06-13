import VK from "./VK";
import { withVK } from "./VKContext";
import VKAllowMessagesFromCommunity from "./AllowMessagesFromCommunity";
import VKApplication from "./App";
import VKAuth from "./Auth";
import VKComments from "./Comments";
import VKCommentsBrowse from "./CommentsBrowse";
import VKCommunityMessages from "./CommunityMessages";
import VKContactUs from "./ContactUs";
import VKGroup from "./Group";
import VKLike from "./Like";
import VKPlaylist from "./Playlist";
import VKPoll from "./Poll";
import VKPost from "./Post";
import VKRecommended from "./Recommended";
import VKSubscribe from "./Subscribe";

const AllowMessagesFromCommunity = withVK(VKAllowMessagesFromCommunity);
const Application = withVK(VKApplication);
const Auth = withVK(VKAuth);
const Comments = withVK(VKComments);
const CommentsBrowse = withVK(VKCommentsBrowse);
const CommunityMessages = withVK(VKCommunityMessages);
const ContactUs = withVK(VKContactUs);
const Group = withVK(VKGroup);
const Like = withVK(VKLike);
const Playlist = withVK(VKPlaylist);
const Poll = withVK(VKPoll);
const Post = withVK(VKPost);
const Recommended = withVK(VKRecommended);
const Subscribe = withVK(VKSubscribe);

export default VK;

export {
  AllowMessagesFromCommunity,
  Application,
  Auth,
  Comments,
  CommentsBrowse,
  CommunityMessages,
  ContactUs,
  Group,
  Like,
  Playlist,
  Poll,
  Post,
  Recommended,
  Subscribe
};
