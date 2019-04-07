import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const Auth = ({ elementId, options }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    const copy = { ...options };
    copy.onAuth = (uid, first_name, last_name, photo, photo_rec, hash) =>
      options.onAuth(uid, first_name, last_name, photo, photo_rec, hash);
    vk.Widgets.Auth(elementId, copy);
  }, []);

  return <div id={elementId} />;
};

Auth.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    authUrl: PropTypes.string,
    onAuth: PropTypes.func
  })
};

Auth.defaultProps = {
  elementId: "vk_auth",
  options: {
    width: 300,
    onAuth: () => {}
  }
};

export default Auth;
