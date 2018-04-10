import React from "react";
import PropTypes from "prop-types";

import VKContext from "./VKContext";

export class VK extends React.Component {
  static propTypes = {
    apiId: PropTypes.number.isRequired,
    options: PropTypes.shape({
      version: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      onlyWidgets: PropTypes.bool
    }),
    onApiAvailable: PropTypes.func
  };

  static defaultProps = {
    options: {
      version: 153,
      onlyWidgets: true
    },
    onApiAvailable: () => {}
  };

  state = {
    vk: null
  };

  _mounted = true;

  componentDidMount() {
    const { onApiAvailable } = this.props;
    if (document.getElementById("vk-openapi")) {
      this._mounted && this.setState({ vk: window.VK });
    }

    if (
      !!(
        typeof window !== "undefined" &&
        window.document &&
        window.document.createElement
      )
    ) {
      this.init()
        .then(api => {
          onApiAvailable(api);
          this._mounted && this.setState({ vk: api });
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  }

  fetchScript = url => {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.onload = resolve;
      el.onerror = reject;
      el.type = "text/javascript";
      el.src = url;
      el.async = true;
      el.id = "vk-openapi";
      document.getElementsByTagName("head")[0].appendChild(el);
    });
  };

  init() {
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise((resolve, reject) => {
      const { apiId, options } = this.props;

      if (!apiId) {
        throw new Error("You need to set apiId");
      }

      window.vkAsyncInit = () => {
        window.VK.init({
          apiId: apiId,
          onlyWidgets: options.onlyWidgets
        });

        resolve(window.VK);
      };

      if (document.getElementById("vk-openapi")) {
        return;
      }

      this.fetchScript(
        `https://vk.com/js/api/openapi.js?${options.version}`
      ).catch(reject);
    });

    return this.loadingPromise;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const { vk } = this.state;

    return vk ? (
      <VKContext.Provider value={vk}>
        <React.Fragment>{this.props.children}</React.Fragment>
      </VKContext.Provider>
    ) : null;
  }
}
