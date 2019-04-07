import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Application = ({ elementId, appId, options }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.App(elementId, appId, options);
  }, []);

  return <div id={elementId} />;
};

Application.propTypes = {
  elementId: PropTypes.string,
  appId: PropTypes.number.isRequired,
  options: PropTypes.shape({
    mode: PropTypes.oneOf([1, 2, 3]),
    height: PropTypes.number
  })
};

Application.defaultProps = {
  elementId: "vk_app",
  options: {
    mode: 1
  }
};

export default Application;
