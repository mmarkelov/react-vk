import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Recommended = ({ elementId, options }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.Recommended(elementId, options);
  }, []);

  return <div id={elementId} />;
};

Recommended.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    limit: PropTypes.number,
    max: PropTypes.number,
    period: PropTypes.string,
    verb: PropTypes.number,
    sort: PropTypes.string,
    target: PropTypes.string
  })
};

Recommended.defaultProps = {
  elementId: "vk_recommend",
  options: {
    limit: 5,
    max: 20,
    period: "week",
    sort: "friend_like",
    target: "parent"
  }
};

export default Recommended;
