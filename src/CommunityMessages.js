import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const CommunityMessages = ({ elementId, groupId, options, onMount }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    const widget = vk.Widgets.CommunityMessages(elementId, groupId, options);
    onMount(widget, elementId);
  }, []);

  return <div id={elementId} />;
};

CommunityMessages.propTypes = {
  elementId: PropTypes.string,
  groupId: PropTypes.number.isRequired,
  options: PropTypes.shape({
    onCanNotWrite: PropTypes.func,
    welcomeScreen: PropTypes.oneOf([0, 1]),
    expandTimeout: PropTypes.number,
    expanded: PropTypes.number,
    widgetPosition: PropTypes.oneOf(["left", "right"]),
    buttonType: PropTypes.oneOf(["no_button", "blue_circle"]),
    disableButtonTooltip: PropTypes.oneOf([0, 1]),
    tooltipButtonText: PropTypes.string,
    disableNewMessagesSound: PropTypes.number,
    disableExpandChatSound: PropTypes.number,
    disableTitleChange: PropTypes.number
  }),
  onMount: PropTypes.func
};

CommunityMessages.defaultProps = {
  elementId: "vk_community_messages",
  options: {
    onCanNotWrite: () => {},
    welcomeScreen: 1,
    expandTimeout: 0,
    expanded: 0,
    widgetPosition: "right",
    buttonType: "blue_circle",
    disableButtonTooltip: 0
  },
  onMount: () => {}
};

export default CommunityMessages;
