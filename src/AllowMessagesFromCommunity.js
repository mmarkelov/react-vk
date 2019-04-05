import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const AllowMessagesFromCommunity = ({
  elementId,
  options,
  groupId,
  onAllow,
  onDeny
}) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.AllowMessagesFromCommunity(elementId, options, groupId);
    vk.Observer.subscribe(
      "widgets.allowMessagesFromCommunity.allowed",
      userId => onAllow(userId)
    );
    vk.Observer.subscribe("widgets.allowMessagesFromCommunity.denied", userId =>
      onDeny(userId)
    );

    return () =>
      vk.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed");
  }, []);

  return <div id={elementId} />;
};

AllowMessagesFromCommunity.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    height: PropTypes.number
  }),
  groupId: PropTypes.number.isRequired,
  onAllow: PropTypes.func,
  onDeny: PropTypes.func
};

AllowMessagesFromCommunity.defaultProps = {
  elementId: "vk_allow_messages_from_community",
  options: {
    height: 24
  },
  onAllow: () => {},
  onDeny: () => {}
};

export default AllowMessagesFromCommunity;
