import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Poll = ({ elementId, options, pollId }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Poll(elementId, options, pollId);
  }, []);

  return <div id={elementId} />;
};

Poll.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.number,
    pageUrl: PropTypes.string
  }),
  pollId: PropTypes.string.isRequired
};

Poll.defaultProps = {
  elementId: "vk_poll",
  options: {
    height: 24
  }
};

export default Poll;
