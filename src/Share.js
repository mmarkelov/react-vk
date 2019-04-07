/* global document, window */
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { isDOMReady } from "./utils";

const URL = "https://vk.com/js/api/share.js?93";

const Share = ({ shareOptions, buttonOptions }) => {
  const container = React.createRef();

  useEffect(() => {
    if (isDOMReady) {
      if (!document.getElementById("vk-share")) {
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.charset = "windows-1251";
        script.id = "vk-share";
        script.src = URL;
        script.async = true;

        document.head.appendChild(script);

        script.addEventListener("load", () => {
          container.current.innerHTML = window.VK.Share.button(
            shareOptions,
            buttonOptions
          );
        });
      } else if (window.VK.Share) {
        container.current.innerHTML = window.VK.Share.button(
          shareOptions,
          buttonOptions
        );
      }
    }
  }, []);

  return <div ref={container} />;
};

Share.propTypes = {
  shareOptions: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    noparse: PropTypes.bool,
    no_vk_links: PropTypes.oneOf([0, 1])
  }),
  buttonOptions: PropTypes.shape({
    type: PropTypes.oneOf([
      "round",
      "round_nocount",
      "button",
      "button_nocount",
      "link",
      "link_noicon",
      "custom"
    ]),
    text: PropTypes.string
  })
};

Share.defaultProps = {
  shareOptions: null,
  buttonOptions: null
};

export default Share;
