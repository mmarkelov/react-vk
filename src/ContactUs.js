import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import VKContext from "./VKContext";

const ContactUs = ({ elementId, options, ownerId }) => {
  const vk = useContext(VKContext);

  useEffect(() => {
    vk.Widgets.ContactUs(elementId, options, -ownerId);
  }, []);

  return <div id={elementId} />;
};

ContactUs.propTypes = {
  elementId: PropTypes.string,
  options: PropTypes.shape({
    text: PropTypes.string,
    height: PropTypes.number
  }),
  ownerId: PropTypes.number.isRequired
};

ContactUs.defaultProps = {
  elementId: "vk_contact_us",
  options: {
    height: 24
  }
};

export default ContactUs;
