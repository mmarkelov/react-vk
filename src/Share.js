/* global document, window */
import React from "react";
import PropTypes from "prop-types";

import { isDOMReady } from "./utils";

const URL = "https://vk.com/js/api/share.js?93";

export default class Share extends React.Component {
  container = React.createRef();

  static propTypes = {
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

  static defaultProps = {
    shareOptions: null,
    buttonOptions: null
  };

  componentDidMount() {
    if (isDOMReady) {
      this.mount();
    }
  }

  mount() {
    const container = this.container.current;
    const { shareOptions, buttonOptions } = this.props;

    if (!document.getElementById("vk-share")) {
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.charset = "windows-1251";
      script.id = "vk-share";
      script.src = URL;
      script.async = true;

      document.head.appendChild(script);

      script.addEventListener("load", () => {
        container.innerHTML = window.VK.Share.button(
          shareOptions,
          buttonOptions
        );
      });
    } else if (window.VK.Share) {
      container.innerHTML = window.VK.Share.button(shareOptions, buttonOptions);
    }
  }

  render() {
    return <div ref={this.container} />;
  }
}
